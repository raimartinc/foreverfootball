import requests
import json
import os
import re

print("Script started!")
os.makedirs('logos', exist_ok=True)
os.makedirs('uniforms', exist_ok=True)
print("Directories created or exist.")

try:
    with open('teams.js', 'r') as f:
        content = f.read()
    print("teams.js opened successfully.")
except Exception as e:
    print(f"Failed to open teams.js: {e}")
    raise

match = re.search(r'const teams =\s*(\[.*?\]);', content, re.DOTALL)
if not match:
    raise ValueError("Couldn’t find teams array in teams.js")
array_str = match.group(1)
print("Raw extracted array (first 400 chars):", array_str[:400])

lines = array_str.splitlines()
cleaned_lines = []
brace_count = 0
for i, line in enumerate(lines):
    line = line.strip()
    if not line or line.startswith('//'):
        continue
    line = re.sub(r'(?<=[\{,])\s*(\w+)(?<!https):', r' "\1":', line)
    brace_count += line.count('{') - line.count('}')
    cleaned_lines.append(line)
    if brace_count == 0 and line.endswith('}') and i < len(lines) - 1:
        for j in range(i + 1, len(lines)):
            next_line = lines[j].strip()
            if next_line and not next_line.startswith('//'):
                if not next_line.startswith(']'):
                    cleaned_lines[-1] += ','
                break

array_str = '\n'.join(cleaned_lines)
print("Cleaned array (first 600 chars):", array_str[:600])
print("Cleaned array (last 600 chars):", array_str[-600:])

try:
    teams = json.loads(array_str)
    print(f"Loaded {len(teams)} teams successfully.")
except json.JSONDecodeError as e:
    print(f"JSON parsing failed: {e}")
    print("Full array_str:", array_str)
    raise

API_KEY = "3"

def download_image(url, filename, team_name, image_type):
    try:
        img_data = requests.get(url, timeout=5).content
        with open(filename, 'wb') as f:
            f.write(img_data)
        return filename
    except Exception as e:
        print(f"Failed to download {image_type} for {team_name}: {e}")
        return None

def update_team_images(team):
    team_name = team['name']
    search_url = f"https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchteams.php?t={team_name.replace(' ', '%20')}"
    try:
        response = requests.get(search_url, timeout=5).json()
        if not response['teams'] or not response['teams'][0]:
            print(f"No team data found for {team_name}")
            return team.get('logo', "https://via.placeholder.com/200?text=Logo"), team.get('uniform', "https://via.placeholder.com/200?text=Uniform")

        team_data = response['teams'][0]
        team_id = team_data.get('idTeam', '')
        if not team_id:
            print(f"No team ID for {team_name}")
            return team.get('logo', "https://via.placeholder.com/200?text=Logo"), team.get('uniform', "https://via.placeholder.com/200?text=Uniform")

        # Logo
        logo_url = team_data.get('strBadge', '')
        logo_filename = f"logos/{team_name.lower().replace(' ', '_')}.png" if logo_url else None
        if logo_url:
            logo_filename = download_image(logo_url, logo_filename, team_name, "logo")
        logo_path = logo_filename or team.get('logo', "https://via.placeholder.com/200?text=Logo")

        # Uniform from equipment endpoint
        equip_url = f"https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupequipment.php?id={team_id}"
        uniform_filename = None
        try:
            equip_response = requests.get(equip_url, timeout=5).json()
            if equip_response['equipment'] and len(equip_response['equipment']) > 0:
                print(f"Full equipment for {team_name}: {json.dumps(equip_response['equipment'], indent=2)}")  # Debug full array
                # Try to find the home kit (often has "Home" in strType or strSeason matches current year)
                uniform_url = None
                current_season = "2023-24"  # Adjust as needed
                for equip in equip_response['equipment']:
                    if "Home" in equip.get('strType', '') or current_season in equip.get('strSeason', ''):
                        uniform_url = equip.get('strEquipment', '')
                        break
                if not uniform_url:  # Fallback to first item if no "Home" or season match
                    uniform_url = equip_response['equipment'][0].get('strEquipment', '')
                print(f"Selected uniform URL for {team_name}: {uniform_url}")
                if uniform_url:
                    uniform_filename = f"uniforms/{team_name.lower().replace(' ', '_')}.png"
                    uniform_filename = download_image(uniform_url, uniform_filename, team_name, "uniform")
            else:
                print(f"No equipment data for {team_name}")
        except Exception as e:
            print(f"Equipment API failed for {team_name}: {e}")

        uniform_path = uniform_filename or team.get('uniform', "https://via.placeholder.com/200?text=Uniform")
        return logo_path, uniform_path

    except Exception as e:
        print(f"Search API failed for {team_name}: {e}")
        return team.get('logo', "https://via.placeholder.com/200?text=Logo"), team.get('uniform', "https://via.placeholder.com/200?text=Uniform")

# Update logos and uniforms
for team in teams[:5]:  # Limit to 5 teams for testing
    print(f"Processing {team['name']}...")
    logo_path, uniform_path = update_team_images(team)
    team['logo'] = logo_path
    team['uniform'] = uniform_path

# Save updated teams.js
with open('teams.js', 'w') as f:
    f.write('const teams = ')
    json.dump(teams, f, indent=4)
    f.write(';\n')

print("Logos and uniforms downloaded, teams.js updated!")