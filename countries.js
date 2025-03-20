const countries = [
    // 1. Brazil
    {
        name: "Brazil",
        flag: "/flags/brazil.webp",
        uniform: "/shirts/brazil.webp",
        highlight: "5-time World Cup champs with samba flair.",
        fullHighlight: "Brazil’s footballing saga is a vibrant tapestry of samba, skill, and unmatched World Cup supremacy, their five titles and nine Copa Américas etching them as the sport’s gold standard.<p> The journey began in 1958 in Sweden, where a 17-year-old Pelé burst onto the global stage. After a shaky start, Brazil unleashed their 4-2-4 formation, with Pelé scoring twice in a 5-2 final rout of the hosts—his second a lobbed masterpiece—Garrincha dazzling, and Vavá adding grit, ending a European stronghold with flair that still echoes.<p> In 1962 Chile, Pelé’s injury early against Czechoslovakia tested their depth, but Garrincha rose as the magician, his dribbling dismantling defenses. A 3-1 final win over the Czechs, with goals from Amarildo, Zito, and Vavá, showcased Brazil’s resilience, retaining the Jules Rimet Trophy under Aymoré Moreira’s steady hand.<p> The 1970 Mexico triumph is their magnum opus: a Technicolor dream where Pelé, Jairzinho, and Rivelino painted masterpieces—Jairzinho scoring in every match, Pelé’s dummy against Uruguay a moment of genius, and Carlos Alberto’s thunderous fourth in a 4-1 final demolition of Italy sealing a legacy of total football.<p> After a 24-year drought, 1994 in the USA brought redemption under Carlos Alberto Parreira’s pragmatic reign. Romário and Bebeto’s partnership shone, navigating a tough Italy side in the final. A 0-0 draw led to penalties, where Roberto Baggio’s miss—skying it over the bar—handed Brazil a 3-2 shootout win, a triumph of grit over their usual artistry.<p> The 2002 South Korea/Japan title was Ronaldo’s resurrection: after the 1998 collapse, he netted eight goals, including both in a 2-0 final over Germany—his first a poacher’s strike, the second a clinical finish—proving Brazil’s depth with Ronaldinho and Rivaldo sparkling.<p> Memorable second places scar the soul: 1950’s Maracanazo, where Uruguay’s 2-1 upset in front of 200,000 at the Maracaná —Schiaffino and Ghiggia silencing the masses— remains a national trauma.<p> In 1998, France’s 3-0 final thrashing, with Zidane’s brace and Ronaldo’s mysterious pre-game seizure, left Brazil reeling.<p> Nine Copas America —1919, 1922, 1949, 1989, 1997, 1999, 2004, 2007, and 2019—add layers to a legacy where every touch dances.",
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
        flag: "/flags/germany.webp",
        uniform: "/shirts/germany.webp",
        highlight: "4 World Cup titles with ruthless efficiency.",
        fullHighlight: "Germany’s football odyssey is a testament to precision, grit, and four World Cup crowns, bolstered by three Euros, forging a legacy of relentless excellence.<p> The 1954 ‘Miracle of Bern’ was their genesis: trailing Hungary’s Magical Magyars 2-0 in the final, West Germany staged a comeback for the ages. Helmut Rahn’s two goals—a slippery equalizer and a late winner—turned a 3-2 victory into a post-war rebirth, Fritz Walter’s leadership under Sepp Herberger toppling the invincible in the rain-soaked Swiss mud.<p> In 1974, hosting as West Germany, Franz Beckenbauer’s sweeper role redefined defending. Gerd Müller’s predatory swivel-and-strike in a 2-1 final win over Cruyff’s Netherlands—after a shock East German loss—proved their mettle, blending steel with swagger.<p> The 1990 title in Italy, amid reunification, was Beckenbauer’s managerial swan song: Andreas Brehme’s 85th-minute penalty sank Argentina 1-0 in Rome, avenging 1986’s defeat in a cagey, card-heavy clash.<p> The 2014 Brazil triumph was a modern epic: a 7-1 semi-final annihilation of the hosts—Miroslav Klose breaking Ronaldo’s record, Thomas Müller rampant—stunned the Maracanã, before Mario Götze’s extra-time volley (1-0) against Argentina under Joachim Löw’s vision showcased a new generation’s brilliance.<p> Runner-up scars run deep: 1966’s Wembley heartbreak against England (4-2), Geoff Hurst’s ghost goal off the bar still debated; 1982’s 3-1 loss to Italy after a penalty shootout thriller with France; 1986’s 3-2 defeat to Maradona’s Argentina; and 2002’s 2-0 shutout by Brazil’s Ronaldo.<p> Euros in 1972 (a 3-0 Soviet rout), 1980 (2-1 over Belgium), and 1996 (a Golden Goal against the Czechs) plus semi-final runs (2006, 2010) cement Germany as football’s enduring machine.",
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
        flag: "/flags/italy.webp",
        uniform: "/shirts/italy.webp",
        highlight: "4 World Cup titles with defensive mastery.",
        fullHighlight: "Italy’s four World Cups and two Euros craft a legacy of defensive artistry, clutch heroics, and Azzurri resilience, their catenaccio roots blooming into global dominance. The 1934 home triumph under Vittorio Pozzo was a fascist-era showcase: a brutal replayed quarter-final against Spain (1-0) tested their steel, before Angelo Schiavio’s extra-time strike in a 2-1 final win over Czechoslovakia sparked Roman jubilation, Giuseppe Meazza pulling strings. In 1938 France, Pozzo’s men defied political jeers—booed for their black-shirted salute—to retain the crown. Gino Colaussi and Silvio Piola’s braces demolished Hungary 4-2 in Paris, a display of flair atop their famed defense. The 1982 Spain resurgence was Paolo Rossi’s redemption: banned for gambling, he erupted with six goals—a hat-trick against Brazil, a semi-final brace, and the opener in a 3-1 final win over West Germany—Dino Zoff, at 40, lifting the cup in Madrid.\n\nThe 2006 Germany title rose from Calciopoli’s ashes: Fabio Grosso’s semi-final screamer against the hosts and his shootout clincher against France—after Zidane’s headbutt exit—secured a 5-3 penalty win post a 1-1 draw, Marco Materazzi’s equalizer pivotal. Runner-up wounds linger: 1970’s 4-1 Mexico final loss to Brazil’s samba kings, outclassed after an extra-time collapse; and 1994’s USA heartbreak, a 0-0 draw with Brazil ending in a 3-2 shootout loss—Baggio’s skyward miss a haunting image. Euros in 1968 (a replayed 2-0 over Yugoslavia) and 2020 (penalties over England at Wembley) round out a tale where Italy thrives in chaos.",
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
        flag: "/flags/argentina.webp",
        uniform: "/shirts/argentina.webp",
        highlight: "3-time World Cup winners with Messi’s magic.",
        fullHighlight: "Argentina’s three World Cup triumphs and 15 Copa Américas weave a saga of passion, genius, and heartbreak, their light blue and white stripes a canvas for footballing drama. The 1978 home victory amid a military junta was a chaotic epic: Mario Kempes, the chain-smoking maverick, scored twice in a 3-1 extra-time final win over the Netherlands—his first a solo run, the second a rebound—after a 6-0 Peru rout raised eyebrows and Daniel Passarella’s steel held firm. In 1986 Mexico, Diego Maradona became a deity: his Hand of God and Goal of the Century against England in the quarters stunned the world, his vision then guiding Jorge Burruchaga’s 3-2 final strike past West Germany—Argentina’s flair peaking under Carlos Bilardo’s cunning.\n\nThe 2022 Qatar crown was Lionel Messi’s odyssey: after decades of near-misses, he scored seven goals, including two in a 3-3 final thriller against France—his first a cool penalty, the second a tap-in amid chaos—before a 4-2 shootout win, Emiliano Martínez’s saves and Messi’s coronation ending a 36-year wait. Runner-up pain cuts deep: 1930’s 4-2 loss to Uruguay in the first final, a Montevideo melee; 1990’s 1-0 defeat to Germany, Maradona hobbled by fouls and Brehme’s penalty; and 2014’s 1-0 extra-time loss to Germany, Messi’s Golden Ball small solace after Götze’s dagger. Fifteen Copas—1921 to 2021—paint a picture of relentless brilliance.",
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
        flag: "/flags/france.webp",
        uniform: "/shirts/france.webp",
        highlight: "2 World Cup titles with flair and power.",
        fullHighlight: "France’s two World Cup victories and two Euros meld Gallic flair with brute force, their tricolor a symbol of modern footballing might. The 1998 home triumph was a multicultural crescendo under Aimé Jacquet: Zinedine Zidane’s two headers—a towering leap and a glancing nod—crushed Brazil 3-0 in the final, Ronaldo a ghost after his pre-game collapse, Emmanuel Petit’s late strike igniting Saint-Denis as Les Bleus united a nation. In 2018 Russia, Didier Deschamps molded a juggernaut: Kylian Mbappé, just 19, tore through Croatia in a 4-2 final win—his solo goal a Pelé-esque flash—while Pogba’s rocket and Griezmann’s penalty buried a spirited underdog, France’s depth overwhelming.\n\nThe 2006 runner-up finish in Germany was Zidane’s tragic swan song: his Panenka penalty against Italy gave hope, but a red card for headbutting Materazzi—after a 1-1 draw—doomed France to a 5-3 shootout loss, Grosso’s kick sealing despair. Euros in 1984 (Platini’s nine goals, a 2-0 Spain final) and 2000 (Trezeguet’s golden goal over Italy) plus third places in 1958 (Fontaine’s 13 goals) and 1986 (Platini’s brilliance) underscore a legacy of artistry and agony.",
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
        flag: "/flags/uruguay.webp",
        uniform: "/shirts/uruguay.webp",
        highlight: "2 World Cup wins as early giants.",
        fullHighlight: "Uruguay’s two World Cup triumphs and 15 Copa Américas crown them football’s original titans, their sky-blue shirts steeped in pioneering glory. The 1930 inaugural tournament in Montevideo was their birthright: after Olympic golds in 1924 and 1928, José Nasazzi’s side crushed Argentina 4-2 in the Centenario Stadium final—Pedro Cea’s equalizer and Héctor Castro’s late header before 68,000 fans cementing a decade’s dominance under Alberto Suppici, despite a boat-trip journey and mid-tournament riots. The 1950 Maracanazo is their legend: facing Brazil in Rio’s colossal Maracanã, Juan Schiaffino leveled Obdulio Varela’s 1-0 deficit, then Alcides Ghiggia’s 79th-minute angled shot silenced 200,000 in a 2-1 upset—coach Juan López’s tactics and Varela’s defiance shattering the hosts’ dreams.\n\nNo World Cup runner-up finishes mark their record, but fourth places in 1954 (a 4-2 Hungary thriller), 1970 (Pelé’s Brazil too strong), and 2010 (Suárez and Forlán’s heroics) keep the fire alive. Fifteen Copas—1916 to 2011—tie them with Argentina, a small nation’s outsized roar.",
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
        flag: "/flags/england.webp",
        uniform: "/shirts/england.webp",
        highlight: "1966 World Cup kings.",
        fullHighlight: "England’s lone 1966 World Cup triumph is their footballing Everest, a home-soil epic of grit and glory under Alf Ramsey that still defines the Three Lions, though near-misses fuel a bittersweet tale. The final against West Germany at Wembley was a 4-2 extra-time saga: Geoff Hurst’s hat-trick—his second a contentious ‘did it cross?’ strike off the bar, validated by a Soviet linesman—joined Martin Peters’ poacher’s finish and Bobby Moore’s cool captaincy to clinch it before 96,000 roaring fans, England’s wingless 4-4-2 toppling a stubborn foe after 90 minutes of deadlock.\n\nNo runner-up finishes grace their World Cup ledger, but semi-final heartbreak abounds: 1990’s penalty loss to West Germany (4-3) after a 1-1 draw, Gazza’s tears and Lineker’s poise not enough; and 2018’s 2-1 extra-time defeat to Croatia, Kane and co. faltering. Fourth places in 1990 and 2018, plus a 1968 Euro third, hint at a legacy forever chasing that Wembley summer.",
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
        flag: "/flags/spain.webp",
        uniform: "/shirts/spain.webp",
        highlight: "2010 World Cup tiki-taka triumph.",
        fullHighlight: "Spain’s 2010 World Cup and three Euros heralded a golden era of tiki-taka mastery, their red fury rewriting football’s playbook with possession and precision. The 2010 South Africa title under Vicente del Bosque was their zenith: after a shock Swiss loss, Andrés Iniesta’s extra-time dagger against the Netherlands (1-0)—a low drive past Stekelenburg—capped a tournament of Xavi’s metronomic passing, Villa’s five goals, and Casillas’ shootout heroics against Paraguay, ending decades of underachievement in Johannesburg’s Soccer City.\n\nNo World Cup runner-up finishes mark their record, but a 1950 fourth place (a wild 6-6 Brazil draw) hinted at potential. Euros in 1964 (a 2-1 Soviet upset at home), 2008 (Torres’ 1-0 over Germany), and 2012 (a 4-0 Italy rout) frame a dynasty where Spain danced circles around the world.",
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
        flag: "/flags/netherlands.webp",
        uniform: "/shirts/netherlands.webp",
        highlight: "Total Football’s bridesmaids.",
        fullHighlight: "The Netherlands’ three World Cup finals and 1988 Euro crown them Total Football’s tragic poets, their orange brilliance forever flirting with glory. In 1974, Johan Cruyff’s genius—his turn a new art form—drove a 2-1 final loss to West Germany, Gerd Müller’s strike trumping their flair after a penalty opener. The 1978 Argentina heartbreak doubled the pain: without Cruyff, Rob Rensenbrink’s post-hit in a 3-1 extra-time defeat to Kempes’ hosts stung deeper. In 2010, Spain’s Iniesta broke Dutch hearts again (1-0), a gritty final marred by Van Bommel’s fouls and Webb’s cards. The 1988 Euro—Van Basten’s volley against the USSR in a 2-0 win—offers solace, while a 2014 third place (a 3-0 Brazil romp) and Cruyff’s legacy keep the flame alive.",
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
        flag: "/flags/hungary.webp",
        uniform: "/shirts/hungary.webp",
        highlight: "Magical Magyars of the 1950s.",
        fullHighlight: "Hungary’s 1950s Magical Magyars were football’s lost golden age, their two World Cup finals and Olympic golds a fleeting blaze of brilliance. In 1938, a 4-2 final loss to Italy showcased early promise—György Sárosi and Pál Titkos outdone by Pozzo’s machine. The 1954 peak was their tragedy: unbeaten in years, Ferenc Puskás and Sándor Kocsis (11 goals) torched foes, only for Helmut Rahn’s 3-2 miracle in Bern to deny them against West Germany, a rain-soaked upset after a 8-3 group-stage rout of the same foe. The 1952 Olympic gold and a 6-3 Wembley thrashing of England in ’53 remain their echoes, a team crushed by history’s weight.",
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
        flag: "/flags/czech-republic.webp",
        uniform: "/shirts/czech-republic.webp",
        highlight: "Czechoslovakia’s golden past.",
        fullHighlight: "Czechoslovakia’s two World Cup finals and 1976 Euro victory weave a tale of Central European flair and heartbreak, their legacy enduring through the Czech Republic. The 1934 final saw a 2-1 extra-time loss to Italy—Oldřich Nejedlý’s five goals not enough as Schiavio struck late under Pozzo’s reign. In 1962 Chile, Josef Masopust’s genius earned a Ballon d’Or, but a 3-1 final defeat to Brazil—Garrincha and Vavá overpowering after an early lead—dashed hopes. The 1976 Euro triumph, with Panenka’s chipped penalty in a 5-3 shootout over West Germany, remains their jewel, while a 1996 Euro runner-up finish (Golden Goal loss to Germany) keeps the spirit alive.",
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
        flag: "/flags/sweden.webp",
        uniform: "/shirts/sweden.webp",
        highlight: "1958 finalists on home soil.",
        fullHighlight: "Sweden’s 1958 World Cup final on home soil and multiple top finishes craft a Nordic legacy of grit and grace. Hosting in ‘58, Gunnar Gren and Nils Liedholm led a 6-1 semi-final romp over West Germany, only for Pelé’s Brazil to dazzle 5-2 in the final—Kalle Svensson helpless against the teenager’s brace. A 1950 third place (beating Spain 3-1) and 1994’s USA bronze (a 4-0 Bulgaria rout, Brolin and Andersson shining) plus a 1952 Olympic gold underscore a history where Sweden punched above their weight, Zlatan’s later flair adding modern spice.",
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
        flag: "/flags/portugal.webp",
        uniform: "/shirts/portugal.webp",
        highlight: "Eusébio’s 1966 brilliance.",
        fullHighlight: "Portugal’s 1966 World Cup peak and 2016 Euro triumph paint a story of flair and late-blooming glory. In ‘66 England, Eusébio’s nine goals—including four against North Korea in a 5-3 comeback and two against Brazil—propelled a third-place finish, a 2-1 win over the USSR sealing bronze despite a semi-final loss to the hosts. The 2016 Euro, under Fernando Santos, was Cristiano Ronaldo’s grit: injured early in the final, he coached from the sideline as Éder’s extra-time strike beat France 1-0, ending years of near-misses like a 2004 Euro final loss to Greece and a 2006 World Cup fourth place.",
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
        flag: "/flags/belgium.webp",
        uniform: "/shirts/belgium.webp",
        highlight: "Golden generation’s 2018 peak.",
        fullHighlight: "Belgium’s 2018 World Cup third place caps a history of quiet excellence, their Red Devils blending past grit with a golden generation’s flair. In 2018 Russia, Eden Hazard and Kevin De Bruyne dazzled—a 2-1 quarter-final upset of Brazil led to a 2-0 bronze win over England, Lukaku’s power shining despite a French semi-final wall. A 1986 fourth place (a penalty loss to France after beating Spain) and a 1980 Euro runner-up finish (2-1 to West Germany) hint at earlier promise, Pfaff and Ceulemans paving the way for a modern surge.",
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
        flag: "/flags/mexico.webp",
        uniform: "/shirts/mexico.webp",
        highlight: "Consistent CONCACAF kings.",
        fullHighlight: "Mexico’s 17 World Cup appearances cement them as CONCACAF’s enduring force, their green shirts a symbol of regional dominance despite global near-misses. Quarter-finals in 1970 and 1986—both as hosts—saw Hugo Sánchez and Cuauhtémoc Blanco shine, though Brazil (2-0) and West Germany (penalties) halted dreams. Eleven Gold Cups and a 1999 Confederations Cup win over Brazil (4-3) at home underline their pedigree, while upsets like the 1930 USA rout (7-1) and 2010 France scalp keep El Tri’s fire burning, a footballing giant yet to summit the world stage.",
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
        flag: "/flags/russia.webp",
        uniform: "/shirts/russia.webp",
        highlight: "Soviet era’s 1966 peak.",
        fullHighlight: "The Soviet Union’s 1960 Euro and 1966 World Cup fourth place define a Cold War footballing titan, their red machine blending power and precision. Lev Yashin, the Black Spider, anchored a 1966 run—beating Hungary and West Germany before a 2-1 semi-final loss to the hosts, then a 2-1 bronze win over Portugal with Valentin Ivanov’s flair. The 1960 Euro title, a 2-1 extra-time upset of Yugoslavia, was their peak, while Russia’s 2018 quarter-final run (penalties over Spain) revived the spirit, a legacy of Yashin’s saves and Blokhin’s goals enduring beyond the Iron Curtain.",
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
        flag: "/flags/poland.webp",
        uniform: "/shirts/poland.webp",
        highlight: "1970s golden era.",
        fullHighlight: "Poland’s 1970s golden era dazzled with two World Cup third places, their white-and-red a beacon of Eastern European flair. In 1974, Grzegorz Lato’s seven goals—including a final 1-0 bronze win over Brazil—paired with Kazimierz Deyna’s vision to stun the world, only Germany halting them in the semis. The 1982 Spain bronze repeated the feat—a 3-2 win over France after a semi-final loss to Italy—Zbigniew Boniek shining. A 1972 Olympic gold adds luster to a legacy Lewandowski keeps alive, though modern peaks remain elusive.",
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
        flag: "/flags/chile.webp",
        uniform: "/shirts/chile.webp",
        highlight: "1962 hosts and third place.",
        fullHighlight: "Chile’s 1962 World Cup third place as hosts and two Copa Américas forge a South American tale of grit and glory. In ‘62, Leonel Sánchez’s four goals—including a semi-final strike—led to a 1-0 bronze win over Yugoslavia, though Brazil’s 4-2 semi-final rout stung before 76,000 in Santiago. Back-to-back Copas in 2015 (penalties over Argentina) and 2016 (ditto) under Vidal and Sánchez’s fire showcased La Roja’s modern peak, a nation of 17 million punching up with Elías Figueroa’s defensive echo still resonating.",
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
        flag: "/flags/austria.webp",
        uniform: "/shirts/austria.webp",
        highlight: "Wunderteam’s 1954 peak.",
        fullHighlight: "Austria’s Wunderteam era peaked with a 1954 World Cup third place, their red-and-white a fleeting marvel of pre-war and post-war brilliance. The 1930s saw Matthias Sindelar’s artistry dominate Europe, only for a 1934 semi-final loss to Italy (1-0) to deny them. In ‘54, a 7-5 quarter-final thriller over Switzerland—Erich Probst’s hat-trick—set up a 6-1 semi-final humbling by West Germany, but a 3-1 bronze win over Uruguay kept pride intact. Hans Krankl’s later flair and a 1932 Olympic silver frame a legacy of elegance lost to time.",
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
        flag: "/flags/switzerland.webp",
        uniform: "/shirts/switzerland.webp",
        highlight: "Quarter-final regulars.",
        fullHighlight: "Switzerland’s 12 World Cup appearances reveal a quiet consistency, their red cross a steady Alpine presence. Quarter-finals in 1934 (a 3-2 Italy loss), 1938 (a 4-2 Hungary defeat after beating Germany), and 1954 (a wild 7-5 loss to Austria as hosts) showed early promise, Josef Hügi’s six goals in ‘54 a highlight. Modern runs—like 2006 and 2018—lean on Shaqiri’s flair and Sommer’s gloves, while a 1924 Olympic silver adds depth to a nation often overshadowed but rarely outclassed.",
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
        flag: "/flags/colombia.webp",
        uniform: "/shirts/colombia.webp",
        highlight: "2014 quarter-final flair.",
        fullHighlight: "Colombia’s 2014 World Cup quarter-final and 2001 Copa América light up a history of flair and frustration, their yellow jerseys pulsing with South American soul. James Rodríguez’s six goals in 2014—including a chest-and-volley stunner against Uruguay—drove a run halted by Brazil (2-1), Valderrama’s ghost smiling. The 2001 home Copa, a 1-0 final over Mexico via Iván Córdoba’s header, crowned a perfect campaign, while 1990’s Roger Milla upset and Falcao’s modern strikes keep Los Cafeteros brewing dreams.",
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
        flag: "/flags/croatia.webp",
        uniform: "/shirts/croatia.webp",
        highlight: "2018 finalists.",
        fullHighlight: "Croatia’s 2018 World Cup final and 1998 third place defy their small stature, their checkered shirts a symbol of Balkan defiance. In ‘98 France, Davor Šuker’s six goals—including a Golden Boot clincher—led a debut run, beating Germany 3-0 before a 2-1 semi-final loss to the hosts, then a 2-1 bronze over the Netherlands. The 2018 Russia epic saw Luka Modrić’s brilliance—penalties over Denmark and Russia—end in a 4-2 final loss to France, Mandžukić’s own goal and heroics not enough, a nation of 4 million roaring nonetheless.",
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
        flag: "/flags/serbia.webp",
        uniform: "/shirts/serbia.webp",
        highlight: "Yugoslavia’s historic runs.",
        fullHighlight: "Yugoslavia’s fourth places and Balkan flair endure through Serbia, their red-blue-white a bridge from past to present. In 1930, a semi-final loss to Uruguay (6-1) after beating Brazil yielded a fourth-place finish, Tirnanić and Bek shining in the inaugural cup. The 1962 Chile run repeated it—Dragan Džajić and Milan Galić starring in a 1-0 bronze loss to the hosts—while a 1960 Euro final loss (2-1 to the USSR) and Serbia’s modern grit (Mitrović’s goals) keep the flame of a fractured footballing titan alive.",
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
        flag: "/flags/romania.webp",
        uniform: "/shirts/romania.webp",
        highlight: "1994 quarter-final heroes.",
        fullHighlight: "Romania’s 1994 World Cup quarter-final run thrilled the globe, their yellow shirts a fleeting burst of Eastern promise. Gheorghe Hagi’s magic—a long-range lob against Colombia, a curler versus Switzerland—drove a penalty win over Argentina (3-2), only for Sweden’s shootout (5-4) to end the dream after Florin Răducioiu’s brace. Seven World Cups, a 1998 bleach-blonde flair, and a 2000 Euro quarter-final nod to a history where Hagi’s left foot and Mutu’s fire keep Romania’s heart beating.",
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
        flag: "/flags/bulgaria.webp",
        uniform: "/shirts/bulgaria.webp",
        highlight: "1994’s surprise semi-finalists.",
        fullHighlight: "Bulgaria’s 1994 World Cup fourth place stunned football, their green-white-red a bolt from the Balkan blue. Hristo Stoichkov’s six goals—barreling past Mexico and Germany (2-1, a late comeback)—and Emil Kostadinov’s clutch strikes led to a semi-final loss to Italy (2-1), then a 4-0 Sweden bronze defeat. Seven World Cups, a 1968 Olympic silver, and Stoichkov’s Ballon d’Or frame a moment where Bulgaria, underdogs no more, danced on the global stage with Berbatov’s later echo.",
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
        flag: "/flags/peru.webp",
        uniform: "/shirts/peru.webp",
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
        flag: "/flags/usa.webp",
        uniform: "/shirts/usa.webp",
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
        flag: "/flags/cameroon.webp",
        uniform: "/shirts/cameroon.webp",
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
        flag: "/flags/scotland.webp",
        uniform: "/shirts/scotland.webp",
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
        flag: "/flags/turkey.webp",
        uniform: "/shirts/turkey.webp",
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
        flag: "/flags/japan.webp",
        uniform: "/shirts/japan.webp",
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
        flag: "/flags/south-korea.webp",
        uniform: "/shirts/south-korea.webp",
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
        flag: "/flags/nigeria.webp",
        uniform: "/shirts/nigeria.webp",
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
        flag: "/flags/algeria.webp",
        uniform: "/shirts/algeria.webp",
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
        flag: "/flags/ghana.webp",
        uniform: "/shirts/ghana.webp",
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
        flag: "/flags/ivory-coast.webp",
        uniform: "/shirts/ivory-coast.webp",
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
        flag: "/flags/morocco.webp",
        uniform: "/shirts/morocco.webp",
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
        flag: "/flags/tunisia.webp",
        uniform: "/shirts/tunisia.webp",
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
        flag: "/flags/egypt.webp",
        uniform: "/shirts/egypt.webp",
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
        flag: "/flags/saudi-arabia.webp",
        uniform: "/shirts/saudi-arabia.webp",
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
        flag: "/flags/iran.webp",
        uniform: "/shirts/iran.webp",
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
        flag: "/flags/australia.webp",
        uniform: "/shirts/australia.webp",
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
        flag: "/flags/paraguay.webp",
        uniform: "/shirts/paraguay.webp",
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
        flag: "/flags/ecuador.webp",
        uniform: "/shirts/ecuador.webp",
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
        flag: "/flags/bolivia.webp",
        uniform: "/shirts/bolivia.webp",
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
        flag: "/flags/venezuela.webp",
        uniform: "/shirts/venezuela.webp",
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
        flag: "/flags/denmark.webp",
        uniform: "/shirts/denmark.webp",
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
        flag: "/flags/norway.webp",
        uniform: "/shirts/norway.webp",
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
        flag: "/flags/ireland.webp",
        uniform: "/shirts/ireland.webp",
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
        flag: "/flags/northern-ireland.webp",
        uniform: "/shirts/northern-ireland.webp",
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
    },
    {
        name: "Wales",
        flag: "/flags/wales.webp",
        uniform: "/shirts/wales.webp",
        highlight: "1958 quarter-final dragons.",
        fullHighlight: "Wales’ 1958 World Cup run and Bale’s era shine.",
        worldCupParticipations: 2,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Neville Southall",
        legendaryDefender: "Kevin Ratcliffe",
        legendaryMidfielder: "Ryan Giggs",
        legendaryStriker: "Gareth Bale",
        bestStrikers: [
            { name: "Gareth Bale", totalGoals: 41, worldCupGoals: 1 },
            { name: "Ian Rush", totalGoals: 28, worldCupGoals: 0 },
            { name: "John Charles", totalGoals: 15, worldCupGoals: 1 }
        ]
    },
    // 52. Greece
    {
        name: "Greece",
        flag: "/flags/greece.webp",
        uniform: "/shirts/greece.webp",
        highlight: "2004 Euro miracle.",
        fullHighlight: "Greece’s stunning 2004 Euro win defied all odds.",
        worldCupParticipations: 3,
        tournaments: ["UEFA Euro 2004"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Antonis Nikopolidis",
        legendaryDefender: "Traianos Dellas",
        legendaryMidfielder: "Angelos Basinas",
        legendaryStriker: "Nikos Anastopoulos",
        bestStrikers: [
            { name: "Nikos Anastopoulos", totalGoals: 29, worldCupGoals: 0 },
            { name: "Dimitris Saravakos", totalGoals: 26, worldCupGoals: 0 },
            { name: "Angelos Charisteas", totalGoals: 25, worldCupGoals: 0 }
        ]
    },
    // 53. Ukraine
    {
        name: "Ukraine",
        flag: "/flags/ukraine.webp",
        uniform: "/shirts/ukraine.webp",
        highlight: "2006 quarter-final debut.",
        fullHighlight: "Ukraine’s 2006 World Cup run marked their arrival.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Oleksandr Shovkovskiy",
        legendaryDefender: "Anatoliy Tymoshchuk",
        legendaryMidfielder: "Andriy Shevchenko",
        legendaryStriker: "Serhiy Rebrov",
        bestStrikers: [
            { name: "Andriy Shevchenko", totalGoals: 48, worldCupGoals: 2 },
            { name: "Serhiy Rebrov", totalGoals: 15, worldCupGoals: 0 },
            { name: "Oleh Blokhin", totalGoals: 42, worldCupGoals: 0 } // Soviet era overlap
        ]
    },
    // 54. Slovakia
    {
        name: "Slovakia",
        flag: "/flags/slovakia.webp",
        uniform: "/shirts/slovakia.webp",
        highlight: "2010 giant-killers.",
        fullHighlight: "Slovakia’s 2010 win over Italy stunned the world.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Ľuboš Kamenár",
        legendaryDefender: "Martin Škrtel",
        legendaryMidfielder: "Marek Hamšík",
        legendaryStriker: "Róbert Vittek",
        bestStrikers: [
            { name: "Róbert Vittek", totalGoals: 23, worldCupGoals: 4 },
            { name: "Szilárd Németh", totalGoals: 22, worldCupGoals: 0 },
            { name: "Stanislav Šesták", totalGoals: 13, worldCupGoals: 0 }
        ]
    },
    // 55. Slovenia
    {
        name: "Slovenia",
        flag: "/flags/slovenia.webp",
        uniform: "/shirts/slovenia.webp",
        highlight: "Small nation, big heart.",
        fullHighlight: "Slovenia’s two World Cup appearances punched above weight.",
        worldCupParticipations: 2,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Samir Handanović",
        legendaryDefender: "Boštjan Cesar",
        legendaryMidfielder: "Zlatko Zahovič",
        legendaryStriker: "Milivoje Novaković",
        bestStrikers: [
            { name: "Zlatko Zahovič", totalGoals: 35, worldCupGoals: 0 },
            { name: "Milivoje Novaković", totalGoals: 32, worldCupGoals: 0 },
            { name: "Josip Iličić", totalGoals: 16, worldCupGoals: 0 }
        ]
    },
    // 56. Bosnia and Herzegovina
    {
        name: "Bosnia and Herzegovina",
        flag: "/flags/bosnia-and-herzegovina.webp",
        uniform: "/shirts/bosnia-and-herzegovina.webp",
        highlight: "2014 debut dazzlers.",
        fullHighlight: "Bosnia’s 2014 World Cup entry showcased Balkan talent.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Asmir Begović",
        legendaryDefender: "Emir Spahić",
        legendaryMidfielder: "Miralem Pjanić",
        legendaryStriker: "Edin Džeko",
        bestStrikers: [
            { name: "Edin Džeko", totalGoals: 65, worldCupGoals: 1 },
            { name: "Vedad Ibišević", totalGoals: 28, worldCupGoals: 1 },
            { name: "Elvir Bolić", totalGoals: 22, worldCupGoals: 0 }
        ]
    },
    // 57. Albania
    {
        name: "Albania",
        flag: "/flags/albania.webp",
        uniform: "/shirts/albania.webp",
        highlight: "Emerging Balkan force.",
        fullHighlight: "Albania’s Euro 2016 debut signals growing strength.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Foto Strakosha",
        legendaryDefender: "Lorik Cana",
        legendaryMidfielder: "Altin Lala",
        legendaryStriker: "Erjon Bogdani",
        bestStrikers: [
            { name: "Erjon Bogdani", totalGoals: 18, worldCupGoals: 0 },
            { name: "Hamdi Salihi", totalGoals: 11, worldCupGoals: 0 },
            { name: "Armando Sadiku", totalGoals: 12, worldCupGoals: 0 }
        ]
    },
    // 58. Iceland
    {
        name: "Iceland",
        flag: "/flags/iceland.webp",
        uniform: "/shirts/iceland.webp",
        highlight: "2016 Euro giant-slayers.",
        fullHighlight: "Iceland’s 2016 Euro run and 2018 World Cup stunned all.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Hannes Þór Halldórsson",
        legendaryDefender: "Ragnar Sigurðsson",
        legendaryMidfielder: "Gylfi Sigurðsson",
        legendaryStriker: "Eiður Guðjohnsen",
        bestStrikers: [
            { name: "Eiður Guðjohnsen", totalGoals: 26, worldCupGoals: 0 },
            { name: "Gylfi Sigurðsson", totalGoals: 27, worldCupGoals: 1 },
            { name: "Kolbeinn Sigþórsson", totalGoals: 26, worldCupGoals: 0 }
        ]
    },
    // 59. Finland
    {
        name: "Finland",
        flag: "/flags/finland.webp",
        uniform: "/shirts/finland.webp",
        highlight: "Nordic late bloomers.",
        fullHighlight: "Finland’s Euro 2020 debut marks a new era.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Antti Niemi",
        legendaryDefender: "Sami Hyypiä",
        legendaryMidfielder: "Jari Litmanen",
        legendaryStriker: "Mikael Forssell",
        bestStrikers: [
            { name: "Jari Litmanen", totalGoals: 32, worldCupGoals: 0 },
            { name: "Mikael Forssell", totalGoals: 29, worldCupGoals: 0 },
            { name: "Teemu Pukki", totalGoals: 40, worldCupGoals: 0 }
        ]
    },
    // 60. Israel
    {
        name: "Israel",
        flag: "/flags/israel.webp",
        uniform: "/shirts/israel.webp",
        highlight: "1970 World Cup pioneers.",
        fullHighlight: "Israel’s 1970 World Cup was a regional milestone.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Itzhak Vissoker",
        legendaryDefender: "Avraham Bendori",
        legendaryMidfielder: "Mordechai Spiegler",
        legendaryStriker: "Ronnie Rosenthal",
        bestStrikers: [
            { name: "Mordechai Spiegler", totalGoals: 33, worldCupGoals: 1 },
            { name: "Ronnie Rosenthal", totalGoals: 11, worldCupGoals: 0 },
            { name: "Eran Zahavi", totalGoals: 35, worldCupGoals: 0 }
        ]
    },
    // 61. North Korea
    {
        name: "North Korea",
        flag: "/flags/north-korea.webp",
        uniform: "/shirts/north-korea.webp",
        highlight: "1966’s shock quarter-final.",
        fullHighlight: "North Korea’s 1966 upset of Italy stunned the world.",
        worldCupParticipations: 2,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Ri Myong-guk",
        legendaryDefender: "Cha Jong-hyok",
        legendaryMidfielder: "Pak Doo-ik",
        legendaryStriker: "Jong Tae-se",
        bestStrikers: [
            { name: "Pak Doo-ik", totalGoals: 15, worldCupGoals: 2 },
            { name: "Jong Tae-se", totalGoals: 15, worldCupGoals: 0 },
            { name: "Hong Yong-jo", totalGoals: 13, worldCupGoals: 0 }
        ]
    },
    // 62. China
    {
        name: "China",
        flag: "/flags/china.webp",
        uniform: "/shirts/china.webp",
        highlight: "2002 World Cup debutants.",
        fullHighlight: "China’s 2002 World Cup marked their global entry.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Jiang Jin",
        legendaryDefender: "Fan Zhiyi",
        legendaryMidfielder: "Li Tie",
        legendaryStriker: "Hao Haidong",
        bestStrikers: [
            { name: "Hao Haidong", totalGoals: 41, worldCupGoals: 0 },
            { name: "Yang Xu", totalGoals: 29, worldCupGoals: 0 },
            { name: "Li Jinyu", totalGoals: 26, worldCupGoals: 0 }
        ]
    },
    // 63. Iraq
    {
        name: "Iraq",
        flag: "/flags/iraq.webp",
        uniform: "/shirts/iraq.webp",
        highlight: "2007 Asian Cup champs.",
        fullHighlight: "Iraq’s 2007 Asian Cup win amidst turmoil inspired all.",
        worldCupParticipations: 1,
        tournaments: ["AFC Asian Cup 2007"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Noor Sabri",
        legendaryDefender: "Bassim Abbas",
        legendaryMidfielder: "Nashat Akram",
        legendaryStriker: "Younis Mahmoud",
        bestStrikers: [
            { name: "Younis Mahmoud", totalGoals: 57, worldCupGoals: 0 },
            { name: "Hussein Saeed", totalGoals: 78, worldCupGoals: 1 },
            { name: "Alaa Abdul-Zahra", totalGoals: 15, worldCupGoals: 0 }
        ]
    },
    // 64. Kuwait
    {
        name: "Kuwait",
        flag: "/flags/kuwait.webp",
        uniform: "/shirts/kuwait.webp",
        highlight: "1980 Asian Cup kings.",
        fullHighlight: "Kuwait’s 1980 Asian Cup and 1982 World Cup shone.",
        worldCupParticipations: 1,
        tournaments: ["AFC Asian Cup 1980"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Ahmed Al-Tarabulsi",
        legendaryDefender: "Naeem Saad",
        legendaryMidfielder: "Abdulaziz Al-Anberi",
        legendaryStriker: "Jassem Yaqoub",
        bestStrikers: [
            { name: "Jassem Yaqoub", totalGoals: 36, worldCupGoals: 0 },
            { name: "Faisal Al-Dakhil", totalGoals: 36, worldCupGoals: 1 },
            { name: "Bader Al-Mutawa", totalGoals: 56, worldCupGoals: 0 }
        ]
    },
    // 65. United Arab Emirates
    {
        name: "United Arab Emirates",
        flag: "/flags/united-arab-emirates.webp",
        uniform: "/shirts/united-arab-emirates.webp",
        highlight: "1990 World Cup debut.",
        fullHighlight: "UAE’s 1990 World Cup and 2019 Asian Cup semi-final stand out.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Mohsin Musabah",
        legendaryDefender: "Abdulrahman Ibrahim",
        legendaryMidfielder: "Adnan Al-Talyani",
        legendaryStriker: "Ali Mabkhout",
        bestStrikers: [
            { name: "Ali Mabkhout", totalGoals: 85, worldCupGoals: 0 },
            { name: "Adnan Al-Talyani", totalGoals: 52, worldCupGoals: 1 },
            { name: "Ismail Matar", totalGoals: 36, worldCupGoals: 0 }
        ]
    },
    // 66. Qatar
    {
        name: "Qatar",
        flag: "/flags/qatar.webp",
        uniform: "/shirts/qatar.webp",
        highlight: "2019 Asian Cup winners.",
        fullHighlight: "Qatar’s 2019 Asian Cup and 2022 hosting elevated them.",
        worldCupParticipations: 1,
        tournaments: ["AFC Asian Cup 2019"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Saad Al-Sheeb",
        legendaryDefender: "Abdelkarim Hassan",
        legendaryMidfielder: "Wesam Rizik",
        legendaryStriker: "Almoez Ali",
        bestStrikers: [
            { name: "Almoez Ali", totalGoals: 46, worldCupGoals: 1 },
            { name: "Mansour Muftah", totalGoals: 42, worldCupGoals: 0 },
            { name: "Sebastián Soria", totalGoals: 40, worldCupGoals: 0 }
        ]
    },
    // 67. Costa Rica
    {
        name: "Costa Rica",
        flag: "/flags/costa-rica.webp",
        uniform: "/shirts/costa-rica.webp",
        highlight: "2014 quarter-final heroes.",
        fullHighlight: "Costa Rica’s 2014 run and CONCACAF dominance impress.",
        worldCupParticipations: 6,
        tournaments: ["CONCACAF Championship 1963", "CONCACAF Championship 1969", "CONCACAF Championship 1989"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Keylor Navas",
        legendaryDefender: "Gilberto Martínez",
        legendaryMidfielder: "Celso Borges",
        legendaryStriker: "Paulo Wanchope",
        bestStrikers: [
            { name: "Paulo Wanchope", totalGoals: 45, worldCupGoals: 2 },
            { name: "Rolando Fonseca", totalGoals: 47, worldCupGoals: 0 },
            { name: "Álvaro Saborío", totalGoals: 36, worldCupGoals: 0 }
        ]
    },
    // 68. Honduras
    {
        name: "Honduras",
        flag: "/flags/honduras.webp",
        uniform: "/shirts/honduras.webp",
        highlight: "CONCACAF stalwarts.",
        fullHighlight: "Honduras’ three World Cups and 1981 title endure.",
        worldCupParticipations: 3,
        tournaments: ["CONCACAF Championship 1981"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Noel Valladares",
        legendaryDefender: "Maynor Figueroa",
        legendaryMidfielder: "Amado Guevara",
        legendaryStriker: "Carlos Pavón",
        bestStrikers: [
            { name: "Carlos Pavón", totalGoals: 57, worldCupGoals: 0 },
            { name: "Wilmer Velásquez", totalGoals: 35, worldCupGoals: 0 },
            { name: "David Suazo", totalGoals: 17, worldCupGoals: 0 }
        ]
    },
    // 69. El Salvador
    {
        name: "El Salvador",
        flag: "/flags/el-salvador.webp",
        uniform: "/shirts/el-salvador.webp",
        highlight: "Central American pioneers.",
        fullHighlight: "El Salvador’s two World Cups show regional grit.",
        worldCupParticipations: 2,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Luis Guevara Mora",
        legendaryDefender: "Jorge González",
        legendaryMidfielder: "Magico González",
        legendaryStriker: "Raúl Díaz Arce",
        bestStrikers: [
            { name: "Raúl Díaz Arce", totalGoals: 39, worldCupGoals: 0 },
            { name: "Magico González", totalGoals: 21, worldCupGoals: 0 },
            { name: "Rudis Corrales", totalGoals: 17, worldCupGoals: 0 }
        ]
    },
    // 70. Panama
    {
        name: "Panama",
        flag: "/flags/panama.webp",
        uniform: "/shirts/panama.webp",
        highlight: "2018 World Cup debutants.",
        fullHighlight: "Panama’s 2018 World Cup entry marked a milestone.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Jaime Penedo",
        legendaryDefender: "Felipe Baloy",
        legendaryMidfielder: "Gabriel Gómez",
        legendaryStriker: "Luis Tejada",
        bestStrikers: [
            { name: "Luis Tejada", totalGoals: 43, worldCupGoals: 0 },
            { name: "Blas Pérez", totalGoals: 43, worldCupGoals: 0 },
            { name: "Julio Dely Valdés", totalGoals: 18, worldCupGoals: 0 }
        ]
    },
    // 71. Jamaica
    {
        name: "Jamaica",
        flag: "/flags/jamaica.webp",
        uniform: "/shirts/jamaica.webp",
        highlight: "Reggae Boyz’ 1998 flair.",
        fullHighlight: "Jamaica’s 1998 World Cup brought Caribbean vibes.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Warren Barrett",
        legendaryDefender: "Ian Goodison",
        legendaryMidfielder: "Theodore Whitmore",
        legendaryStriker: "Onandi Lowe",
        bestStrikers: [
            { name: "Onandi Lowe", totalGoals: 27, worldCupGoals: 0 },
            { name: "Luton Shelton", totalGoals: 35, worldCupGoals: 0 },
            { name: "Walter Boyd", totalGoals: 19, worldCupGoals: 0 }
        ]
    },
    // 72. Trinidad and Tobago
    {
        name: "Trinidad and Tobago",
        flag: "/flags/trinidad-and-tobago.webp",
        uniform: "/shirts/trinidad-and-tobago.webp",
        highlight: "2006 Soca Warriors.",
        fullHighlight: "Trinidad’s 2006 World Cup debut thrilled the Caribbean.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Shaka Hislop",
        legendaryDefender: "Dwight Yorke",
        legendaryMidfielder: "Russell Latapy",
        legendaryStriker: "Stern John",
        bestStrikers: [
            { name: "Stern John", totalGoals: 70, worldCupGoals: 0 },
            { name: "Dwight Yorke", totalGoals: 19, worldCupGoals: 0 },
            { name: "Kenwyne Jones", totalGoals: 23, worldCupGoals: 0 }
        ]
    },
    // 73. Canada
    {
        name: "Canada",
        flag: "/flags/canada.webp",
        uniform: "/shirts/canada.webp",
        highlight: "2022 World Cup return.",
        fullHighlight: "Canada’s 1986 and 2022 World Cups bookend growth.",
        worldCupParticipations: 2,
        tournaments: ["CONCACAF Championship 1985", "CONCACAF Gold Cup 2000"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Craig Forrest",
        legendaryDefender: "Paul Stalteri",
        legendaryMidfielder: "Dwayne De Rosario",
        legendaryStriker: "Alphonso Davies",
        bestStrikers: [
            { name: "Dwayne De Rosario", totalGoals: 20, worldCupGoals: 0 },
            { name: "Jonathan David", totalGoals: 28, worldCupGoals: 1 },
            { name: "Cyle Larin", totalGoals: 29, worldCupGoals: 1 }
        ]
    },
    // 74. Haiti
    {
        name: "Haiti",
        flag: "/flags/haiti.webp",
        uniform: "/shirts/haiti.webp",
        highlight: "1974 Caribbean surprise.",
        fullHighlight: "Haiti’s 1974 World Cup brought Caribbean flair.",
        worldCupParticipations: 1,
        tournaments: ["CONCACAF Championship 1973"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Henri Françillon",
        legendaryDefender: "Arsène Auguste",
        legendaryMidfielder: "Joseph Marion",
        legendaryStriker: "Emmanuel Sanon",
        bestStrikers: [
            { name: "Emmanuel Sanon", totalGoals: 47, worldCupGoals: 2 },
            { name: "Golman Pierre", totalGoals: 23, worldCupGoals: 0 },
            { name: "Duckens Nazon", totalGoals: 13, worldCupGoals: 0 }
        ]
    },
    // 75. Cuba
    {
        name: "Cuba",
        flag: "/flags/cuba.webp",
        uniform: "/shirts/cuba.webp",
        highlight: "1938 World Cup pioneers.",
        fullHighlight: "Cuba’s 1938 quarter-final was a Caribbean first.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Benito Carvajales",
        legendaryDefender: "Manuel Chorens",
        legendaryMidfielder: "José Antonio Magaña",
        legendaryStriker: "Héctor Socorro",
        bestStrikers: [
            { name: "Héctor Socorro", totalGoals: 12, worldCupGoals: 3 },
            { name: "Mario López", totalGoals: 8, worldCupGoals: 0 },
            { name: "Maykel Reyes", totalGoals: 7, worldCupGoals: 0 }
        ]
    },
    // 76. India
    {
        name: "India",
        flag: "/flags/india.webp",
        uniform: "/shirts/india.webp",
        highlight: "1950 World Cup qualifiers.",
        fullHighlight: "India’s 1950 qualification (withdrawn) hints at potential.",
        worldCupParticipations: 0,
        tournaments: ["Asian Games 1951", "Asian Games 1962"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Peter Thangaraj",
        legendaryDefender: "Jarnail Singh",
        legendaryMidfielder: "Chuni Goswami",
        legendaryStriker: "Bhaichung Bhutia",
        bestStrikers: [
            { name: "Bhaichung Bhutia", totalGoals: 42, worldCupGoals: 0 },
            { name: "I.M. Vijayan", totalGoals: 34, worldCupGoals: 0 },
            { name: "Sunil Chhetri", totalGoals: 94, worldCupGoals: 0 }
        ]
    },
    // 77. Indonesia
    {
        name: "Indonesia",
        flag: "/flags/indonesia.webp",
        uniform: "/shirts/indonesia.webp",
        highlight: "1938 World Cup as Dutch East Indies.",
        fullHighlight: "Indonesia’s 1938 World Cup entry was Asia’s first.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Maulwi Saelan",
        legendaryDefender: "Tan Liong Houw",
        legendaryMidfielder: "Achmad Nawir",
        legendaryStriker: "Bambang Pamungkas",
        bestStrikers: [
            { name: "Bambang Pamungkas", totalGoals: 38, worldCupGoals: 0 },
            { name: "Kurniawan Dwi Yulianto", totalGoals: 31, worldCupGoals: 0 },
            { name: "Soetjipto Soentoro", totalGoals: 15, worldCupGoals: 0 }
        ]
    },
    // 78. South Africa
    {
        name: "South Africa",
        flag: "/flags/south-africa.webp",
        uniform: "/shirts/south-africa.webp",
        highlight: "1996 AFCON champions.",
        fullHighlight: "South Africa’s 1996 AFCON and 2010 hosting shine.",
        worldCupParticipations: 3,
        tournaments: ["Africa Cup of Nations 1996"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Andre Arendse",
        legendaryDefender: "Lucas Radebe",
        legendaryMidfielder: "Doctor Khumalo",
        legendaryStriker: "Benni McCarthy",
        bestStrikers: [
            { name: "Benni McCarthy", totalGoals: 31, worldCupGoals: 0 },
            { name: "Shaun Bartlett", totalGoals: 28, worldCupGoals: 2 },
            { name: "Phil Masinga", totalGoals: 18, worldCupGoals: 0 }
        ]
    },
    // 79. Angola
    {
        name: "Angola",
        flag: "/flags/angola.webp",
        uniform: "/shirts/angola.webp",
        highlight: "2006 World Cup debut.",
        fullHighlight: "Angola’s 2006 World Cup entry marked African growth.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "João Ricardo",
        legendaryDefender: "Kali",
        legendaryMidfielder: "Akwa",
        legendaryStriker: "Flávio Amado",
        bestStrikers: [
            { name: "Flávio Amado", totalGoals: 34, worldCupGoals: 0 },
            { name: "Manucho", totalGoals: 22, worldCupGoals: 0 },
            { name: "Pedro Mantorras", totalGoals: 12, worldCupGoals: 0 }
        ]
    },
    // 80. Togo
    {
        name: "Togo",
        flag: "/flags/togo.webp",
        uniform: "/shirts/togo.webp",
        highlight: "2006 World Cup surprise.",
        fullHighlight: "Togo’s 2006 World Cup debut thrilled Africa.",
        worldCupParticipations: 1,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Kossi Agassa",
        legendaryDefender: "Daré Nibombé",
        legendaryMidfielder: "Mohamed Kader",
        legendaryStriker: "Emmanuel Adebayor",
        bestStrikers: [
            { name: "Emmanuel Adebayor", totalGoals: 32, worldCupGoals: 0 },
            { name: "Mohamed Kader", totalGoals: 13, worldCupGoals: 0 },
            { name: "Kodjo Fo-Doh Laba", totalGoals: 12, worldCupGoals: 0 }
        ]
    },
    {
        name: "Senegal",
        flag: "/flags/senegal.webp",
        uniform: "/shirts/senegal.webp",
        highlight: "2002 quarter-final stars.",
        fullHighlight: "Senegal’s 2002 run and two AFCON titles dazzle.",
        worldCupParticipations: 3,
        tournaments: ["Africa Cup of Nations 2021"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Tony Sylva",
        legendaryDefender: "Kalidou Koulibaly",
        legendaryMidfielder: "Papa Bouba Diop",
        legendaryStriker: "Sadio Mané",
        bestStrikers: [
            { name: "Sadio Mané", totalGoals: 43, worldCupGoals: 3 },
            { name: "Henri Camara", totalGoals: 29, worldCupGoals: 2 },
            { name: "El Hadji Diouf", totalGoals: 24, worldCupGoals: 0 }
        ]
    },
    // 82. Zambia
    {
        name: "Zambia",
        flag: "/flags/zambia.webp",
        uniform: "/shirts/zambia.webp",
        highlight: "2012 AFCON champions.",
        fullHighlight: "Zambia’s 2012 Africa Cup win honored their tragic past.",
        worldCupParticipations: 0,
        tournaments: ["Africa Cup of Nations 2012"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Kennedy Mweene",
        legendaryDefender: "Elijah Tana",
        legendaryMidfielder: "Kalusha Bwalya",
        legendaryStriker: "Godfrey Chitalu",
        bestStrikers: [
            { name: "Godfrey Chitalu", totalGoals: 79, worldCupGoals: 0 },
            { name: "Kalusha Bwalya", totalGoals: 39, worldCupGoals: 0 },
            { name: "Christopher Katongo", totalGoals: 23, worldCupGoals: 0 }
        ]
    },
    // 83. Mali
    {
        name: "Mali",
        flag: "/flags/mali.webp",
        uniform: "/shirts/mali.webp",
        highlight: "West African contenders.",
        fullHighlight: "Mali’s consistent AFCON runs showcase their talent.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Mahamadou Sidibé",
        legendaryDefender: "Adama Tamboura",
        legendaryMidfielder: "Seydou Keita",
        legendaryStriker: "Frédéric Kanouté",
        bestStrikers: [
            { name: "Frédéric Kanouté", totalGoals: 23, worldCupGoals: 0 },
            { name: "Salif Keïta", totalGoals: 16, worldCupGoals: 0 },
            { name: "Moussa Marega", totalGoals: 14, worldCupGoals: 0 }
        ]
    },
    // 84. Burkina Faso
    {
        name: "Burkina Faso",
        flag: "/flags/burkina-faso.webp",
        uniform: "/shirts/burkina-faso.webp",
        highlight: "2013 AFCON finalists.",
        fullHighlight: "Burkina Faso’s 2013 AFCON runner-up finish inspired.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Daouda Diakité",
        legendaryDefender: "Charles Kaboré",
        legendaryMidfielder: "Jonathan Pitroipa",
        legendaryStriker: "Aristide Bancé",
        bestStrikers: [
            { name: "Aristide Bancé", totalGoals: 24, worldCupGoals: 0 },
            { name: "Moumouni Dagano", totalGoals: 34, worldCupGoals: 0 },
            { name: "Préjuce Nakoulma", totalGoals: 13, worldCupGoals: 0 }
        ]
    },
    // 85. DR Congo
    {
        name: "Congo DR",
        flag: "/flags/congo-dr.webp",
        uniform: "/shirts/congo-dr.webp",
        highlight: "Leopards’ African legacy.",
        fullHighlight: "DR Congo’s two AFCON titles and Zaire’s 1974 World Cup endure.",
        worldCupParticipations: 1,
        tournaments: ["Africa Cup of Nations 1968", "Africa Cup of Nations 1974"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Robert Kidiaba",
        legendaryDefender: "Mwepu Ilunga",
        legendaryMidfielder: "Tshimen Bwanga",
        legendaryStriker: "Pierre Ndaye Mulamba",
        bestStrikers: [
            { name: "Pierre Ndaye Mulamba", totalGoals: 20, worldCupGoals: 0 },
            { name: "Shabani Nonda", totalGoals: 36, worldCupGoals: 0 },
            { name: "Dieumerci Mbokani", totalGoals: 22, worldCupGoals: 0 }
        ]
    },
    // 86. Congo
    {
        name: "Congo",
        flag: "/flags/congo.webp",
        uniform: "/shirts/congo.webp",
        highlight: "1972 AFCON winners.",
        fullHighlight: "Congo’s 1972 AFCON triumph remains their peak.",
        worldCupParticipations: 0,
        tournaments: ["Africa Cup of Nations 1972"],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Paul Sayal",
        legendaryDefender: "Gaston Tchangana",
        legendaryMidfielder: "Jean-Michel Mbono",
        legendaryStriker: "François M’Pelé",
        bestStrikers: [
            { name: "François M’Pelé", totalGoals: 34, worldCupGoals: 0 },
            { name: "Thievy Bifouma", totalGoals: 16, worldCupGoals: 0 },
            { name: "Férébory Doré", totalGoals: 10, worldCupGoals: 0 }
        ]
    },
    // 87. Guinea
    {
        name: "Guinea",
        flag: "/flags/guinea.webp",
        uniform: "/shirts/guinea.webp",
        highlight: "1976 AFCON finalists.",
        fullHighlight: "Guinea’s 1976 AFCON runner-up finish stands out.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Naby Yattara",
        legendaryDefender: "Morlaye Soumah",
        legendaryMidfielder: "Chérif Souleymane",
        legendaryStriker: "Ismaël Bangoura",
        bestStrikers: [
            { name: "Ismaël Bangoura", totalGoals: 13, worldCupGoals: 0 },
            { name: "Titi Camara", totalGoals: 23, worldCupGoals: 0 },
            { name: "Souleymane Youla", totalGoals: 19, worldCupGoals: 0 }
        ]
    },
    // 88. Uganda
    {
        name: "Uganda",
        flag: "/flags/uganda.webp",
        uniform: "/shirts/uganda.webp",
        highlight: "1978 AFCON finalists.",
        fullHighlight: "Uganda’s 1978 AFCON runner-up finish thrilled East Africa.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Paul Ssali",
        legendaryDefender: "Tom Lwanga",
        legendaryMidfielder: "Phillip Omondi",
        legendaryStriker: "David Otti",
        bestStrikers: [
            { name: "Phillip Omondi", totalGoals: 26, worldCupGoals: 0 },
            { name: "David Obua", totalGoals: 15, worldCupGoals: 0 },
            { name: "Emmanuel Okwi", totalGoals: 28, worldCupGoals: 0 }
        ]
    },
    // 89. Zimbabwe
    {
        name: "Zimbabwe",
        flag: "/flags/zimbabwe.webp",
        uniform: "/shirts/zimbabwe.webp",
        highlight: "Southern African warriors.",
        fullHighlight: "Zimbabwe’s consistent AFCON appearances impress.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Bruce Grobbelaar",
        legendaryDefender: "Ephraim Chawanda",
        legendaryMidfielder: "Peter Ndlovu",
        legendaryStriker: "Benjani Mwaruwari",
        bestStrikers: [
            { name: "Peter Ndlovu", totalGoals: 37, worldCupGoals: 0 },
            { name: "Benjani Mwaruwari", totalGoals: 10, worldCupGoals: 0 },
            { name: "Knowledge Musona", totalGoals: 24, worldCupGoals: 0 }
        ]
    },
    // 90. Kenya
    {
        name: "Kenya",
        flag: "/flags/kenya.webp",
        uniform: "/shirts/kenya.webp",
        highlight: "Harambee Stars’ potential.",
        fullHighlight: "Kenya’s regional strength hints at bigger things.",
        worldCupParticipations: 0,
        tournaments: [],
        worldCupFinishes: {},
        legendaryGoalkeeper: "Matthew Ottamax",
        legendaryDefender: "Musa Otieno",
        legendaryMidfielder: "McDonald Mariga",
        legendaryStriker: "Dennis Oliech",
        bestStrikers: [
            { name: "Dennis Oliech", totalGoals: 34, worldCupGoals: 0 },
            { name: "Mike Okoth Origi", totalGoals: 17, worldCupGoals: 0 },
            { name: "Victor Wanyama", totalGoals: 7, worldCupGoals: 0 }
        ]
    }


];

// Export for use in your pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = countries;
}