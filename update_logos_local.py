import requests
import json
import os
import re

# Create logos directory
os.makedirs('logos', exist_ok=True)

# Load teams.js and clean it
with open('teams.js', 'r') as f:
    content = f.read()
    match = re.search(r'const teams =\s*(\[.*?\]);', content, re.DOTALL)
    if not match:
        raise ValueError("Couldn’t find teams array in teams.js")
    array_str = match.group(1)
    print("Raw extracted array (first 400 chars):", array_str[:400])

    # Process line-by-line
    lines = array_str.splitlines()
    cleaned_lines = []
    brace_count = 0  # Track nested braces
    for i, line in enumerate(lines):
        line = line.strip()
        if not line or line.startswith('//'):  # Skip empty lines and comments
            continue
        # Quote unquoted keys at the start of key-value pairs, avoid string internals and URLs
        line = re.sub(r'(?<=[\{,])\s*(\w+)(?<!https):', r' "\1":', line)
        # Count braces to track object boundaries
        brace_count += line.count('{') - line.count('}')
        cleaned_lines.append(line)
        # Add comma if this is a complete object and not the last one
        if brace_count == 0 and line.endswith('}') and i < len(lines) - 1:
            # Check if the next non-empty line isn’t the closing bracket
            for j in range(i + 1, len(lines)):
                next_line = lines[j].strip()
                if next_line and not next_line.startswith('//'):
                    if not next_line.startswith(']'):
                        cleaned_lines[-1] += ','
                    break

    # Join back into a single string
    array_str = '\n'.join(cleaned_lines)
    print("Cleaned array (first 600 chars):", array_str[:600])
    print("Cleaned array (last 600 chars):", array_str[-600:])

    try:
        teams = json.loads(array_str)
    except json.JSONDecodeError as e:
        print(f"JSON parsing failed: {e}")
        print("Full array_str:", array_str)
        raise

API_KEY = "3"  # Your TheSportsDB API key

def download_logo(team_name):
    url = f"https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchteams.php?t={team_name.replace(' ', '%20')}"
    try:
        response = requests.get(url, timeout=5).json()
        if response['teams'] and 'strBadge' in response['teams'][0]:
            logo_url = response['teams'][0]['strBadge']
            img_data = requests.get(logo_url).content
            filename = f"logos/{team_name.lower().replace(' ', '_')}.png"
            with open(filename, 'wb') as f:
                f.write(img_data)
            return filename
        else:
            print(f"No badge found for {team_name}")
    except Exception as e:
        print(f"Failed for {team_name}: {e}")
    return "https://via.placeholder.com/200?text=Logo"

# Update logos
for team in teams:
    print(f"Processing {team['name']}...")
    team['logo'] = download_logo(team['name'])

# Save updated teams.js
with open('teams.js', 'w') as f:
    f.write('const teams = ')
    json.dump(teams, f, indent=4)
    f.write(';\n')

print("Logos downloaded and teams.js updated!")