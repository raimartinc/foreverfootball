const countries = [
    // 1. Brazil
    {
        name: "Brazil",
        flag: "/flags/brazil.png",
        uniform: "/shirts/brazil.png",
        highlight: "5-time World Cup champs with samba flair.",
        fullHighlight: "Brazil’s five World Cup wins and nine Copa Américas cement their dominance.",
        worldCupParticipations: 22,
        tournaments: [
            "FIFA World Cup 1958", "FIFA World Cup 1962", "FIFA World Cup 1970", "FIFA World Cup 1994", "FIFA World Cup 2002",
            "Copa América 1919", "Copa América 1922", "Copa América 1949", "Copa América 1989", "Copa América 1997", 
            "Copa América 1999", "Copa América 2004", "Copa América 2007", "Copa América 2019"
        ],
        worldCupFinishes: { "1958": "1st", "1962": "1st", "1970": "1st", "1994": "1st", "2002": "1st", "1998": "2nd", "1950": "2nd", "1938": "3rd", "1978": "3rd" },
        legendaryGoalkeeper: "Gilmar",
        legendaryDefender: "Carlos Alberto",
        legendaryMidfielder: "Zico",
        legendaryStriker: "Pelé",
        bestStrikers: [
            { name: "Pelé", totalGoals: 77, worldCupGoals: 12 },
            { name: "Ronaldo", totalGoals: 62, worldCupGoals: 15 },
            { name: "Romário", totalGoals: 55, worldCupGoals: 5 }
        ]
    },
    // 2. Germany
    {
        name: "Germany",
        flag: "/flags/germany.png",
        uniform: "/shirts/germany.png",
        highlight: "4 World Cup titles with ruthless efficiency.",
        fullHighlight: "Germany’s four World Cups and three Euros showcase their consistency.",
        worldCupParticipations: 20,
        tournaments: [
            "FIFA World Cup 1954", "FIFA World Cup 1974", "FIFA World Cup 1990", "FIFA World Cup 2014",
            "UEFA Euro 1972", "UEFA Euro 1980", "UEFA Euro 1996"
        ],
        worldCupFinishes: { "1954": "1st", "1974": "1st", "1990": "1st", "2014": "1st", "1966": "2nd", "1982": "2nd", "1986": "2nd", "2002": "2nd", "1970": "3rd", "2006": "3rd", "2010": "3rd", "1934": "3rd" },
        legendaryGoalkeeper: "Sepp Maier",
        legendaryDefender: "Franz Beckenbauer",
        legendaryMidfielder: "Lothar Matthäus",
        legendaryStriker: "Gerd Müller",
        bestStrikers: [
            { name: "Miroslav Klose", totalGoals: 71, worldCupGoals: 16 },
            { name: "Gerd Müller", totalGoals: 68, worldCupGoals: 14 },
            { name: "Jürgen Klinsmann", totalGoals: 47, worldCupGoals: 11 }
        ]
    },
    // 3. Italy
    {
        name: "Italy",
        flag: "/flags/italy.png",
        uniform: "/shirts/italy.png",
        highlight: "4 World Cup titles with defensive mastery.",
        fullHighlight: "Italy’s four World Cups and two Euros define their legacy.",
        worldCupParticipations: 18,
        tournaments: ["FIFA World Cup 1934", "FIFA World Cup 1938", "FIFA World Cup 1982", "FIFA World Cup 2006", "UEFA Euro 1968", "UEFA Euro 2020"],
        worldCupFinishes: { "1934": "1st", "1938": "1st", "1982": "1st", "2006": "1st", "1970": "2nd", "1994": "2nd" },
        legendaryGoalkeeper: "Dino Zoff",
        legendaryDefender: "Paolo Maldini",
        legendaryMidfielder: "Andrea Pirlo",
        legendaryStriker: "Paolo Rossi",
        bestStrikers: [
            { name: "Paolo Rossi", totalGoals: 20, worldCupGoals: 9 },
            { name: "Christian Vieri", totalGoals: 23, worldCupGoals: 9 },
            { name: "Roberto Baggio", totalGoals: 27, worldCupGoals: 9 }
        ]
    },
    // 4. Argentina
    {
        name: "Argentina",
        flag: "/flags/argentina.png",
        uniform: "/shirts/argentina.png",
        highlight: "3-time World Cup winners with Messi’s magic.",
        fullHighlight: "Argentina’s three World Cups and 15 Copa Américas mark their greatness.",
        worldCupParticipations: 18,
        tournaments: [
            "FIFA World Cup 1978", "FIFA World Cup 1986", "FIFA World Cup 2022",
            "Copa América 1921", "Copa América 1925", "Copa América 1927", "Copa América 1929", "Copa América 1937",
            "Copa América 1941", "Copa América 1945", "Copa América 1946", "Copa América 1947", "Copa América 1955",
            "Copa América 1957", "Copa América 1959", "Copa América 1991", "Copa América 1993", "Copa América 2021"
        ],
        worldCupFinishes: { "1978": "1st", "1986": "1st", "2022": "1st", "1930": "2nd", "1990": "2nd", "2014": "2nd" },
        legendaryGoalkeeper: "Ubaldo Fillol",
        legendaryDefender: "Daniel Passarella",
        legendaryMidfielder: "Diego Maradona",
        legendaryStriker: "Lionel Messi",
        bestStrikers: [
            { name: "Lionel Messi", totalGoals: 109, worldCupGoals: 13 },
            { name: "Gabriel Batistuta", totalGoals: 54, worldCupGoals: 10 },
            { name: "Hernán Crespo", totalGoals: 35, worldCupGoals: 4 }
        ]
    },
    // 5. France
    {
        name: "France",
        flag: "/flags/france.png",
        uniform: "/shirts/france.png",
        highlight: "2 World Cup titles with flair and power.",
        fullHighlight: "France’s two World Cups and two Euros highlight their versatility.",
        worldCupParticipations: 16,
        tournaments: ["FIFA World Cup 1998", "FIFA World Cup 2018", "UEFA Euro 1984", "UEFA Euro 2000"],
        worldCupFinishes: { "1998": "1st", "2018": "1st", "2006": "2nd", "1958": "3rd", "1986": "3rd" },
        legendaryGoalkeeper: "Fabien Barthez",
        legendaryDefender: "Marcel Desailly",
        legendaryMidfielder: "Zinedine Zidane",
        legendaryStriker: "Thierry Henry",
        bestStrikers: [
            { name: "Thierry Henry", totalGoals: 51, worldCupGoals: 6 },
            { name: "Just Fontaine", totalGoals: 30, worldCupGoals: 13 },
            { name: "Kylian Mbappé", totalGoals: 46, worldCupGoals: 12 }
        ]
    },
    // 6. Uruguay
    {
        name: "Uruguay",
        flag: "/flags/uruguay.png",
        uniform: "/shirts/uruguay.png",
        highlight: "2 World Cup wins as early giants.",
        fullHighlight: "Uruguay’s two World Cups and 15 Copa Américas make them legends.",
        worldCupParticipations: 14,
        tournaments: [
            "FIFA World Cup 1930", "FIFA World Cup 1950",
            "Copa América 1916", "Copa América 1917", "Copa América 1920", "Copa América 1923", "Copa América 1924",
            "Copa América 1926", "Copa América 1935", "Copa América 1942", "Copa América 1956", "Copa América 1959",
            "Copa América 1967", "Copa América 1983", "Copa América 1987", "Copa América 1995", "Copa América 2011"
        ],
        worldCupFinishes: { "1930": "1st", "1950": "1st", "1954": "4th", "1970": "4th", "2010": "4th" },
        legendaryGoalkeeper: "Ladislao Mazurkiewicz",
        legendaryDefender: "José Nasazzi",
        legendaryMidfielder: "Juan Alberto Schiaffino",
        legendaryStriker: "Luis Suárez",
        bestStrikers: [
            { name: "Luis Suárez", totalGoals: 68, worldCupGoals: 7 },
            { name: "Diego Forlán", totalGoals: 36, worldCupGoals: 6 },
            { name: "Héctor Scarone", totalGoals: 31, worldCupGoals: 2 }
        ]
    },
    // 7. England
    {
        name: "England",
        flag: "/flags/england.png",
        uniform: "/shirts/england.png",
        highlight: "1966 World Cup kings.",
        fullHighlight: "England’s 1966 triumph remains their crowning glory.",
        worldCupParticipations: 16,
        tournaments: ["FIFA World Cup 1966"],
        worldCupFinishes: { "1966": "1st", "1990": "4th", "2018": "4th" },
        legendaryGoalkeeper: "Gordon Banks",
        legendaryDefender: "Bobby Moore",
        legendaryMidfielder: "Bobby Charlton",
        legendaryStriker: "Gary Lineker",
        bestStrikers: [
            { name: "Gary Lineker", totalGoals: 48, worldCupGoals: 10 },
            { name: "Harry Kane", totalGoals: 66, worldCupGoals: 8 },
            { name: "Wayne Rooney", totalGoals: 53, worldCupGoals: 1 }
        ]
    },
    // 8. Spain
    {
        name: "Spain",
        flag: "/flags/spain.png",
        uniform: "/shirts/spain.png",
        highlight: "2010 World Cup tiki-taka triumph.",
        fullHighlight: "Spain’s 2010 World Cup and three Euros define a golden era.",
        worldCupParticipations: 16,
        tournaments: ["FIFA World Cup 2010", "UEFA Euro 1964", "UEFA Euro 2008", "UEFA Euro 2012"],
        worldCupFinishes: { "2010": "1st", "1950": "4th" },
        legendaryGoalkeeper: "Iker Casillas",
        legendaryDefender: "Sergio Ramos",
        legendaryMidfielder: "Xavi",
        legendaryStriker: "David Villa",
        bestStrikers: [
            { name: "David Villa", totalGoals: 59, worldCupGoals: 9 },
            { name: "Fernando Torres", totalGoals: 38, worldCupGoals: 3 },
            { name: "Raúl", totalGoals: 44, worldCupGoals: 1 }
        ]
    },
    // 9. Netherlands
    {
        name: "Netherlands",
        flag: "/flags/netherlands.png",
        uniform: "/shirts/netherlands.png",
        highlight: "Total Football’s bridesmaids.",
        fullHighlight: "The Dutch’s three finals and 1988 Euro showcase Total Football.",
        worldCupParticipations: 11,
        tournaments: ["UEFA Euro 1988"],
        worldCupFinishes: { "1974": "2nd", "1978": "2nd", "2010": "2nd", "2014": "3rd" },
        legendaryGoalkeeper: "Edwin van der Sar",
        legendaryDefender: "Ronald Koeman",
        legendaryMidfielder: "Johan Cruyff",
        legendaryStriker: "Marco van Basten",
        bestStrikers: [
            { name: "Marco van Basten", totalGoals: 24, worldCupGoals: 1 },
            { name: "Robin van Persie", totalGoals: 50, worldCupGoals: 6 },
            { name: "Dennis Bergkamp", totalGoals: 37, worldCupGoals: 3 }
        ]
    },
    // 10. Hungary
    {
        name: "Hungary",
        flag: "/flags/hungary.png",
        uniform: "/shirts/hungary.png",
        highlight: "Magical Magyars of the 1950s.",
        fullHighlight: "Hungary’s 1950s dominance peaked with a near-miss in 1954.",
        worldCupParticipations: 9,
        tournaments: [],
        worldCupFinishes: { "1938": "2nd", "1954": "2nd" },
        legendaryGoalkeeper: "Gyula Grosics",
        legendaryDefender: "Jenő Buzánszky",
        legendaryMidfielder: "Ferenc Puskás",
        legendaryStriker: "Sándor Kocsis",
        bestStrikers: [
            { name: "Ferenc Puskás", totalGoals: 84, worldCupGoals: 4 },
            { name: "Sándor Kocsis", totalGoals: 75, worldCupGoals: 11 },
            { name: "Lajos Tichy", totalGoals: 51, worldCupGoals: 2 }
        ]
    },
    // 11. Czech Republic (includes Czechoslovakia)
    {
        name: "Czech Republic",
        flag: "/flags/czech-republic.png",
        uniform: "/shirts/czech-republic.png",
        highlight: "Czechoslovakia’s golden past.",
        fullHighlight: "Czechoslovakia’s two finals and 1976 Euro shine bright.",
        worldCupParticipations: 9,
        tournaments: ["UEFA Euro 1976"],
        worldCupFinishes: { "1934": "2nd", "1962": "2nd" },
        legendaryGoalkeeper: "František Plánička",
        legendaryDefender: "Josef Masopust",
        legendaryMidfielder: "Pavel Nedvěd",
        legendaryStriker: "Antonín Panenka",
        bestStrikers: [
            { name: "Josef Bican", totalGoals: 32, worldCupGoals: 0 },
            { name: "Oldřich Nejedlý", totalGoals: 29, worldCupGoals: 7 },
            { name: "Milan Baroš", totalGoals: 41, worldCupGoals: 0 }
        ]
    },
    // 12. Sweden
    {
        name: "Sweden",
        flag: "/flags/sweden.png",
        uniform: "/shirts/sweden.png",
        highlight: "1958 finalists on home soil.",
        fullHighlight: "Sweden’s 1958 final and multiple top finishes impress.",
        worldCupParticipations: 12,
        tournaments: [],
        worldCupFinishes: { "1958": "2nd", "1950": "3rd", "1994": "3rd" },
        legendaryGoalkeeper: "Ronnie Hellström",
        legendaryDefender: "Björn Nordqvist",
        legendaryMidfielder: "Gunnar Gren",
        legendaryStriker: "Zlatan Ibrahimović",
        bestStrikers: [
            { name: "Zlatan Ibrahimović", totalGoals: 62, worldCupGoals: 0 },
            { name: "Sven Rydell", totalGoals: 49, worldCupGoals: 0 },
            { name: "Gunnar Nordahl", totalGoals: 43, worldCupGoals: 2 }
        ]
    },
    // 13. Portugal
    {
        name: "Portugal",
        flag: "/flags/portugal.png",
        uniform: "/shirts/portugal.png",
        highlight: "Eusébio’s 1966 brilliance.",
        fullHighlight: "Portugal’s 1966 peak and 2016 Euro triumph stand out.",
        worldCupParticipations: 8,
        tournaments: ["UEFA Euro 2016"],
        worldCupFinishes: { "1966": "3rd", "2006": "4th" },
        legendaryGoalkeeper: "Vítor Baía",
        legendaryDefender: "Fernando Couto",
        legendaryMidfielder: "Luís Figo",
        legendaryStriker: "Cristiano Ronaldo",
        bestStrikers: [
            { name: "Cristiano Ronaldo", totalGoals: 130, worldCupGoals: 8 },
            { name: "Eusébio", totalGoals: 41, worldCupGoals: 9 },
            { name: "Pauleta", totalGoals: 47, worldCupGoals: 4 }
        ]
    },
    // 14. Belgium
    {
        name: "Belgium",
        flag: "/flags/belgium.png",
        uniform: "/shirts/belgium.png",
        highlight: "Golden generation’s 2018 peak.",
        fullHighlight: "Belgium’s 2018 third place caps a strong history.",
        worldCupParticipations: 14,
        tournaments: [],
        worldCupFinishes: { "2018": "3rd", "1986": "4th" },
        legendaryGoalkeeper: "Jean-Marie Pfaff",
        legendaryDefender: "Jan Vertonghen",
        legendaryMidfielder: "Kevin De Bruyne",
        legendaryStriker: "Romelu Lukaku",
        bestStrikers: [
            { name: "Romelu Lukaku", totalGoals: 85, worldCupGoals: 5 },
            { name: "Paul Van Himst", totalGoals: 30, worldCupGoals: 0 },
            { name: "Bernard Voorhoof", totalGoals: 30, worldCupGoals: 2 }
        ]
    },
    // 15. Mexico
    {
        name: "Mexico",
        flag: "/flags/mexico.png",
        uniform: "/shirts/mexico.png",
        highlight: "Consistent CONCACAF kings.",
        fullHighlight: "Mexico’s 17 World Cup appearances show regional strength.",
        worldCupParticipations: 17,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Antonio Carbajal",
        legendaryDefender: "Rafael Márquez",
        legendaryMidfielder: "Cuauhtémoc Blanco",
        legendaryStriker: "Hugo Sánchez",
        bestStrikers: [
            { name: "Hugo Sánchez", totalGoals: 29, worldCupGoals: 1 },
            { name: "Javier Hernández", totalGoals: 52, worldCupGoals: 4 },
            { name: "Luis Hernández", totalGoals: 35, worldCupGoals: 4 }
        ]
    },
    // 16. Russia (includes Soviet Union)
    {
        name: "Russia",
        flag: "/flags/russia.png",
        uniform: "/shirts/russia.png",
        highlight: "Soviet era’s 1966 peak.",
        fullHighlight: "The USSR’s 1960 Euro and 1966 fourth place mark their height.",
        worldCupParticipations: 11,
        tournaments: ["UEFA Euro 1960"],
        worldCupFinishes: { "1966": "4th" },
        legendaryGoalkeeper: "Lev Yashin",
        legendaryDefender: "Albert Shesternev",
        legendaryMidfielder: "Igor Netto",
        legendaryStriker: "Oleg Blokhin",
        bestStrikers: [
            { name: "Oleg Blokhin", totalGoals: 42, worldCupGoals: 0 },
            { name: "Eduard Streltsov", totalGoals: 25, worldCupGoals: 0 },
            { name: "Valentin Ivanov", totalGoals: 26, worldCupGoals: 4 }
        ]
    },
    // 17. Poland
    {
        name: "Poland",
        flag: "/flags/poland.png",
        uniform: "/shirts/poland.png",
        highlight: "1970s golden era.",
        fullHighlight: "Poland’s two third places in the 1970s dazzled.",
        worldCupParticipations: 9,
        tournaments: [],
        worldCupFinishes: { "1974": "3rd", "1982": "3rd" },
        legendaryGoalkeeper: "Jan Tomaszewski",
        legendaryDefender: "Władysław Żmuda",
        legendaryMidfielder: "Kazimierz Deyna",
        legendaryStriker: "Grzegorz Lato",
        bestStrikers: [
            { name: "Grzegorz Lato", totalGoals: 45, worldCupGoals: 10 },
            { name: "Robert Lewandowski", totalGoals: 82, worldCupGoals: 2 },
            { name: "Włodzimierz Lubański", totalGoals: 48, worldCupGoals: 0 }
        ]
    },
    // 18. Chile
    {
        name: "Chile",
        flag: "/flags/chile.png",
        uniform: "/shirts/chile.png",
        highlight: "1962 hosts and third place.",
        fullHighlight: "Chile’s 1962 third place and two Copa Américas shine.",
        worldCupParticipations: 9,
        tournaments: ["Copa América 2015", "Copa América 2016"],
        worldCupFinishes: { "1962": "3rd" },
        legendaryGoalkeeper: "Sergio Livingstone",
        legendaryDefender: "Elías Figueroa",
        legendaryMidfielder: "Arturo Vidal",
        legendaryStriker: "Iván Zamorano",
        bestStrikers: [
            { name: "Iván Zamorano", totalGoals: 34, worldCupGoals: 2 },
            { name: "Marcelo Salas", totalGoals: 37, worldCupGoals: 4 },
            { name: "Carlos Caszely", totalGoals: 29, worldCupGoals: 2 }
        ]
    },
    // 19. Austria
    {
        name: "Austria",
        flag: "/flags/austria.png",
        uniform: "/shirts/austria.png",
        highlight: "Wunderteam’s 1954 peak.",
        fullHighlight: "Austria’s Wunderteam hit third in 1954.",
        worldCupParticipations: 7,
        tournaments: [],
        worldCupFinishes: { "1954": "3rd", "1934": "4th" },
        legendaryGoalkeeper: "Rudolf Hiden",
        legendaryDefender: "Bruno Pezzey",
        legendaryMidfielder: "Ernst Ocwirk",
        legendaryStriker: "Hans Krankl",
        bestStrikers: [
            { name: "Hans Krankl", totalGoals: 34, worldCupGoals: 4 },
            { name: "Anton Schall", totalGoals: 27, worldCupGoals: 0 },
            { name: "Matthias Sindelar", totalGoals: 26, worldCupGoals: 0 }
        ]
    },
    // 20. Switzerland
    {
        name: "Switzerland",
        flag: "/flags/switzerland.png",
        uniform: "/shirts/switzerland.png",
        highlight: "Quarter-final regulars.",
        fullHighlight: "Switzerland’s steady World Cup presence stands out.",
        worldCupParticipations: 12,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Yann Sommer",
        legendaryDefender: "Stéphane Henchoz",
        legendaryMidfielder: "Xherdan Shaqiri",
        legendaryStriker: "Alexander Frei",
        bestStrikers: [
            { name: "Alexander Frei", totalGoals: 42, worldCupGoals: 3 },
            { name: "Max Abegglen", totalGoals: 34, worldCupGoals: 2 },
            { name: "Josef Hügi", totalGoals: 22, worldCupGoals: 6 }
        ]
    },
    // 21. Colombia
    {
        name: "Colombia",
        flag: "/flags/colombia.png",
        uniform: "/shirts/colombia.png",
        highlight: "2014 quarter-final flair.",
        fullHighlight: "Colombia’s 2014 run and 2001 Copa América impress.",
        worldCupParticipations: 6,
        tournaments: ["Copa América 2001"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "René Higuita",
        legendaryDefender: "Iván Córdoba",
        legendaryMidfielder: "Carlos Valderrama",
        legendaryStriker: "Radamel Falcao",
        bestStrikers: [
            { name: "Radamel Falcao", totalGoals: 36, worldCupGoals: 1 },
            { name: "Faustino Asprilla", totalGoals: 20, worldCupGoals: 2 },
            { name: "Arnoldo Iguarán", totalGoals: 25, worldCupGoals: 0 }
        ]
    },
    // 22. Croatia
    {
        name: "Croatia",
        flag: "/flags/croatia.png",
        uniform: "/shirts/croatia.png",
        highlight: "2018 finalists.",
        fullHighlight: "Croatia’s 2018 final and 1998 third place defy their size.",
        worldCupParticipations: 6,
        tournaments: [],
        worldCupFinishes: { "2018": "2nd", "1998": "3rd" },
        legendaryGoalkeeper: "Dražen Ladić",
        legendaryDefender: "Dario Šimić",
        legendaryMidfielder: "Luka Modrić",
        legendaryStriker: "Davor Šuker",
        bestStrikers: [
            { name: "Davor Šuker", totalGoals: 45, worldCupGoals: 6 },
            { name: "Mario Mandžukić", totalGoals: 33, worldCupGoals: 5 },
            { name: "Ivan Perišić", totalGoals: 33, worldCupGoals: 6 }
        ]
    },
    // 23. Serbia (includes Yugoslavia)
    {
        name: "Serbia",
        flag: "/flags/serbia.png",
        uniform: "/shirts/serbia.png",
        highlight: "Yugoslavia’s historic runs.",
        fullHighlight: "Yugoslavia’s fourth places and Balkan talent endure.",
        worldCupParticipations: 13,
        tournaments: [],
        worldCupFinishes: { "1930": "4th", "1962": "4th" },
        legendaryGoalkeeper: "Milutin Šoškić",
        legendaryDefender: "Velibor Vasović",
        legendaryMidfielder: "Dragan Džajić",
        legendaryStriker: "Milan Galić",
        bestStrikers: [
            { name: "Milan Galić", totalGoals: 37, worldCupGoals: 5 },
            { name: "Savo Milošević", totalGoals: 37, worldCupGoals: 1 },
            { name: "Aleksandar Mitrović", totalGoals: 58, worldCupGoals: 2 }
        ]
    },
    // 24. Romania
    {
        name: "Romania",
        flag: "/flags/romania.png",
        uniform: "/shirts/romania.png",
        highlight: "1994 quarter-final heroes.",
        fullHighlight: "Romania’s 1994 run thrilled the world.",
        worldCupParticipations: 7,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Silviu Lung",
        legendaryDefender: "Gheorghe Popescu",
        legendaryMidfielder: "Gheorghe Hagi",
        legendaryStriker: "Florin Răducioiu",
        bestStrikers: [
            { name: "Gheorghe Hagi", totalGoals: 35, worldCupGoals: 3 },
            { name: "Florin Răducioiu", totalGoals: 21, worldCupGoals: 4 },
            { name: "Adrian Mutu", totalGoals: 35, worldCupGoals: 0 }
        ]
    },
    // 25. Bulgaria
    {
        name: "Bulgaria",
        flag: "/flags/bulgaria.png",
        uniform: "/shirts/bulgaria.png",
        highlight: "1994’s surprise semi-finalists.",
        fullHighlight: "Bulgaria’s 1994 fourth place stunned football.",
        worldCupParticipations: 7,
        tournaments: [],
        worldCupFinishes: { "1994": "4th" },
        legendaryGoalkeeper: "Borislav Mihaylov",
        legendaryDefender: "Trifon Ivanov",
        legendaryMidfielder: "Krassimir Balakov",
        legendaryStriker: "Hristo Stoichkov",
        bestStrikers: [
            { name: "Hristo Stoichkov", totalGoals: 37, worldCupGoals: 6 },
            { name: "Emil Kostadinov", totalGoals: 26, worldCupGoals: 2 },
            { name: "Dimitar Berbatov", totalGoals: 48, worldCupGoals: 0 }
        ]
    },
    // 26. Peru
    {
        name: "Peru",
        flag: "/flags/peru.png",
        uniform: "/shirts/peru.png",
        highlight: "1970s South American flair.",
        fullHighlight: "Peru’s 1970s runs and 1975 Copa América dazzled.",
        worldCupParticipations: 5,
        tournaments: ["Copa América 1939", "Copa América 1975"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Ramón Quiroga",
        legendaryDefender: "Héctor Chumpitaz",
        legendaryMidfielder: "Teófilo Cubillas",
        legendaryStriker: "Hugo Sotil",
        bestStrikers: [
            { name: "Teófilo Cubillas", totalGoals: 26, worldCupGoals: 10 },
            { name: "Hugo Sotil", totalGoals: 18, worldCupGoals: 1 },
            { name: "Paolo Guerrero", totalGoals: 39, worldCupGoals: 1 }
        ]
    },
    // 27. United States
    {
        name: "United States",
        flag: "/flags/usa.png",
        uniform: "/shirts/usa.png",
        highlight: "1930’s surprise bronze.",
        fullHighlight: "The U.S.’s 1930 third place was an early shock.",
        worldCupParticipations: 11,
        tournaments: [],
        worldCupFinishes: { "1930": "3rd" },
        legendaryGoalkeeper: "Tim Howard",
        legendaryDefender: "Eddie Pope",
        legendaryMidfielder: "Landon Donovan",
        legendaryStriker: "Clint Dempsey",
        bestStrikers: [
            { name: "Clint Dempsey", totalGoals: 57, worldCupGoals: 4 },
            { name: "Landon Donovan", totalGoals: 57, worldCupGoals: 5 },
            { name: "Jozy Altidore", totalGoals: 42, worldCupGoals: 2 }
        ]
    },
    // 28. Cameroon
    {
        name: "Cameroon",
        flag: "/flags/cameroon.png",
        uniform: "/shirts/cameroon.png",
        highlight: "1990 quarter-final pioneers.",
        fullHighlight: "Cameroon’s 1990 run and five AFCON titles broke barriers.",
        worldCupParticipations: 8,
        tournaments: ["Africa Cup of Nations 1984", "Africa Cup of Nations 1988", "Africa Cup of Nations 2000", "Africa Cup of Nations 2002", "Africa Cup of Nations 2017"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Thomas N’Kono",
        legendaryDefender: "Rigobert Song",
        legendaryMidfielder: "Marc-Vivien Foé",
        legendaryStriker: "Roger Milla",
        bestStrikers: [
            { name: "Roger Milla", totalGoals: 43, worldCupGoals: 5 },
            { name: "Samuel Eto’o", totalGoals: 56, worldCupGoals: 3 },
            { name: "Patrick M’Boma", totalGoals: 33, worldCupGoals: 2 }
        ]
    },
    // 29. Scotland
    {
        name: "Scotland",
        flag: "/flags/scotland.png",
        uniform: "/shirts/scotland.png",
        highlight: "British football pioneers.",
        fullHighlight: "Scotland’s 8 World Cup runs showed British grit.",
        worldCupParticipations: 8,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Jim Leighton",
        legendaryDefender: "Danny McGrain",
        legendaryMidfielder: "Graeme Souness",
        legendaryStriker: "Kenny Dalglish",
        bestStrikers: [
            { name: "Kenny Dalglish", totalGoals: 30, worldCupGoals: 2 },
            { name: "Denis Law", totalGoals: 30, worldCupGoals: 0 },
            { name: "Hughie Gallacher", totalGoals: 24, worldCupGoals: 0 }
        ]
    },
    // 30. Turkey
    {
        name: "Turkey",
        flag: "/flags/turkey.png",
        uniform: "/shirts/turkey.png",
        highlight: "2002’s surprise bronze.",
        fullHighlight: "Turkey’s 2002 third place stunned Asia.",
        worldCupParticipations: 2,
        tournaments: [],
        worldCupFinishes: { "2002": "3rd" },
        legendaryGoalkeeper: "Rüştü Reçber",
        legendaryDefender: "Bülent Korkmaz",
        legendaryMidfielder: "Emre Belözoğlu",
        legendaryStriker: "Hakan Şükür",
        bestStrikers: [
            { name: "Hakan Şükür", totalGoals: 51, worldCupGoals: 2 },
            { name: "Burak Yılmaz", totalGoals: 31, worldCupGoals: 0 },
            { name: "Metin Oktay", totalGoals: 19, worldCupGoals: 0 }
        ]
    },
    // 31. Japan
    {
        name: "Japan",
        flag: "/flags/japan.png",
        uniform: "/shirts/japan.png",
        highlight: "Asia’s modern powerhouse.",
        fullHighlight: "Japan’s seven World Cup appearances and four Asian Cups show their rise.",
        worldCupParticipations: 7,
        tournaments: ["AFC Asian Cup 1992", "AFC Asian Cup 2000", "AFC Asian Cup 2004", "AFC Asian Cup 2011"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Yoshikatsu Kawaguchi",
        legendaryDefender: "Yuto Nagatomo",
        legendaryMidfielder: "Hidetoshi Nakata",
        legendaryStriker: "Kunishige Kamamoto",
        bestStrikers: [
            { name: "Kunishige Kamamoto", totalGoals: 75, worldCupGoals: 0 },
            { name: "Shinji Okazaki", totalGoals: 50, worldCupGoals: 3 },
            { name: "Keisuke Honda", totalGoals: 37, worldCupGoals: 4 }
        ]
    },
    // 32. South Korea
    {
        name: "South Korea",
        flag: "/flags/south-korea.png",
        uniform: "/shirts/south-korea.png",
        highlight: "2002’s stunning fourth place.",
        fullHighlight: "South Korea’s 2002 semi-final and two Asian Cups mark their legacy.",
        worldCupParticipations: 11,
        tournaments: ["AFC Asian Cup 1956", "AFC Asian Cup 1960"],
        worldCupFinishes: { "2002": "4th" },
        legendaryGoalkeeper: "Lee Woon-jae",
        legendaryDefender: "Hong Myung-bo",
        legendaryMidfielder: "Park Ji-sung",
        legendaryStriker: "Cha Bum-kun",
        bestStrikers: [
            { name: "Cha Bum-kun", totalGoals: 58, worldCupGoals: 0 },
            { name: "Hwang Sun-hong", totalGoals: 50, worldCupGoals: 2 },
            { name: "Son Heung-min", totalGoals: 48, worldCupGoals: 3 }
        ]
    },
    // 33. Nigeria
    {
        name: "Nigeria",
        flag: "/flags/nigeria.png",
        uniform: "/shirts/nigeria.png",
        highlight: "Africa’s Super Eagles soar.",
        fullHighlight: "Nigeria’s six AFCON titles and 1994 flair stand tall.",
        worldCupParticipations: 6,
        tournaments: ["Africa Cup of Nations 1980", "Africa Cup of Nations 1994", "Africa Cup of Nations 2000", "Africa Cup of Nations 2013", "Africa Cup of Nations 2019", "Africa Cup of Nations 2021"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Vincent Enyeama",
        legendaryDefender: "Taribo West",
        legendaryMidfielder: "Jay-Jay Okocha",
        legendaryStriker: "Rashidi Yekini",
        bestStrikers: [
            { name: "Rashidi Yekini", totalGoals: 37, worldCupGoals: 1 },
            { name: "Victor Osimhen", totalGoals: 23, worldCupGoals: 0 },
            { name: "Segun Odegbami", totalGoals: 23, worldCupGoals: 0 }
        ]
    },
    // 34. Algeria
    {
        name: "Algeria",
        flag: "/flags/algeria.png",
        uniform: "/shirts/algeria.png",
        highlight: "Desert Foxes’ 1982 upset.",
        fullHighlight: "Algeria’s two AFCON wins and 1982 giant-killing shine.",
        worldCupParticipations: 4,
        tournaments: ["Africa Cup of Nations 1990", "Africa Cup of Nations 2019"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Raïs M’Bolhi",
        legendaryDefender: "Madjid Bougherra",
        legendaryMidfielder: "Rabah Madjer",
        legendaryStriker: "Lakhdar Belloumi",
        bestStrikers: [
            { name: "Lakhdar Belloumi", totalGoals: 28, worldCupGoals: 2 },
            { name: "Abdelhafid Tasfaout", totalGoals: 36, worldCupGoals: 0 },
            { name: "Islam Slimani", totalGoals: 46, worldCupGoals: 2 }
        ]
    },
    // 35. Ghana
    {
        name: "Ghana",
        flag: "/flags/ghana.png",
        uniform: "/shirts/ghana.png",
        highlight: "Black Stars’ African dominance.",
        fullHighlight: "Ghana’s four AFCON titles and 2010 quarter-final impress.",
        worldCupParticipations: 4,
        tournaments: ["Africa Cup of Nations 1963", "Africa Cup of Nations 1965", "Africa Cup of Nations 1978", "Africa Cup of Nations 1982"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Robert Mensah",
        legendaryDefender: "Samuel Kuffour",
        legendaryMidfielder: "Michael Essien",
        legendaryStriker: "Abedi Pele",
        bestStrikers: [
            { name: "Abedi Pele", totalGoals: 33, worldCupGoals: 0 },
            { name: "Asamoah Gyan", totalGoals: 51, worldCupGoals: 6 },
            { name: "Tony Yeboah", totalGoals: 29, worldCupGoals: 0 }
        ]
    },
    // 36. Ivory Coast
    {
        name: "Ivory Coast",
        flag: "/flags/ivory-coast.png",
        uniform: "/shirts/ivory-coast.png",
        highlight: "Elephants’ golden generation.",
        fullHighlight: "Ivory Coast’s two AFCON wins and Drogba’s era shine.",
        worldCupParticipations: 3,
        tournaments: ["Africa Cup of Nations 1992", "Africa Cup of Nations 2015"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Alain Gouaméné",
        legendaryDefender: "Kolo Touré",
        legendaryMidfielder: "Yaya Touré",
        legendaryStriker: "Didier Drogba",
        bestStrikers: [
            { name: "Didier Drogba", totalGoals: 65, worldCupGoals: 2 },
            { name: "Abdoulaye Traoré", totalGoals: 21, worldCupGoals: 0 },
            { name: "Salomon Kalou", totalGoals: 28, worldCupGoals: 1 }
        ]
    },
    // 37. Morocco
    {
        name: "Morocco",
        flag: "/flags/morocco.png",
        uniform: "/shirts/morocco.png",
        highlight: "2022’s historic semi-final.",
        fullHighlight: "Morocco’s 2022 fourth place and 1976 AFCON broke new ground.",
        worldCupParticipations: 6,
        tournaments: ["Africa Cup of Nations 1976"],
        worldCupFinishes: { "2022": "4th" },
        legendaryGoalkeeper: "Badou Zaki",
        legendaryDefender: "Noureddine Naybet",
        legendaryMidfielder: "Mohamed Timoumi",
        legendaryStriker: "Hakim Ziyech",
        bestStrikers: [
            { name: "Salaheddine Bassir", totalGoals: 27, worldCupGoals: 2 },
            { name: "Hassan Amcharrat", totalGoals: 18, worldCupGoals: 0 },
            { name: "Youssef En-Nesyri", totalGoals: 20, worldCupGoals: 3 }
        ]
    },
    // 38. Tunisia
    {
        name: "Tunisia",
        flag: "/flags/tunisia.png",
        uniform: "/shirts/tunisia.png",
        highlight: "Eagles of Carthage’s consistency.",
        fullHighlight: "Tunisia’s 2004 AFCON and six World Cups show resilience.",
        worldCupParticipations: 6,
        tournaments: ["Africa Cup of Nations 2004"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Sadok Sassi",
        legendaryDefender: "Radhi Jaïdi",
        legendaryMidfielder: "Tarak Dhiab",
        legendaryStriker: "Issam Jemâa",
        bestStrikers: [
            { name: "Issam Jemâa", totalGoals: 36, worldCupGoals: 0 },
            { name: "Francileudo Santos", totalGoals: 21, worldCupGoals: 0 },
            { name: "Wahbi Khazri", totalGoals: 25, worldCupGoals: 2 }
        ]
    },
    // 39. Egypt
    {
        name: "Egypt",
        flag: "/flags/egypt.png",
        uniform: "/shirts/egypt.png",
        highlight: "Pharaohs’ African reign.",
        fullHighlight: "Egypt’s record seven AFCON titles dominate Africa.",
        worldCupParticipations: 3,
        tournaments: ["Africa Cup of Nations 1957", "Africa Cup of Nations 1959", "Africa Cup of Nations 1986", "Africa Cup of Nations 1998", "Africa Cup of Nations 2006", "Africa Cup of Nations 2008", "Africa Cup of Nations 2010"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Essam El-Hadary",
        legendaryDefender: "Wael Gomaa",
        legendaryMidfielder: "Mohamed Aboutrika",
        legendaryStriker: "Hossam Hassan",
        bestStrikers: [
            { name: "Hossam Hassan", totalGoals: 68, worldCupGoals: 0 },
            { name: "Mohamed Salah", totalGoals: 57, worldCupGoals: 2 },
            { name: "Hassan El-Shazly", totalGoals: 42, worldCupGoals: 0 }
        ]
    },
    // 40. Saudi Arabia
    {
        name: "Saudi Arabia",
        flag: "/flags/saudi-arabia.png",
        uniform: "/shirts/saudi-arabia.png",
        highlight: "Asia’s Green Falcons.",
        fullHighlight: "Saudi Arabia’s three Asian Cups and 1994 run impress.",
        worldCupParticipations: 6,
        tournaments: ["AFC Asian Cup 1984", "AFC Asian Cup 1988", "AFC Asian Cup 1996"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Mohamed Al-Deayea",
        legendaryDefender: "Abdullah Zubromawi",
        legendaryMidfielder: "Sami Al-Jaber",
        legendaryStriker: "Majed Abdullah",
        bestStrikers: [
            { name: "Majed Abdullah", totalGoals: 71, worldCupGoals: 0 },
            { name: "Sami Al-Jaber", totalGoals: 46, worldCupGoals: 3 },
            { name: "Yasser Al-Qahtani", totalGoals: 42, worldCupGoals: 0 }
        ]
    },
    // 41. Iran
    {
        name: "Iran",
        flag: "/flags/iran.png",
        uniform: "/shirts/iran.png",
        highlight: "Persia’s football pride.",
        fullHighlight: "Iran’s three Asian Cups and six World Cups show strength.",
        worldCupParticipations: 6,
        tournaments: ["AFC Asian Cup 1968", "AFC Asian Cup 1972", "AFC Asian Cup 1976"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Ahmad Reza Abedzadeh",
        legendaryDefender: "Jalal Hosseini",
        legendaryMidfielder: "Ali Parvin",
        legendaryStriker: "Ali Daei",
        bestStrikers: [
            { name: "Ali Daei", totalGoals: 108, worldCupGoals: 0 },
            { name: "Karim Bagheri", totalGoals: 50, worldCupGoals: 0 },
            { name: "Sardar Azmoun", totalGoals: 52, worldCupGoals: 2 }
        ]
    },
    // 42. Australia
    {
        name: "Australia",
        flag: "/flags/australia.png",
        uniform: "/shirts/australia.png",
        highlight: "Socceroos’ Asian shift.",
        fullHighlight: "Australia’s 2006 run and 2015 Asian Cup mark their rise.",
        worldCupParticipations: 6,
        tournaments: ["AFC Asian Cup 2015"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Mark Schwarzer",
        legendaryDefender: "Lucas Neill",
        legendaryMidfielder: "Tim Cahill",
        legendaryStriker: "Harry Kewell",
        bestStrikers: [
            { name: "Tim Cahill", totalGoals: 50, worldCupGoals: 5 },
            { name: "Harry Kewell", totalGoals: 17, worldCupGoals: 1 },
            { name: "John Aloisi", totalGoals: 27, worldCupGoals: 1 }
        ]
    },
    // 43. Paraguay
    {
        name: "Paraguay",
        flag: "/flags/paraguay.png",
        uniform: "/shirts/paraguay.png",
        highlight: "South American grit.",
        fullHighlight: "Paraguay’s two Copa Américas and 2010 quarter-final shine.",
        worldCupParticipations: 8,
        tournaments: ["Copa América 1953", "Copa América 1979"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "José Luis Chilavert",
        legendaryDefender: "Carlos Gamarra",
        legendaryMidfielder: "Romildo Etcheverry",
        legendaryStriker: "Roque Santa Cruz",
        bestStrikers: [
            { name: "Roque Santa Cruz", totalGoals: 32, worldCupGoals: 1 },
            { name: "Arsenio Erico", totalGoals: 13, worldCupGoals: 0 },
            { name: "Nelson Valdez", totalGoals: 13, worldCupGoals: 1 }
        ]
    },
    // 44. Ecuador
    {
        name: "Ecuador",
        flag: "/flags/ecuador.png",
        uniform: "/shirts/ecuador.png",
        highlight: "Emerging Andean force.",
        fullHighlight: "Ecuador’s four World Cup runs show growing prowess.",
        worldCupParticipations: 4,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "José Francisco Cevallos",
        legendaryDefender: "Iván Hurtado",
        legendaryMidfielder: "Édison Méndez",
        legendaryStriker: "Agustín Delgado",
        bestStrikers: [
            { name: "Agustín Delgado", totalGoals: 31, worldCupGoals: 3 },
            { name: "Enner Valencia", totalGoals: 40, worldCupGoals: 6 },
            { name: "Christian Benítez", totalGoals: 24, worldCupGoals: 0 }
        ]
    },
    // 45. Bolivia
    {
        name: "Bolivia",
        flag: "/flags/bolivia.png",
        uniform: "/shirts/bolivia.png",
        highlight: "High-altitude warriors.",
        fullHighlight: "Bolivia’s 1963 Copa América and 1994 upset impress.",
        worldCupParticipations: 3,
        tournaments: ["Copa América 1963"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Carlos Trucco",
        legendaryDefender: "Marco Sandy",
        legendaryMidfielder: "Marco Etcheverry",
        legendaryStriker: "Joaquín Botero",
        bestStrikers: [
            { name: "Joaquín Botero", totalGoals: 20, worldCupGoals: 0 },
            { name: "Víctor Ugarte", totalGoals: 16, worldCupGoals: 0 },
            { name: "Marcelo Martins", totalGoals: 31, worldCupGoals: 0 }
        ]
    },
    // 46. Venezuela
    {
        name: "Venezuela",
        flag: "/flags/venezuela.png",
        uniform: "/shirts/venezuela.png",
        highlight: "Late bloomers’ rise.",
        fullHighlight: "Venezuela’s recent World Cup qualifying push stands out.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Rafael Dudamel",
        legendaryDefender: "José Manuel Rey",
        legendaryMidfielder: "Juan Arango",
        legendaryStriker: "Salomón Rondón",
        bestStrikers: [
            { name: "Salomón Rondón", totalGoals: 41, worldCupGoals: 0 },
            { name: "Juan Arango", totalGoals: 22, worldCupGoals: 0 },
            { name: "Giancarlo Maldonado", totalGoals: 22, worldCupGoals: 0 }
        ]
    },
    // 47. Denmark
    {
        name: "Denmark",
        flag: "/flags/denmark.png",
        uniform: "/shirts/denmark.png",
        highlight: "1992 Euro shock winners.",
        fullHighlight: "Denmark’s 1992 Euro and 1998 quarter-final thrill.",
        worldCupParticipations: 6,
        tournaments: ["UEFA Euro 1992"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Peter Schmeichel",
        legendaryDefender: "Morten Olsen",
        legendaryMidfielder: "Michael Laudrup",
        legendaryStriker: "Brian Laudrup",
        bestStrikers: [
            { name: "Preben Elkjær", totalGoals: 38, worldCupGoals: 2 },
            { name: "Brian Laudrup", totalGoals: 21, worldCupGoals: 0 },
            { name: "Jon Dahl Tomasson", totalGoals: 52, worldCupGoals: 3 }
        ]
    },
    // 48. Norway
    {
        name: "Norway",
        flag: "/flags/norway.png",
        uniform: "/shirts/norway.png",
        highlight: "1998 upset specialists.",
        fullHighlight: "Norway’s 1938 and 1998 World Cup runs surprised.",
        worldCupParticipations: 3,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Erik Thorstvedt",
        legendaryDefender: "Henning Berg",
        legendaryMidfielder: "Øyvind Leonhardsen",
        legendaryStriker: "Ole Gunnar Solskjær",
        bestStrikers: [
            { name: "Jørgen Juve", totalGoals: 33, worldCupGoals: 0 },
            { name: "Ole Gunnar Solskjær", totalGoals: 23, worldCupGoals: 1 },
            { name: "Erling Haaland", totalGoals: 31, worldCupGoals: 0 }
        ]
    },
    // 49. Ireland
    {
        name: "Ireland",
        flag: "/flags/ireland.png",
        uniform: "/shirts/ireland.png",
        highlight: "1990 quarter-final heroes.",
        fullHighlight: "Ireland’s 1990 World Cup run electrified fans.",
        worldCupParticipations: 3,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Pat Bonner",
        legendaryDefender: "Paul McGrath",
        legendaryMidfielder: "Roy Keane",
        legendaryStriker: "Robbie Keane",
        bestStrikers: [
            { name: "Robbie Keane", totalGoals: 68, worldCupGoals: 1 },
            { name: "Niall Quinn", totalGoals: 21, worldCupGoals: 1 },
            { name: "John Aldridge", totalGoals: 19, worldCupGoals: 0 }
        ]
    },
    // 50. Northern Ireland
    {
        name: "Northern Ireland",
        flag: "/flags/northern-ireland.png",
        uniform: "/shirts/northern-ireland.png",
        highlight: "1958’s giant-killers.",
        fullHighlight: "Northern Ireland’s 1958 quarter-final stunned Europe.",
        worldCupParticipations: 3,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Pat Jennings",
        legendaryDefender: "Aaron Hughes",
        legendaryMidfielder: "Danny Blanchflower",
        legendaryStriker: "George Best",
        bestStrikers: [
            { name: "George Best", totalGoals: 9, worldCupGoals: 0 },
            { name: "David Healy", totalGoals: 36, worldCupGoals: 0 },
            { name: "Billy Gillespie", totalGoals: 13, worldCupGoals: 0 }
        ]
    }
];

// Export for use in your pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = countries;
}