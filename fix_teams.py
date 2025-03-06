import json
import re

# Load the mangled teams.js
with open('teams.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Extract the array
match = re.search(r'const teams =\s*(\[.*\]);', content, re.DOTALL)
if not match:
    print("Couldn’t find teams array in teams.js!")
    exit()

raw_data = match.group(1)
teams = json.loads(raw_data)

# Function to fix mangled strings
def fix_string(s):
    # Try decoding as UTF-8 again to catch double-encoding
    try:
        s = s.encode().decode('utf-8')
    except:
        pass
    # Fix common mangled patterns
    s = s.replace('Ã‰', 'É').replace('Ã©', 'é')  # E with acute
    s = s.replace('Ã€', 'À').replace('Ã ', 'à')  # A with grave
    s = s.replace('Ã¢', 'â').replace('Ãª', 'ê')  # A/E with circumflex
    s = s.replace('Ã«', 'ë').replace('Ã¯', 'ï')  # E/I with diaeresis
    s = s.replace('Ã‘', 'Ñ').replace('Ã±', 'ñ')  # N with tilde
    s = s.replace('Ã“', 'Ó').replace('Ã³', 'ó')  # O with acute
    s = s.replace('Ãš', 'Ú').replace('Ãº', 'ú')  # U with acute
    s = s.replace('ÃŒ', 'Ì').replace('Ã¬', 'ì')  # I with grave
    s = s.replace('\u00e2\u20ac\u2122', "'")     # Smart quote to apostrophe
    return s

# Clean all string fields
for team in teams:
    for key in team:
        if isinstance(team[key], str):
            team[key] = fix_string(team[key])
    # Debug: Print if it’s a problem team
    if 'AS Saint-Étienne' in team['name']:
        print(f"Fixed AS Saint-Étienne: {team['name']}")

# Save cleaned version
with open('teams.js', 'w', encoding='utf-8') as f:
    f.write('const teams = ')
    json.dump(teams, f, indent=4, ensure_ascii=False)
    f.write(';\n')

print(f"Cleaned {len(teams)} teams, saved back to teams.js!")