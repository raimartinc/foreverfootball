import requests
import json
import os
import re
import unicodedata

print("Script started!")
os.makedirs('logos', exist_ok=True)
os.makedirs('uniforms', exist_ok=True)
print("Directories created or exist.")

# Load cleaned teams.js
try:
    with open('teams.js', 'r', encoding='utf-8') as f:
        content = f.read()
    print("teams.js opened successfully.")
    match = re.search(r'const teams =\s*(\[.*\]);', content, re.DOTALL)
    if not match:
        existing_teams = []
    else:
        existing_teams = json.loads(match.group(1))
    print(f"Loaded {len(existing_teams)} existing teams.")
except FileNotFoundError:
    print("No teams.js found, starting with empty list.")
    existing_teams = []
except Exception as e:
    print(f"Failed to open teams.js: {e}, starting with empty list.")
    existing_teams = []

# Load batch file
batch_file = 'argfra.js'
try:
    with open(batch_file, 'r', encoding='utf-8') as f:
        batch_content = f.read()
    print(f"{batch_file} opened successfully.")
    match = re.search(r'const \w+ =\s*(\[.*\]);', batch_content, re.DOTALL)
    if not match:
        raise ValueError(f"Couldn’t find teams array in {batch_file}")
    extracted_array = match.group(1)
    print("Extracted array (first 100 chars):", extracted_array[:100])
    new_teams = json.loads(extracted_array)
    for team in new_teams[:3]:
        print(f"Loaded team: {team['name']}")
    print(f"Loaded {len(new_teams)} new teams from {batch_file}.")
except Exception as e:
    print(f"Failed to load {batch_file}: {e}")
    raise

API_KEY = "3"

def sanitize_filename(name):
    name = ''.join(c for c in unicodedata.normalize('NFD', name) if unicodedata.category(c) != 'Mn')
    name = name.lower().replace(' ', '_').replace("'", "")
    return name

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
    safe_name = sanitize_filename(team_name)
    search_url = f"https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchteams.php?t={team_name.replace(' ', '%20')}"
    print(f"Searching for: {team_name}")
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
        logo_filename = f"logos/{safe_name}.png" if logo_url else None
        if logo_url:
            logo_filename = download_image(logo_url, logo_filename, team_name, "logo")
        logo_path = logo_filename or team.get('logo', "https://via.placeholder.com/200?text=Logo")

        # Uniform
        equip_url = f"https://www.thesportsdb.com/api/v1/json/{API_KEY}/lookupequipment.php?id={team_id}"
        uniform_filename = None
        try:
            equip_response = requests.get(equip_url, timeout=5).json()
            if equip_response['equipment'] and len(equip_response['equipment']) > 0:
                uniform_url = None
                current_season = "2023-24"
                for equip in equip_response['equipment']:
                    if "Home" in equip.get('strType', '') or current_season in equip.get('strSeason', ''):
                        uniform_url = equip.get('strEquipment', '')
                        break
                if not uniform_url:
                    uniform_url = equip_response['equipment'][0].get('strEquipment', '')
                print(f"Selected uniform URL for {team_name}: {uniform_url}")
                if uniform_url:
                    uniform_filename = f"uniforms/{safe_name}.png"
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

# Update new teams with images
for team in new_teams:
    print(f"Processing {team['name']}...")
    logo_path, uniform_path = update_team_images(team)
    team['logo'] = logo_path
    team['uniform'] = uniform_path

# Merge and deduplicate
existing_names = {team['name'] for team in existing_teams}
new_teams_unique = [team for team in new_teams if team['name'] not in existing_names]
all_teams = existing_teams + new_teams_unique
all_teams.sort(key=lambda x: x['name'])

# Save updated teams.js
with open('teams.js', 'w', encoding='utf-8') as f:
    f.write('const teams = ')
    json.dump(all_teams, f, indent=4, ensure_ascii=False)
    f.write(';\n')

print(f"Added {len(new_teams_unique)} new teams. Total teams now: {len(all_teams)}. Logos and uniforms downloaded, teams.js updated!")