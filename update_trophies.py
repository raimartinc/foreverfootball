import json
import re

# Load teams.js
with open('teams.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const teams =\s*(\[.*\]);', content, re.DOTALL)
if not match:
    print("Couldn’t find teams array in teams.js!")
    exit()

teams = json.loads(match.group(1))

# Trophy data for original 120 teams (England, Spain, Brazil, Germany, Italy, Portugal)
trophy_updates = {
    # England - Premier League
    "Arsenal": "Premier League: 3, First Division: 10, FA Cup: 14, League Cup: 2, Community Shield: 17, European Cup Winners' Cup: 1",
    "Aston Villa": "First Division: 7, FA Cup: 7, League Cup: 5, Community Shield: 1, European Cup: 1, UEFA Super Cup: 1",
    "Bournemouth": "Championship: 1, League One: 1",
    "Brentford": "Second Division/Championship: 1, Third Division: 2, Fourth Division: 1",
    "Brighton & Hove Albion": "Third Division/League One: 3, Second Division/Championship: 2",
    "Chelsea": "Premier League: 6, First Division: 1, FA Cup: 8, League Cup: 5, Community Shield: 4, Champions League: 2, Europa League: 2, UEFA Cup Winners' Cup: 2, UEFA Super Cup: 2",
    "Crystal Palace": "Championship: 2",
    "Everton": "First Division: 9, FA Cup: 5, Community Shield: 9, European Cup Winners' Cup: 1",
    "Fulham": "Championship: 3, League One: 1",
    "Ipswich Town": "First Division: 1, FA Cup: 1, UEFA Cup: 1, Championship: 2",
    "Leicester City": "Premier League: 1, FA Cup: 1, League Cup: 3, Community Shield: 2, Championship: 7",
    "Liverpool": "Premier League: 1, First Division: 18, FA Cup: 8, League Cup: 10, Community Shield: 16, European Cup/Champions League: 6, UEFA Cup/Europa League: 3, UEFA Super Cup: 4",
    "Manchester City": "Premier League: 10, First Division: 2, FA Cup: 7, League Cup: 8, Community Shield: 6, Champions League: 1, UEFA Cup Winners' Cup: 1",
    "Manchester United": "Premier League: 13, First Division: 7, FA Cup: 13, League Cup: 6, Community Shield: 21, Champions League: 3, Europa League: 1, UEFA Cup Winners' Cup: 1, UEFA Super Cup: 1",
    "Newcastle United": "First Division: 4, FA Cup: 6, Community Shield: 1, Championship: 4",
    "Nottingham Forest": "First Division: 1, FA Cup: 2, League Cup: 4, Community Shield: 1, European Cup: 2, UEFA Super Cup: 1",
    "Southampton": "FA Cup: 1, League Cup: 1, Third Division: 1",
    "Tottenham Hotspur": "First Division: 2, FA Cup: 8, League Cup: 4, Community Shield: 7, UEFA Cup: 2, European Cup Winners' Cup: 1",
    "West Ham United": "FA Cup: 3, Community Shield: 1, European Cup Winners' Cup: 1, Conference League: 1, Championship: 2",
    "Wolverhampton Wanderers": "First Division: 3, FA Cup: 4, League Cup: 2, Community Shield: 4, Championship: 3",

    # Spain - La Liga
    "Alaves": "Segunda División: 4",
    "Athletic Bilbao": "La Liga: 8, Copa del Rey: 23, Supercopa de España: 3",
    "Atletico Madrid": "La Liga: 11, Copa del Rey: 10, Supercopa de España: 2, Europa League: 3, UEFA Cup Winners' Cup: 1, UEFA Super Cup: 3",
    "Barcelona": "La Liga: 27, Copa del Rey: 31, Supercopa de España: 14, Champions League: 5, UEFA Cup Winners' Cup: 4, UEFA Super Cup: 5, Club World Cup: 3",
    "Celta Vigo": "Segunda División: 3",
    "Espanyol": "Copa del Rey: 4, Segunda División: 2",
    "Getafe": "",
    "Girona": "Segunda División: 1",
    "Las Palmas": "Segunda División: 2",
    "Leganes": "",
    "Mallorca": "Copa del Rey: 1, Supercopa de España: 1, Segunda División: 2",
    "Osasuna": "Segunda División: 4",
    "Rayo Vallecano": "Segunda División: 1",
    "Real Betis": "La Liga: 1, Copa del Rey: 3, Segunda División: 7",
    "Real Madrid": "La Liga: 35, Copa del Rey: 20, Supercopa de España: 13, Champions League: 15, UEFA Cup: 2, UEFA Super Cup: 5, Club World Cup: 5",
    "Real Sociedad": "La Liga: 2, Copa del Rey: 2, Supercopa de España: 1, Segunda División: 3",
    "Real Valladolid": "Segunda División: 3",
    "Sevilla": "La Liga: 1, Copa del Rey: 5, Supercopa de España: 1, Europa League: 7, UEFA Super Cup: 1",
    "Valencia": "La Liga: 6, Copa del Rey: 8, Supercopa de España: 1, UEFA Cup/Europa League: 1, UEFA Cup Winners' Cup: 1, UEFA Super Cup: 1",
    "Villarreal": "Europa League: 1",

    # Brazil - Série A
    "Athletico Paranaense": "Série A: 1, Copa do Brasil: 1, Copa Sudamericana: 2, Campeonato Paranaense: 27",
    "Atletico Goianiense": "Série B: 2, Campeonato Goiano: 15",
    "Atletico Mineiro": "Série A: 2, Copa do Brasil: 2, Copa Libertadores: 1, Recopa Sudamericana: 1, Campeonato Mineiro: 48",
    "Bahia": "Série A: 2, Copa do Nordeste: 4, Campeonato Baiano: 50",
    "Botafogo": "Série A: 2, Campeonato Carioca: 21, Série B: 2",
    "Bragantino": "Série B: 2, Campeonato Paulista: 1",
    "Corinthians": "Série A: 7, Copa do Brasil: 3, Campeonato Paulista: 30, Copa Libertadores: 1, Club World Cup: 2",
    "Cruzeiro": "Série A: 4, Copa do Brasil: 6, Campeonato Mineiro: 38, Copa Libertadores: 2",
    "Cuiaba": "Campeonato Mato-Grossense: 11",
    "Flamengo": "Série A: 7, Copa do Brasil: 4, Campeonato Carioca: 37, Copa Libertadores: 3, Intercontinental Cup: 1",
    "Fluminense": "Série A: 4, Copa do Brasil: 1, Campeonato Carioca: 33, Copa Libertadores: 1",
    "Fortaleza": "Série B: 1, Copa do Nordeste: 3, Campeonato Cearense: 46",
    "Gremio": "Série A: 2, Copa do Brasil: 5, Campeonato Gaúcho: 42, Copa Libertadores: 3, Intercontinental Cup: 1",
    "Internacional": "Série A: 3, Copa do Brasil: 1, Campeonato Gaúcho: 45, Copa Libertadores: 2, Club World Cup: 1",
    "Juventude": "Série B: 1, Copa do Brasil: 1, Campeonato Gaúcho: 1",
    "Palmeiras": "Série A: 12, Copa do Brasil: 4, Campeonato Paulista: 25, Copa Libertadores: 3, Intercontinental Cup: 1",
    "Santos FC": "Série A: 7, Copa do Brasil: 1, Campeonato Paulista: 22, Copa Libertadores: 3, Intercontinental Cup: 2",
    "Sao Paulo": "Série A: 6, Copa do Brasil: 1, Campeonato Paulista: 22, Copa Libertadores: 3, Intercontinental Cup: 3",
    "Vasco da Gama": "Série A: 4, Copa do Brasil: 1, Campeonato Carioca: 24, Copa Libertadores: 1",
    "Vitoria": "Campeonato Baiano: 29, Copa do Nordeste: 4",

    # Germany - Bundesliga
    "Augsburg": "",
    "Bayer Leverkusen": "Bundesliga: 1, DFB-Pokal: 2, UEFA Cup: 1",
    "Bayern Munich": "Bundesliga: 33, DFB-Pokal: 20, DFL-Supercup: 10, Champions League: 6, UEFA Cup: 1, UEFA Cup Winners' Cup: 1, Intercontinental Cup: 2, Club World Cup: 2",
    "Bochum": "2. Bundesliga: 4",
    "Borussia Dortmund": "Bundesliga: 8, DFB-Pokal: 5, DFL-Supercup: 6, Champions League: 1, UEFA Cup Winners' Cup: 1, Intercontinental Cup: 1",
    "Borussia Monchengladbach": "Bundesliga: 5, DFB-Pokal: 3, UEFA Cup: 2",
    "Eintracht Frankfurt": "Bundesliga: 1, DFB-Pokal: 5, UEFA Cup/Europa League: 2",
    "Freiburg": "2. Bundesliga: 4",
    "Hamburg SV": "Bundesliga: 6, DFB-Pokal: 3, European Cup: 1, UEFA Cup Winners' Cup: 1",
    "Heidenheim": "2. Bundesliga: 1",
    "Hoffenheim": "",
    "Holstein Kiel": "3. Liga: 1",
    "Koln": "Bundesliga: 3, DFB-Pokal: 4, 2. Bundesliga: 4",
    "Mainz 05": "",
    "RB Leipzig": "DFB-Pokal: 2, DFL-Supercup: 1",
    "Schalke 04": "Bundesliga: 7, DFB-Pokal: 5, DFL-Supercup: 1, UEFA Cup: 1",
    "Union Berlin": "3. Liga: 1",
    "VfB Stuttgart": "Bundesliga: 5, DFB-Pokal: 3, DFL-Supercup: 1, 2. Bundesliga: 2",
    "Werder Bremen": "Bundesliga: 4, DFB-Pokal: 6, DFL-Supercup: 3, UEFA Cup Winners' Cup: 1, 2. Bundesliga: 1",
    "Wolfsburg": "Bundesliga: 1, DFB-Pokal: 1, DFL-Supercup: 1",

    # Italy - Serie A
    "AC Milan": "Serie A: 19, Coppa Italia: 5, Supercoppa Italiana: 7, Champions League: 7, UEFA Super Cup: 5, Intercontinental Cup: 3",
    "AS Roma": "Serie A: 3, Coppa Italia: 9, Supercoppa Italiana: 2, Conference League: 1",
    "Atalanta": "Serie B: 6, Coppa Italia: 1",
    "Bologna": "Serie A: 7, Coppa Italia: 2",
    "Cagliari": "Serie A: 1, Serie B: 3",
    "Empoli": "Serie B: 3",
    "Fiorentina": "Serie A: 2, Coppa Italia: 6, UEFA Cup Winners' Cup: 1, Serie B: 3",
    "Genoa": "Serie A: 9, Coppa Italia: 1, Serie B: 6",
    "Hellas Verona": "Serie A: 1, Serie B: 3",
    "Inter Milan": "Serie A: 19, Coppa Italia: 9, Supercoppa Italiana: 8, Champions League: 3, UEFA Cup: 3, Intercontinental Cup: 2",
    "Juventus": "Serie A: 36, Coppa Italia: 15, Supercoppa Italiana: 9, Champions League: 2, UEFA Cup: 3, UEFA Cup Winners' Cup: 1, UEFA Super Cup: 2, Intercontinental Cup: 2",
    "Lazio": "Serie A: 2, Coppa Italia: 7, Supercoppa Italiana: 5, UEFA Cup Winners' Cup: 1, UEFA Super Cup: 1",
    "Lecce": "Serie B: 2",
    "Monza": "Serie B: 4",
    "Napoli": "Serie A: 3, Coppa Italia: 6, Supercoppa Italiana: 2, UEFA Cup: 1",
    "Parma": "Coppa Italia: 3, UEFA Cup: 2, UEFA Cup Winners' Cup: 1, UEFA Super Cup: 1, Serie B: 4",
    "Salernitana": "Serie B: 2",
    "Sassuolo": "",
    "Torino": "Serie A: 7, Coppa Italia: 5, Serie B: 3",
    "Udinese": "Serie B: 2",

    # Portugal - Primeira Liga
    "AVS": "",
    "Arouca": "",
    "Belenenses": "Primeira Liga: 1, Taça de Portugal: 3",
    "Benfica": "Primeira Liga: 38, Taça de Portugal: 26, Taça da Liga: 7, Supertaça Cândido de Oliveira: 8, European Cup: 2",
    "Boavista": "Primeira Liga: 1, Taça de Portugal: 5, Supertaça Cândido de Oliveira: 3",
    "Braga": "Primeira Liga: 0, Taça de Portugal: 3, Taça da Liga: 2, Supertaça Cândido de Oliveira: 1",
    "Casa Pia": "",
    "Estoril": "",
    "Estrela da Amadora": "Taça de Portugal: 1",
    "Famalicão": "",
    "Farense": "",
    "Gil Vicente": "",
    "Maritimo": "Taça de Portugal: 1",
    "Moreirense": "Taça da Liga: 1",
    "Nacional": "",
    "Porto": "Primeira Liga: 30, Taça de Portugal: 19, Taça da Liga: 1, Supertaça Cândido de Oliveira: 23, Champions League: 2, UEFA Cup/Europa League: 2, UEFA Super Cup: 1, Intercontinental Cup: 2",
    "Rio Ave": "",
    "Santa Clara": "",
    "Sporting CP": "Primeira Liga: 19, Taça de Portugal: 17, Taça da Liga: 4, Supertaça Cândido de Oliveira: 9",
    "Vitoria Guimaraes": "Taça de Portugal: 1, Supertaça Cândido de Oliveira: 1"
}

# Update trophies for original 120 teams only (skip France and Argentina)
updated_count = 0
for team in teams:
    if team['league'] not in ["Ligue 1", "Primera División"] and team['name'] in trophy_updates:
        team['trophies'] = trophy_updates[team['name']]
        print(f"Updated trophies for {team['name']}")
        updated_count += 1

# Save updated teams.js
with open('teams.js', 'w', encoding='utf-8') as f:
    f.write('const teams = ')
    json.dump(teams, f, indent=4, ensure_ascii=False)
    f.write(';\n')

print(f"Updated {updated_count} teams with full trophies, saved to teams.js!")