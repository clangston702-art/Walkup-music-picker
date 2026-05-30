import { useState } from "react";

const VIBES = ["Hype & Intimidating","Fun & Energetic","Cool & Confident","Fierce & Focused","Silly & Playful","Smooth & Swagger"];
const GENRES = ["Pop","Hip-Hop","Country","Rock","Latin","Disney/Kids","Classic Rock","R&B","Anything goes!"];
const POSITIONS = ["Pitcher","Catcher","First Base","Second Base","Shortstop","Third Base","Left Field","Center Field","Right Field","Designated Hitter"];

const ALL_TEAMS = ["Angels","Astros","Athletics","Blue Jays","Braves","Brewers","Cardinals","Cubs","Diamondbacks","Dodgers","Giants","Guardians","Mariners","Marlins","Mets","Nationals","Orioles","Padres","Phillies","Pirates","Rangers","Rays","Red Sox","Reds","Rockies","Royals","Tigers","Twins","White Sox","Yankees"];

const PLAYLISTS = [
  {
    category: "popular",
    emoji: "🏆",
    name: "Best Baseball Walk Up Songs",
    songs: 225,
    saves: "13.4K",
    description: "The ultimate collection — most saved baseball walk-up playlist on Spotify!",
    url: "https://open.spotify.com/playlist/2JbNLlH3bDNe5wZxkJTv0f",
    clean: false,
  },
  {
    category: "popular",
    emoji: "🔥",
    name: "Baseball Walk Up Bangers",
    songs: 122,
    saves: "13K",
    description: "Best walk up songs, MLB walk up songs, baseball walk out songs.",
    url: "https://open.spotify.com/playlist/06VAJnwzNuE9FeLQwKZcyq",
    clean: false,
  },
  {
    category: "popular",
    emoji: "🔥",
    name: "Baseball Hype Clean 2026",
    songs: 40,
    saves: "9.6K",
    description: "High energy clean hype songs perfect for walking up to the plate!",
    url: "https://open.spotify.com/playlist/5q3FOq18QpfLQM1N7RAip6",
    clean: true,
  },
  {
    category: "popular",
    emoji: "⭐",
    name: "Youth Baseball Hype Clean",
    songs: 52,
    saves: "6.1K",
    description: "Clean hype songs perfect for youth baseball players!",
    url: "https://open.spotify.com/playlist/65xcfM1Bqu2CNzkWiqBJxm",
    clean: true,
  },
  {
    category: "popular",
    emoji: "💪",
    name: "Baseball (Clean) Pump Up Songs",
    songs: 49,
    saves: "5.3K",
    description: "Clean pump up songs to get you fired up at the plate!",
    url: "https://open.spotify.com/playlist/4AOyCs8j8JsMv4jnc8LhUx",
    clean: true,
  },
  {
    category: "popular",
    emoji: "⭐",
    name: "Clean Baseball Hype 2026",
    songs: 136,
    saves: "3.5K",
    description: "136 clean hype tracks for your walk-up this season!",
    url: "https://open.spotify.com/playlist/0JLwOXIQi5u1dJpndbILq5",
    clean: true,
  },
  {
    category: "popular",
    emoji: "💯",
    name: "Best Walk Up Songs 100% Clean",
    songs: 19,
    saves: "1.6K",
    description: "Guaranteed 100% clean — perfect for any age player!",
    url: "https://open.spotify.com/playlist/637VisFaUjbKxC4ZoDNsop",
    clean: true,
  },
  {
    category: "popular",
    emoji: "⚾",
    name: "Mama's 2026 Clean Baseball Hype",
    songs: 85,
    saves: "1.5K",
    description: "Made by a baseball mom — clean hype songs for your player!",
    url: "https://open.spotify.com/playlist/69shJ4lrid4LCok84JCt4y",
    clean: true,
  },
  {
    category: "popular",
    emoji: "👦",
    name: "Kids Baseball Walk Out Songs",
    songs: 35,
    saves: "1.4K",
    description: "Specifically curated for young players — fun and kid-friendly!",
    url: "https://open.spotify.com/playlist/4jE8ByM7TXxd7sRz8oxOM9",
    clean: true,
  },
  {
    category: "popular",
    emoji: "🥎",
    name: "Best Walk Up Songs Baseball & Softball Clean",
    songs: 190,
    saves: "968",
    description: "Great for baseball AND softball players — 190 clean songs!",
    url: "https://open.spotify.com/playlist/7EtfElx8hjOH5JGmcVkBpo",
    clean: true,
  },
  {
    category: "popular",
    emoji: "🎯",
    name: "2026 Baseball Walk-Up Dingers Clean",
    songs: 122,
    saves: "13",
    description: "Fresh clean walk-up tracks for the 2026 season!",
    url: "https://open.spotify.com/playlist/1S4IuOvQ7TB8k4k0MrPzpm",
    clean: true,
  },
  {
    category: "college",
    emoji: "🐯",
    name: "LSU Tigers Baseball",
    songs: 40,
    saves: "117",
    description: "2026 LSU Baseball walk-up songs — Geaux Tigers!",
    url: "https://open.spotify.com/playlist/5vkeWB2TWn434VW5iwREvQ",
    clean: false,
    team: "LSU",
    conference: "SEC",
  },
  {
    category: "college",
    emoji: "🐗",
    name: "Arkansas Razorbacks Baseball",
    songs: 39,
    saves: "21",
    description: "2026 Arkansas Razorbacks walk-up songs — Woo Pig Sooie!",
    url: "https://open.spotify.com/playlist/6GG9nAGCDBDBoToJjazBrP",
    clean: false,
    team: "Arkansas",
    conference: "SEC",
  },
  {
    category: "college",
    emoji: "🟡",
    name: "Wake Forest Baseball",
    songs: 34,
    saves: "24",
    description: "Wake Forest Demon Deacons baseball walk-up songs!",
    url: "https://open.spotify.com/playlist/5OUpjV79CcvvkxVGnpfQvI",
    clean: false,
    team: "Wake Forest",
    conference: "ACC",
  },
];

const MLB_PLAYERS = [
  { name:"Aaron Judge", team:"Yankees", song:"Swag Surfin'", artist:"F.L.Y.", vibe:"Pure swagger — the crowd goes wild the second that bass drops.", moment:"The opening bass hit" },
  { name:"Francisco Lindor", team:"Mets", song:"My Girl", artist:"The Temptations", vibe:"Whole stadium sings along — pure joy and crowd connection.", moment:"'My girl...' first note" },
  { name:"Pete Alonso", team:"Mets", song:"Layla", artist:"Derek & the Dominos", vibe:"That iconic guitar riff hits instantly — classic rock power.", moment:"The opening guitar riff" },
  { name:"Shohei Ohtani", team:"Dodgers", song:"Feeling Good", artist:"Michael Buble", vibe:"Smooth, confident, legendary — befitting the greatest player alive.", moment:"'Birds flying high...' opening" },
  { name:"Mookie Betts", team:"Dodgers", song:"Affirmations", artist:"Flippa T", vibe:"Positive energy and swag — gets the whole dugout hyped.", moment:"The opening beat" },
  { name:"Vlad Guerrero Jr.", team:"Blue Jays", song:"Drip Too Hard", artist:"Lil Baby & Gunna", vibe:"Bold, thumping bass — maximum confidence at the plate.", moment:"The first beat drop" },
  { name:"Juan Soto", team:"Mets", song:"Empire State of Mind", artist:"Jay-Z & Alicia Keys", vibe:"Big-city energy, legendary status — the whole park feels it.", moment:"'In New York...' opening" },
  { name:"Ronald Acuna Jr.", team:"Braves", song:"Los Illuminaty", artist:"Rochy RD", vibe:"High-energy Latin trap — electric and intimidating.", moment:"The opening drop" },
  { name:"Justin Turner", team:"Cubs", song:"Top Gun Anthem", artist:"Harold Faltermeyer", vibe:"Cinematic, dramatic — that opening bell creates instant chills.", moment:"The iconic opening bell tone" },
  { name:"Austin Wells", team:"Yankees", song:"Whole Lotta Love", artist:"Led Zeppelin", vibe:"Raw rock power — instantly recognizable riff gets the crowd moving.", moment:"The opening guitar riff" },
  { name:"Pete Crow-Armstrong", team:"Cubs", song:"Swag Surfin'", artist:"F.L.Y.", vibe:"High energy, youthful swagger — perfect for an exciting young star.", moment:"Opening bass drop" },
  { name:"Kyle Tucker", team:"Cubs", song:"HUMBLE.", artist:"Kendrick Lamar", vibe:"Controlled intensity — quiet confidence before explosive power.", moment:"'Sit down...' opening" },
  { name:"Gerardo Parra", team:"Legend", song:"Baby Shark", artist:"Pinkfong", vibe:"The greatest walk-up of all time — pure joy and crowd participation!", moment:"'Baby shark, doo doo doo...'" },
  { name:"Blake Snell", team:"Giants", song:"God's Country", artist:"Blake Shelton", vibe:"Big, anthemic country — commanding presence on the mound.", moment:"The opening chord" },
  { name:"Jose Ramirez", team:"Guardians", song:"Leyenda", artist:"Traditional", vibe:"Deep roots, fierce pride — sets a warrior tone at the plate.", moment:"Opening notes" },
  { name:"Freddie Freeman", team:"Dodgers", song:"Mr. Brightside", artist:"The Killers", vibe:"Crowd goes crazy — everyone knows every word of this one.", moment:"'Coming out of my cage...'" },
  { name:"Bryce Harper", team:"Phillies", song:"God's Plan", artist:"Drake", vibe:"Smooth superstar energy — walks up like he owns the stadium.", moment:"Opening piano" },
  { name:"Manny Machado", team:"Padres", song:"MONACO", artist:"Bad Bunny", vibe:"Latin swagger meets elite confidence — pure presence.", moment:"First drop" },
  { name:"Yordan Alvarez", team:"Astros", song:"Titi Me Pregunto", artist:"Bad Bunny", vibe:"Massive Latin energy — the whole park gets loud immediately.", moment:"Opening beat" },
  { name:"Mike Trout", team:"Angels", song:"Thunderstruck", artist:"AC/DC", vibe:"Pure power and electricity — fitting for the greatest of his generation.", moment:"'Thunder...' opening" },
  { name:"Corey Seager", team:"Rangers", song:"White Horse", artist:"Chris Stapleton", vibe:"The #1 MLB walk-up of 2025 — gritty, powerful, commanding.", moment:"Opening guitar" },
  { name:"Trea Turner", team:"Phillies", song:"Can't Hold Us", artist:"Macklemore & Ryan Lewis", vibe:"Explosive, joyful speed — perfect for the fastest man on the field.", moment:"The horn-blasting chorus" },
  { name:"Elly De La Cruz", team:"Reds", song:"Drip Too Hard", artist:"Lil Baby & Gunna", vibe:"Young phenom energy — bold, confident, electrifying.", moment:"First beat drop" },
  { name:"Gunnar Henderson", team:"Orioles", song:"HUMBLE.", artist:"Kendrick Lamar", vibe:"Quiet superstar confidence — let the bat do the talking.", moment:"Opening beat" },
  { name:"Jazz Chisholm Jr.", team:"Yankees", song:"Swag Surfin'", artist:"F.L.Y.", vibe:"Pure personality and flair — most exciting walk-up in the game.", moment:"Opening bass hit" },
  { name:"Bobby Witt Jr.", team:"Royals", song:"God's Country", artist:"Blake Shelton", vibe:"Kansas heart with superstar swagger — crowd loves it.", moment:"The first chord" },
  { name:"Paul Skenes", team:"Pirates", song:"Enter Sandman", artist:"Metallica", vibe:"Ace pitcher energy — pure intimidation walking to the mound.", moment:"Quiet guitar before the explosion" },
  { name:"Corbin Carroll", team:"Diamondbacks", song:"Levitating", artist:"Dua Lipa", vibe:"Smooth, effortless cool — floats into the batter's box.", moment:"Opening synth" },
  { name:"Fernando Tatis Jr.", team:"Padres", song:"Titi Me Pregunto", artist:"Bad Bunny", vibe:"Electric showman energy — Petco Park erupts every time.", moment:"Opening beat" },
  { name:"Julio Rodriguez", team:"Mariners", song:"FEFE", artist:"6ix9ine & Nicki Minaj", vibe:"Young superstar energy — loud, bold, electric.", moment:"Opening beat" },
  { name:"Derek Jeter", team:"Legend", song:"Empire State of Mind", artist:"Jay-Z & Alicia Keys", vibe:"The Captain — New York royalty, timeless and legendary.", moment:"'In New York...' opening" },
  { name:"Ken Griffey Jr.", team:"Legend", song:"U Can't Touch This", artist:"MC Hammer", vibe:"The Kid's legendary 90s vibe — pure nostalgia and joy.", moment:"'STOP — Hammer time!'" },
];

const SONGS = {
  "Hype & Intimidating": {
    "Pop": [{title:"POWER",artist:"Kanye West",why:"An absolute statement song — powerful, cinematic, unstoppable.",moment:"The opening orchestral hit"},{title:"Roar",artist:"Katy Perry",why:"Built for big moments — confident and crowd-pumping.",moment:"'I got the eye of the tiger...' chorus"},{title:"Stronger",artist:"Kelly Clarkson",why:"Anthemic power that translates perfectly to a big walk-up.",moment:"The chorus drop"}],
    "Hip-Hop": [{title:"HUMBLE.",artist:"Kendrick Lamar",why:"Controlled intensity — quiet confidence before explosive power.",moment:"'Sit down...' opening beat"},{title:"Swag Surfin'",artist:"F.L.Y.",why:"Pure swagger — this is Aaron Judge's actual walk-up song!",moment:"Opening bass hit"},{title:"Drip Too Hard",artist:"Lil Baby & Gunna",why:"Bold and confident — maximum presence at the plate.",moment:"First beat drop"}],
    "Country": [{title:"White Horse",artist:"Chris Stapleton",why:"The #1 MLB walk-up song — gritty and powerful.",moment:"Opening guitar"},{title:"God's Country",artist:"Blake Shelton",why:"Big, anthemic, commanding — announces your arrival.",moment:"The first chord"},{title:"Loud and Heavy",artist:"Cody Jinks",why:"Thunderous and intense — a perennial baseball favorite.",moment:"The drum intro"}],
    "Rock": [{title:"Whole Lotta Love",artist:"Led Zeppelin",why:"That riff hits instantly — pure rock intimidation.",moment:"The iconic opening riff"},{title:"Enter Sandman",artist:"Metallica",why:"The greatest entrance song in sports — pure menace.",moment:"Quiet guitar before the explosion"},{title:"Back in Black",artist:"AC/DC",why:"Instantly recognizable — commands total attention.",moment:"The opening riff"}],
    "Latin": [{title:"Los Illuminaty",artist:"Rochy RD",why:"Ronald Acuna Jr's song — electric Latin trap energy.",moment:"The opening drop"},{title:"MONACO",artist:"Bad Bunny",why:"Elite swagger with an unstoppable beat.",moment:"First verse drop"},{title:"Titi Me Pregunto",artist:"Bad Bunny",why:"Undeniable energy — the whole crowd feels it.",moment:"Opening beat"}],
    "Disney/Kids": [{title:"I'll Make a Man Out of You",artist:"Mulan",why:"Epic, martial, triumphant — surprisingly great walk-up energy!",moment:"'Let's get down to business...'"},{title:"He's a Pirate",artist:"Hans Zimmer",why:"Cinematic and bold — announces a legend entering.",moment:"The swelling opening"},{title:"Go the Distance",artist:"Hercules",why:"Heroic and powerful — perfect for a young champion.",moment:"The soaring chorus"}],
    "Classic Rock": [{title:"Layla",artist:"Derek & the Dominos",why:"Pete Alonso's actual song — iconic guitar riff.",moment:"The opening guitar riff"},{title:"We Will Rock You",artist:"Queen",why:"Universal pump-up anthem — the whole crowd joins in.",moment:"Stomp-stomp-clap opening"},{title:"Eye of the Tiger",artist:"Survivor",why:"The ultimate sports moment song — still undefeated.",moment:"The opening riff"}],
    "R&B": [{title:"Empire State of Mind",artist:"Jay-Z & Alicia Keys",why:"Juan Soto's song — legendary status, big-city energy.",moment:"'In New York...' opening"},{title:"All I Do Is Win",artist:"DJ Khaled",why:"Every single person raises their hands. Guaranteed.",moment:"'All I do is WIN WIN WIN...'"},{title:"Run the World",artist:"Beyonce",why:"Pure power and confidence — built for champions.",moment:"The opening horn hit"}],
    "Anything goes!": [{title:"Top Gun Anthem",artist:"Harold Faltermeyer",why:"Justin Turner's actual song — that opening bell creates instant chills.",moment:"The iconic opening bell"},{title:"Eye of the Tiger",artist:"Survivor",why:"The ultimate walk-up classic — never gets old.",moment:"The opening riff"},{title:"Swag Surfin'",artist:"F.L.Y.",why:"Aaron Judge's real walk-up — maximum swagger guaranteed.",moment:"Opening bass hit"}]
  },
  "Fun & Energetic": {
    "Pop": [{title:"Can't Stop the Feeling",artist:"Justin Timberlake",why:"Pure joy in a song — impossible not to smile walking up.",moment:"The opening groove"},{title:"Shake It Off",artist:"Taylor Swift",why:"Carefree confidence — shakes off any nerves immediately.",moment:"'I shake it off, I shake it off'"},{title:"Happy",artist:"Pharrell Williams",why:"Infectious energy that lights up the whole ballpark.",moment:"'Because I'm happy...'"}],
    "Hip-Hop": [{title:"Uptown Funk",artist:"Mark Ronson ft. Bruno Mars",why:"Irresistibly fun — gets everyone moving immediately.",moment:"'Don't believe me just watch'"},{title:"Can't Hold Us",artist:"Macklemore & Ryan Lewis",why:"Explosive, joyful energy — built for big moments.",moment:"The horn-blasting chorus"},{title:"Old Town Road",artist:"Lil Nas X",why:"Wildly fun and unexpected — the crowd loves it.",moment:"'I got the horses in the back...'"}],
    "Country": [{title:"Body Like a Back Road",artist:"Sam Hunt",why:"Upbeat and breezy — a crowd-pleaser every time.",moment:"The opening guitar strum"},{title:"Cruise",artist:"Florida Georgia Line",why:"Summer vibes and good energy — instantly likeable.",moment:"Opening notes"},{title:"Friends in Low Places",artist:"Garth Brooks",why:"Everyone sings along — pure crowd moment.",moment:"'Blame it all on my roots...'"}],
    "Rock": [{title:"Mr. Brightside",artist:"The Killers",why:"Everyone knows every word — pure communal energy.",moment:"'Coming out of my cage...'"},{title:"Don't Stop Me Now",artist:"Queen",why:"Freddie Mercury's pure joy is completely contagious.",moment:"'Tonight I'm gonna have myself a real good time'"},{title:"September",artist:"Earth Wind & Fire",why:"Impossible to hear without smiling.",moment:"'Do you remember the 21st night of September'"}],
    "Latin": [{title:"Bailando",artist:"Enrique Iglesias",why:"Dancing energy that gets the whole crowd moving.",moment:"Opening beat"},{title:"Despacito",artist:"Luis Fonsi",why:"Everyone knows it — pure fun crowd moment.",moment:"The iconic opening guitar"},{title:"Lean On",artist:"Major Lazer & DJ Snake",why:"Upbeat, universal, infectious energy.",moment:"Opening drop"}],
    "Disney/Kids": [{title:"We're All in This Together",artist:"High School Musical",why:"Team spirit anthem — the whole dugout sings along.",moment:"The chorus"},{title:"You've Got a Friend in Me",artist:"Randy Newman",why:"Heartwarming and charming — totally original walk-up.",moment:"Opening guitar picking"},{title:"Baby Shark",artist:"Pinkfong",why:"Gerardo Parra made this legendary — crowd participation guaranteed!",moment:"'Baby shark, doo doo doo'"}],
    "Classic Rock": [{title:"Livin' on a Prayer",artist:"Bon Jovi",why:"Everyone sings along — pure stadium magic.",moment:"The iconic guitar intro"},{title:"Don't Stop Believin'",artist:"Journey",why:"Undefeated crowd anthem — timeless feel-good energy.",moment:"The piano intro"},{title:"Sweet Home Alabama",artist:"Lynyrd Skynyrd",why:"Instantly recognizable — warm, fun, crowd-pleasing.",moment:"Opening guitar riff"}],
    "R&B": [{title:"Happy",artist:"Pharrell Williams",why:"Pure joy — impossible not to feel good hearing this.",moment:"'Because I'm happy...'"},{title:"Uptown Funk",artist:"Mark Ronson ft. Bruno Mars",why:"Irresistible groove — gets everyone moving instantly.",moment:"'Don't believe me just watch'"},{title:"September",artist:"Earth Wind & Fire",why:"Universal feel-good anthem.",moment:"The iconic opening"}],
    "Anything goes!": [{title:"Baby Shark",artist:"Pinkfong",why:"Gerardo Parra made this iconic — the greatest fun walk-up ever.",moment:"'Baby shark, doo doo doo'"},{title:"Can't Stop the Feeling",artist:"Justin Timberlake",why:"Pure joy — impossible not to smile.",moment:"Opening groove"},{title:"September",artist:"Earth Wind & Fire",why:"Universal feel-good anthem.",moment:"The iconic opening"}]
  },
  "Cool & Confident": {
    "Pop": [{title:"Levitating",artist:"Dua Lipa",why:"Smooth and effortlessly cool — floats to the plate.",moment:"Opening synth"},{title:"Golden",artist:"Harry Styles",why:"Easy swagger and shine — naturally cool.",moment:"Opening guitar"},{title:"Blinding Lights",artist:"The Weeknd",why:"Smooth synthwave swagger — effortlessly stylish.",moment:"The opening synth"}],
    "Hip-Hop": [{title:"SICKO MODE",artist:"Travis Scott",why:"Multiple drops keep the crowd guessing — unpredictable and cool.",moment:"First beat switch"},{title:"God's Plan",artist:"Drake",why:"Smooth confidence — too cool for school energy.",moment:"Opening piano"},{title:"Mask Off",artist:"Future",why:"Flute-driven cool — effortlessly different walk-up.",moment:"The flute opening"}],
    "Country": [{title:"Tennessee Whiskey",artist:"Chris Stapleton",why:"Soulful cool — commands total attention effortlessly.",moment:"Opening notes"},{title:"Die a Happy Man",artist:"Thomas Rhett",why:"Smooth and confident — unforgettable presence.",moment:"Opening guitar"},{title:"Meant to Be",artist:"Bebe Rexha & FGL",why:"Easy confident swagger — smooth and crowd-pleasing.",moment:"Opening notes"}],
    "Rock": [{title:"Smooth",artist:"Santana ft. Rob Thomas",why:"That guitar riff is pure cool — effortlessly commanding.",moment:"The iconic guitar opening"},{title:"Walk This Way",artist:"Aerosmith",why:"Swagger personified — cool without trying.",moment:"Opening drum and guitar"},{title:"Come as You Are",artist:"Nirvana",why:"Quietly cool and confident.",moment:"The opening bass line"}],
    "Latin": [{title:"Hawaii",artist:"Maluma",why:"Smooth and suave — effortlessly stylish entrance.",moment:"Opening verse"},{title:"Callaita",artist:"Bad Bunny",why:"Understated cool — different energy that stands out.",moment:"Opening guitar"},{title:"Unforgettable",artist:"French Montana ft. Swae Lee",why:"Laid-back cool with serious style.",moment:"Opening melody"}],
    "Disney/Kids": [{title:"Zero to Hero",artist:"Hercules",why:"Confident and triumphant — believes in the hero moment.",moment:"The punchy chorus"},{title:"Almost There",artist:"Princess and the Frog",why:"Determined cool — smooth jazz walk-up vibes.",moment:"Opening jazz piano"},{title:"Surface Pressure",artist:"Encanto",why:"Complex confidence — everyone knows this song now.",moment:"The building opening"}],
    "Classic Rock": [{title:"Feeling Good",artist:"Michael Buble",why:"Shohei Ohtani's actual song — smooth, legendary, unforgettable.",moment:"'Birds flying high...'"},{title:"Superstition",artist:"Stevie Wonder",why:"Funky cool that never gets old — pure class.",moment:"The opening clavinet riff"},{title:"Roxanne",artist:"The Police",why:"Instantly cool — distinctive and attention-grabbing.",moment:"'Roxanne...' opening"}],
    "R&B": [{title:"Redbone",artist:"Childish Gambino",why:"Deeply cool and funky — totally unique walk-up energy.",moment:"'Stay woke...' opening"},{title:"Leave the Door Open",artist:"Silk Sonic",why:"Silky smooth — Bruno Mars and Anderson Paak swagger.",moment:"Opening piano"},{title:"Thinking Out Loud",artist:"Ed Sheeran",why:"Smooth and confident.",moment:"Opening guitar"}],
    "Anything goes!": [{title:"Feeling Good",artist:"Michael Buble",why:"Shohei Ohtani's real walk-up — smooth, confident, legendary.",moment:"'Birds flying high...'"},{title:"Smooth",artist:"Santana ft. Rob Thomas",why:"That guitar is pure cool.",moment:"The iconic guitar riff"},{title:"Superstition",artist:"Stevie Wonder",why:"Timeless funky cool.",moment:"The opening clavinet"}]
  },
  "Fierce & Focused": {
    "Pop": [{title:"Fighter",artist:"Christina Aguilera",why:"Fierce and determined — makes you feel invincible.",moment:"'After all you put me through...'"},{title:"Unstoppable",artist:"Sia",why:"Quiet fire building to an explosion.",moment:"The swelling chorus"},{title:"Run the World Girls",artist:"Beyonce",why:"Fierce power anthem — pure intensity and focus.",moment:"The opening horn blast"}],
    "Hip-Hop": [{title:"Lose Yourself",artist:"Eminem",why:"One shot, one opportunity — total focus mode activated.",moment:"The opening piano"},{title:"Till I Collapse",artist:"Eminem",why:"The ultimate focus and push-through anthem.",moment:"Opening beat"},{title:"Started From the Bottom",artist:"Drake",why:"Motivated and focused — driven by hunger to succeed.",moment:"'Started from the bottom now we're here'"}],
    "Country": [{title:"Gunpowder and Lead",artist:"Miranda Lambert",why:"Fierce and fearless — absolute focus and fire.",moment:"The opening guitar"},{title:"The House That Built Me",artist:"Miranda Lambert",why:"Deep emotional focus — plays with real heart.",moment:"Opening guitar picking"},{title:"Hard Way Home",artist:"Brandi Carlile",why:"Gritty determination.",moment:"Opening guitar"}],
    "Rock": [{title:"Thunderstruck",artist:"AC/DC",why:"The greatest pump-up song ever — instant fierce energy.",moment:"'Thunder...' opening"},{title:"Seven Nation Army",artist:"The White Stripes",why:"That bass riff is a battle cry — fierce and focused.",moment:"The iconic bass riff"},{title:"Welcome to the Jungle",artist:"Guns N Roses",why:"Jungle heat and fierce energy.",moment:"'Do you know where you are?'"}],
    "Latin": [{title:"X",artist:"Nicky Jam & J Balvin",why:"Fierce and focused Latin energy — all business.",moment:"Opening beat"},{title:"Taki Taki",artist:"DJ Snake ft. Selena Gomez",why:"Fierce Latin energy with serious swagger.",moment:"First drop"},{title:"Ante Up",artist:"M.O.P.",why:"War cry energy — totally fierce walk-up.",moment:"'ANTE UP!'"}],
    "Disney/Kids": [{title:"I Am Moana",artist:"Moana",why:"Deep, fierce, identity-driven — plays for something bigger.",moment:"The powerful declaration moment"},{title:"Show Yourself",artist:"Frozen 2",why:"Fierce self-belief exploding into power.",moment:"The soaring reveal"},{title:"How Far I'll Go",artist:"Moana",why:"Determined and fierce — driven to be the best.",moment:"The chorus swell"}],
    "Classic Rock": [{title:"Immigrant Song",artist:"Led Zeppelin",why:"Pure fierce warrior energy — Robert Plant's war cry.",moment:"'AH-AH-AHHHHH' opening scream"},{title:"Kashmir",artist:"Led Zeppelin",why:"Massive, building, intense.",moment:"The opening riff"},{title:"Thunderstruck",artist:"AC/DC",why:"Undefeated pump-up anthem.",moment:"'Thunder...' opening"}],
    "R&B": [{title:"Crazy in Love",artist:"Beyonce",why:"That horn hit is ferocious — fierce and iconic.",moment:"The opening horn blast"},{title:"Formation",artist:"Beyonce",why:"Fierce, focused, powerful.",moment:"Opening beat drop"},{title:"Diva",artist:"Beyonce",why:"Fierce confidence — announces a champion.",moment:"Opening beat"}],
    "Anything goes!": [{title:"Thunderstruck",artist:"AC/DC",why:"The greatest pump-up song of all time.",moment:"'Thunder...' opening"},{title:"Lose Yourself",artist:"Eminem",why:"One shot — total focus mode.",moment:"The opening piano"},{title:"Seven Nation Army",artist:"The White Stripes",why:"That bass riff is a battle cry heard around the world.",moment:"The iconic opening riff"}]
  },
  "Silly & Playful": {
    "Pop": [{title:"Happy",artist:"Pharrell Williams",why:"Contagiously joyful — makes everyone around you smile.",moment:"'Because I'm happy...'"},{title:"Can't Stop the Feeling",artist:"Justin Timberlake",why:"Pure dancing joy — nobody can stay still.",moment:"Opening groove"},{title:"Shake It Off",artist:"Taylor Swift",why:"Playfully carefree — totally disarms the pitcher.",moment:"'I shake it off, I shake it off'"}],
    "Hip-Hop": [{title:"The Git Up",artist:"Blanco Brown",why:"Gets everyone doing the dance — pure fun.",moment:"Opening guitar twang"},{title:"Old Town Road",artist:"Lil Nas X",why:"Wildly fun and unexpected — the crowd loves it.",moment:"'I got the horses in the back...'"},{title:"Bounce Back",artist:"Big Sean",why:"Playfully confident — fun but still hype.",moment:"Opening beat"}],
    "Country": [{title:"Chicken Fried",artist:"Zac Brown Band",why:"Silly, warm, crowd-pleasing fun.",moment:"Opening guitar"},{title:"Friends in Low Places",artist:"Garth Brooks",why:"Everyone sings along — pure crowd moment.",moment:"'Blame it all on my roots...'"},{title:"Wagon Wheel",artist:"Darius Rucker",why:"Singalong crowd-pleaser.",moment:"Opening strum"}],
    "Rock": [{title:"Don't Stop Me Now",artist:"Queen",why:"Pure joyful silliness at full speed.",moment:"'Tonight I'm gonna have myself a real good time'"},{title:"Dancing Queen",artist:"ABBA",why:"Silly fun that nobody expects — total crowd delight.",moment:"'You are the dancing queen...'"},{title:"I Love Rock n Roll",artist:"Joan Jett",why:"Playfully tough — fun and cool at the same time.",moment:"The opening drum beat"}],
    "Latin": [{title:"Gasolina",artist:"Daddy Yankee",why:"Irresistibly fun Latin energy.",moment:"Opening beat"},{title:"La Bamba",artist:"Ritchie Valens",why:"Classic fun singalong — crowd participation guaranteed.",moment:"Opening guitar riff"},{title:"Conga",artist:"Gloria Estefan",why:"The ultimate dance-along song.",moment:"'Come on shake your body baby...'"}],
    "Disney/Kids": [{title:"Baby Shark",artist:"Pinkfong",why:"THE legendary silly walk-up — Gerardo Parra made this immortal.",moment:"'Baby shark, doo doo doo'"},{title:"Under the Sea",artist:"Little Mermaid",why:"Totally unexpected and delightfully silly.",moment:"'Under the sea...'"},{title:"Friend Like Me",artist:"Aladdin",why:"Showstopping silliness — Robin Williams energy.",moment:"'Well Ali Baba had them forty thieves'"}],
    "Classic Rock": [{title:"Sweet Caroline",artist:"Neil Diamond",why:"'BA BA BA' — the whole park joins in.",moment:"'Sweet Caroline...'"},{title:"Piano Man",artist:"Billy Joel",why:"Everyone sings every word.",moment:"The harmonica opening"},{title:"Brown Eyed Girl",artist:"Van Morrison",why:"Charming, fun, universally beloved.",moment:"'Hey where did we go...'"}],
    "R&B": [{title:"September",artist:"Earth Wind & Fire",why:"Impossible not to dance — pure playful joy.",moment:"'Do you remember...'"},{title:"Treasure",artist:"Bruno Mars",why:"Playfully funky — Bruno's charm is totally contagious.",moment:"Opening groove"},{title:"Superstition",artist:"Stevie Wonder",why:"Funky, playful, irresistible groove.",moment:"The clavinet opening"}],
    "Anything goes!": [{title:"Baby Shark",artist:"Pinkfong",why:"Gerardo Parra made this the most famous silly walk-up ever.",moment:"'Baby shark, doo doo doo'"},{title:"Sweet Caroline",artist:"Neil Diamond",why:"'BA BA BA' — the whole park sings along.",moment:"'Sweet Caroline...'"},{title:"Happy",artist:"Pharrell Williams",why:"Pure contagious joy.",moment:"'Because I'm happy...'"}]
  },
  "Smooth & Swagger": {
    "Pop": [{title:"Levitating",artist:"Dua Lipa",why:"Floats to the plate with effortless smooth swagger.",moment:"Opening synth beat"},{title:"Blinding Lights",artist:"The Weeknd",why:"Smooth synthwave swagger — effortlessly stylish.",moment:"The opening synth"},{title:"Watermelon Sugar",artist:"Harry Styles",why:"Easy, smooth charm — naturally cool.",moment:"Opening guitar"}],
    "Hip-Hop": [{title:"God's Plan",artist:"Drake",why:"Pure smooth swagger — effortless cool at the plate.",moment:"Opening piano"},{title:"Passionfruit",artist:"Drake",why:"Effortlessly smooth — glides to the plate.",moment:"Opening tropical beat"},{title:"Essence",artist:"Wizkid ft. Tems",why:"Silky smooth Afrobeats swagger.",moment:"Opening melody"}],
    "Country": [{title:"Tennessee Whiskey",artist:"Chris Stapleton",why:"Soulful smooth — commands the room.",moment:"Opening piano and guitar"},{title:"Die a Happy Man",artist:"Thomas Rhett",why:"Smooth romantic swagger.",moment:"Opening guitar"},{title:"Meant to Be",artist:"Bebe Rexha & FGL",why:"Easy confident swagger.",moment:"Opening notes"}],
    "Rock": [{title:"Smooth",artist:"Santana ft. Rob Thomas",why:"That guitar IS smooth swagger.",moment:"The iconic opening guitar"},{title:"Black Magic Woman",artist:"Santana",why:"Hypnotic smooth swagger.",moment:"The smooth guitar opening"},{title:"Evil Ways",artist:"Santana",why:"Classic smooth swagger — effortlessly groovy.",moment:"Opening organ"}],
    "Latin": [{title:"Hawaii",artist:"Maluma",why:"Silky smooth Latin swagger.",moment:"Opening verse"},{title:"Ella y Yo",artist:"Aventura & Don Omar",why:"Smooth bachata vibes.",moment:"Opening guitar"},{title:"Callaita",artist:"Bad Bunny",why:"Smooth reggaeton swagger.",moment:"Opening beat"}],
    "Disney/Kids": [{title:"Prince Ali",artist:"Aladdin",why:"Grand, smooth swagger — makes an entrance fit for royalty.",moment:"'Make way for Prince Ali...'"},{title:"Almost There",artist:"Princess and the Frog",why:"Smooth jazz walk-up energy.",moment:"Opening jazz piano"},{title:"Be Our Guest",artist:"Beauty and the Beast",why:"Showstopping smooth.",moment:"'Be our guest, be our guest...'"}],
    "Classic Rock": [{title:"Feeling Good",artist:"Michael Buble",why:"Shohei Ohtani's actual walk-up — the smoothest entrance song ever.",moment:"'Birds flying high...'"},{title:"Superstition",artist:"Stevie Wonder",why:"Funky smooth swagger that never ages.",moment:"The clavinet opening"},{title:"Sir Duke",artist:"Stevie Wonder",why:"Pure smooth joy — effortless cool.",moment:"The opening horn section"}],
    "R&B": [{title:"Leave the Door Open",artist:"Silk Sonic",why:"Silky smooth — Bruno Mars and Anderson Paak swagger.",moment:"Opening piano"},{title:"Redbone",artist:"Childish Gambino",why:"Deeply smooth and funky.",moment:"'Stay woke...' opening"},{title:"Adorn",artist:"Miguel",why:"Smooth R&B confidence.",moment:"Opening beat"}],
    "Anything goes!": [{title:"Feeling Good",artist:"Michael Buble",why:"Shohei Ohtani's real walk-up — the smoothest song ever.",moment:"'Birds flying high...'"},{title:"Smooth",artist:"Santana ft. Rob Thomas",why:"The song literally defines smooth swagger.",moment:"That opening guitar riff"},{title:"Redbone",artist:"Childish Gambino",why:"Deeply cool and funky.",moment:"'Stay woke...' opening"}]
  }
};

const HYPE = ["is channeling legend energy today — watch out!","means business, and the pitcher knows it!","is here to RAKE — everyone on their feet!","has arrived, and the crowd goes wild!","is locked in and ready to make history!","brings the heat every single at-bat!","stepping to the plate with pure heart and hustle!"];
const colors = ["#fde047","#86efac","#60a5fa"];

function MusicButtons({ title, artist }) {
  const q = encodeURIComponent(title + " " + artist + " official");
  return (
    <div style={{ marginTop:"0.6rem" }}>
      <div style={{ fontSize:"0.62rem", color:"rgba(134,239,172,0.55)", marginBottom:"0.3rem", letterSpacing:"0.05em", textTransform:"uppercase" }}>🎵 Find & play:</div>
      <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap" }}>
        <a href={"https://www.youtube.com/results?search_query=" + q} target="_blank" rel="noreferrer" style={{ padding:"0.3rem 0.65rem", borderRadius:999, fontSize:"0.7rem", fontWeight:700, background:"rgba(255,0,0,0.15)", border:"1.5px solid rgba(255,80,80,0.5)", color:"#ff6b6b", textDecoration:"none" }}>▶ YouTube</a>
        <a href={"spotify:search:" + encodeURIComponent(title + " " + artist)} target="_blank" rel="noreferrer" style={{ padding:"0.3rem 0.65rem", borderRadius:999, fontSize:"0.7rem", fontWeight:700, background:"rgba(30,215,96,0.15)", border:"1.5px solid rgba(30,215,96,0.45)", color:"#1ed760", textDecoration:"none" }}>▶ Spotify</a>
        <a href={"https://music.apple.com/search?term=" + encodeURIComponent(title + " " + artist)} target="_blank" rel="noreferrer" style={{ padding:"0.3rem 0.65rem", borderRadius:999, fontSize:"0.7rem", fontWeight:700, background:"rgba(252,60,68,0.12)", border:"1.5px solid rgba(252,60,68,0.4)", color:"#fc3c44", textDecoration:"none" }}>▶ Apple</a>
      </div>
    </div>
  );
}

function SongCard({ song, index }) {
  return (
    <div style={{ background:"rgba(0,0,0,0.48)", border:"1px solid rgba(134,239,172,0.18)", borderLeft:`3px solid ${colors[index]}`, borderRadius:8, padding:"0.9rem", marginBottom:"0.65rem", display:"flex", gap:"0.65rem" }}>
      <div style={{ width:26, height:26, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.75rem", fontWeight:900, border:"1.5px solid", borderColor:colors[index], color:colors[index] }}>{index+1}</div>
      <div style={{ flex:1 }}>
        <div style={{ color:"white", fontWeight:800, fontSize:"0.88rem", marginBottom:"0.1rem" }}>{song.title}</div>
        <div style={{ color:"#86efac", fontSize:"0.76rem", marginBottom:"0.4rem" }}>by {song.artist}</div>
        <div style={{ color:"#d1fae5", fontSize:"0.78rem", lineHeight:1.5, marginBottom:"0.4rem" }}>{song.why}</div>
        <div style={{ background:"rgba(74,222,128,0.07)", border:"1px solid rgba(74,222,128,0.2)", borderRadius:4, padding:"0.28rem 0.5rem", display:"inline-block", fontSize:"0.7rem" }}>
          <span style={{ color:"#4ade80", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.07em" }}>Start at: </span>
          <span style={{ color:"#d1fae5", fontStyle:"italic" }}>{song.moment}</span>
        </div>
        <MusicButtons title={song.title} artist={song.artist} />
      </div>
    </div>
  );
}

function PlaylistCard({ playlist }) {
  return (
    <div style={{ background:"rgba(0,0,0,0.4)", border:"1px solid rgba(134,239,172,0.2)", borderRadius:10, padding:"1rem", marginBottom:"0.75rem" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"0.5rem" }}>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:"1rem", marginBottom:"0.2rem" }}>{playlist.emoji}</div>
          <div style={{ color:"white", fontWeight:800, fontSize:"0.88rem", marginBottom:"0.2rem" }}>{playlist.name}</div>
          <div style={{ color:"#86efac", fontSize:"0.72rem", marginBottom:"0.4rem" }}>{playlist.songs} songs · {playlist.saves} saves {playlist.clean && <span style={{ background:"rgba(74,222,128,0.15)", border:"1px solid rgba(74,222,128,0.3)", color:"#4ade80", borderRadius:999, padding:"0.1rem 0.45rem", fontSize:"0.65rem", fontWeight:700, marginLeft:"0.3rem" }}>✓ CLEAN</span>}{playlist.conference && <span style={{ background:"rgba(253,224,71,0.1)", border:"1px solid rgba(253,224,71,0.3)", color:"#fde047", borderRadius:999, padding:"0.1rem 0.45rem", fontSize:"0.65rem", fontWeight:700, marginLeft:"0.3rem" }}>{playlist.conference}</span>}</div>
          <div style={{ color:"#d1fae5", fontSize:"0.78rem", lineHeight:1.4 }}>{playlist.description}</div>
        </div>
      </div>
      <a href={playlist.url} target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.4rem", width:"100%", padding:"0.6rem", borderRadius:8, background:"rgba(30,215,96,0.15)", border:"1.5px solid rgba(30,215,96,0.4)", color:"#1ed760", textDecoration:"none", fontWeight:800, fontSize:"0.8rem", marginTop:"0.5rem", letterSpacing:"0.04em" }}>
        ▶ Open in Spotify
      </a>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("custom");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pos, setPos] = useState("");
  const [vibe, setVibe] = useState("");
  const [genre, setGenre] = useState("");
  const [selMLB, setSelMLB] = useState(null);
  const [mlbName, setMlbName] = useState("");
  const [teamFilter, setTeamFilter] = useState("");
  const [playlistFilter, setPlaylistFilter] = useState("all");
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");

  const filtered = teamFilter ? MLB_PLAYERS.filter(p => p.team === teamFilter || p.team === "Legend") : MLB_PLAYERS;
  const filteredPlaylists = playlistFilter === "all" ? PLAYLISTS : playlistFilter === "clean" ? PLAYLISTS.filter(p => p.clean) : PLAYLISTS.filter(p => p.category === playlistFilter);

  const inputStyle = { width:"100%", background:"#052e16", border:"1.5px solid #22c55e", color:"white", borderRadius:6, padding:"0.6rem 0.75rem", fontSize:"0.86rem", outline:"none", fontFamily:"inherit", boxSizing:"border-box" };
  const lblStyle = { display:"block", fontSize:"0.63rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#86efac", marginBottom:"0.4rem" };
  const panelStyle = { background:"rgba(0,0,0,0.4)", border:"1px solid rgba(134,239,172,0.2)", borderRadius:12, padding:"1.25rem" };
  const hypeBox = { background:"rgba(253,224,71,0.1)", border:"1.5px solid rgba(253,224,71,0.32)", borderRadius:10, padding:"0.9rem 1.1rem", textAlign:"center", marginBottom:"1rem" };

  const doCustom = () => {
    if (!name) { setErr("Enter your player's name!"); return; }
    if (!vibe) { setErr("Pick a walk-up vibe!"); return; }
    if (!genre) { setErr("Pick a genre!"); return; }
    setErr("");
    const songs = (SONGS[vibe]?.[genre]) || SONGS["Hype & Intimidating"]["Anything goes!"];
    const hype = name + " " + HYPE[Math.floor(Math.random() * HYPE.length)];
    setResult({ type:"custom", songs, hype });
  };

  const doMLB = () => {
    if (!selMLB) { setErr("Pick an MLB player first!"); return; }
    setErr("");
    setResult({ type:"mlb", player:selMLB, displayName: mlbName || "Your player" });
  };

  const reset = () => { setResult(null); setErr(""); setSelMLB(null); };
  const switchTab = (t) => { setTab(t); setResult(null); setErr(""); };

  const tabs = [["custom","🎵 Custom"],["mlb","⭐ MLB Stars"],["playlists","📋 Playlists"]];

  return (
    <div style={{ fontFamily:"Georgia, serif", minHeight:"100vh", background:"radial-gradient(ellipse at top, #14532d 0%, #052e16 50%, #020c05 100%)", padding:"1.5rem 1.25rem", color:"white" }}>
      <div style={{ textAlign:"center", marginBottom:"0.35rem", fontSize:"2rem" }}>⚾</div>
      <h1 style={{ color:"#fde047", fontSize:"1.7rem", fontWeight:900, textAlign:"center", margin:"0 0 0.2rem", lineHeight:1.1, textShadow:"2px 2px 0 rgba(0,0,0,0.4)" }}>Walk-Up Music Picker</h1>
      <p style={{ color:"#86efac", fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", textAlign:"center", margin:"0 0 1.4rem", opacity:0.8 }}>🎵 For Baseball's Biggest Stars 🎵</p>

      {/* Tabs */}
      <div style={{ display:"flex", gap:"0.4rem", marginBottom:"1.25rem" }}>
        {tabs.map(([t, label]) => (
          <button key={t} onClick={() => switchTab(t)} style={{ flex:1, padding:"0.55rem 0.25rem", borderRadius:8, fontSize:"0.72rem", fontWeight:800, textTransform:"uppercase", letterSpacing:"0.04em", border:"1.5px solid", borderColor: tab===t ? "#fde047" : "rgba(134,239,172,0.3)", background: tab===t ? "rgba(253,224,71,0.12)" : "rgba(0,0,0,0.3)", color: tab===t ? "#fde047" : "rgba(134,239,172,0.6)", cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
        ))}
      </div>

      {/* CUSTOM TAB */}
      {tab==="custom" && !result && (
        <div style={panelStyle}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.7rem", marginBottom:"1rem" }}>
            <div><label style={lblStyle}>Player Name *</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Emma" style={inputStyle}/></div>
            <div><label style={lblStyle}>Age</label><input value={age} onChange={e=>setAge(e.target.value)} placeholder="e.g. 10" style={inputStyle}/></div>
          </div>
          <div style={{ marginBottom:"1rem" }}>
            <label style={lblStyle}>Position</label>
            <select value={pos} onChange={e=>setPos(e.target.value)} style={inputStyle}>
              <option value="">Select position...</option>
              {POSITIONS.map(p=><option key={p}>{p}</option>)}
            </select>
          </div>
          <div style={{ marginBottom:"1rem" }}>
            <label style={lblStyle}>Walk-Up Vibe *</label>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.35rem" }}>
              {VIBES.map(v=>(
                <button key={v} onClick={()=>setVibe(v)} style={{ padding:"0.48rem", borderRadius:6, fontSize:"0.73rem", fontWeight:700, border:"1.5px solid", borderColor: vibe===v ? "#fde047" : "rgba(134,239,172,0.25)", background: vibe===v ? "rgba(253,224,71,0.14)" : "rgba(0,0,0,0.3)", color: vibe===v ? "#fde047" : "rgba(134,239,172,0.75)", cursor:"pointer", fontFamily:"inherit", textAlign:"center" }}>{v}</button>
              ))}
            </div>
          </div>
          <div style={{ marginBottom:"1rem" }}>
            <label style={lblStyle}>Genre *</label>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
              {GENRES.map(g=>(
                <button key={g} onClick={()=>setGenre(g)} style={{ padding:"0.38rem 0.7rem", borderRadius:999, fontSize:"0.72rem", fontWeight:700, border:"1.5px solid", borderColor: genre===g ? "#4ade80" : "rgba(74,222,128,0.28)", background: genre===g ? "rgba(74,222,128,0.17)" : "transparent", color: genre===g ? "#4ade80" : "rgba(134,239,172,0.7)", cursor:"pointer", fontFamily:"inherit" }}>{g}</button>
              ))}
            </div>
          </div>
          {err && <div style={{ background:"rgba(239,68,68,0.14)", border:"1px solid rgba(239,68,68,0.35)", color:"#fca5a5", borderRadius:6, padding:"0.55rem 0.85rem", fontSize:"0.8rem", textAlign:"center", marginBottom:"0.75rem" }}>{err}</div>}
          <button onClick={doCustom} style={{ width:"100%", padding:"0.85rem", borderRadius:8, fontWeight:900, fontSize:"0.92rem", letterSpacing:"0.06em", textTransform:"uppercase", border:"none", cursor:"pointer", background:"linear-gradient(135deg, #fde047, #f59e0b)", color:"#052e16", fontFamily:"inherit" }}>⚾ Find Walk-Up Songs!</button>
        </div>
      )}

      {/* MLB TAB */}
      {tab==="mlb" && !result && (
        <div>
          <div style={{ ...panelStyle, marginBottom:"1rem" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.7rem" }}>
              <div><label style={lblStyle}>Your Player's Name</label><input value={mlbName} onChange={e=>setMlbName(e.target.value)} placeholder="e.g. Sofia" style={inputStyle}/></div>
              <div>
                <label style={lblStyle}>Filter by Team</label>
                <select value={teamFilter} onChange={e=>{ setTeamFilter(e.target.value); setSelMLB(null); }} style={inputStyle}>
                  <option value="">All 30 Teams</option>
                  {ALL_TEAMS.map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.5rem", maxHeight:300, overflowY:"auto", marginBottom:"0.75rem" }}>
            {filtered.map(p=>(
              <div key={p.name} onClick={()=>setSelMLB(p)} style={{ background: selMLB?.name===p.name ? "rgba(253,224,71,0.1)" : "rgba(0,0,0,0.35)", border:"1.5px solid", borderColor: selMLB?.name===p.name ? "#fde047" : "rgba(134,239,172,0.2)", borderRadius:8, padding:"0.65rem 0.75rem", cursor:"pointer" }}>
                <div style={{ fontSize:"0.82rem", fontWeight:800, color:"white", marginBottom:"0.15rem" }}>{p.name}</div>
                <div style={{ fontSize:"0.68rem", color:"#86efac", marginBottom:"0.25rem", opacity:0.85 }}>{p.team}</div>
                <div style={{ fontSize:"0.7rem", color:"#fde047", fontStyle:"italic", lineHeight:1.3 }}>"{p.song}"</div>
              </div>
            ))}
          </div>
          {err && <div style={{ background:"rgba(239,68,68,0.14)", border:"1px solid rgba(239,68,68,0.35)", color:"#fca5a5", borderRadius:6, padding:"0.55rem 0.85rem", fontSize:"0.8rem", textAlign:"center", marginBottom:"0.75rem" }}>{err}</div>}
          <button onClick={doMLB} style={{ width:"100%", padding:"0.85rem", borderRadius:8, fontWeight:900, fontSize:"0.92rem", letterSpacing:"0.06em", textTransform:"uppercase", border:"none", cursor:"pointer", background:"linear-gradient(135deg, #fde047, #f59e0b)", color:"#052e16", fontFamily:"inherit" }}>⭐ Use This Player's Song!</button>
        </div>
      )}

      {/* PLAYLISTS TAB */}
      {tab==="playlists" && (
        <div>
          <div style={{ marginBottom:"1rem" }}>
            <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap" }}>
              {[["all","🎵 All"],["clean","✅ Clean Only"],["popular","🔥 Popular"],["college","🎓 College"]].map(([f, label]) => (
                <button key={f} onClick={()=>setPlaylistFilter(f)} style={{ padding:"0.4rem 0.75rem", borderRadius:999, fontSize:"0.72rem", fontWeight:700, border:"1.5px solid", borderColor: playlistFilter===f ? "#fde047" : "rgba(134,239,172,0.28)", background: playlistFilter===f ? "rgba(253,224,71,0.14)" : "transparent", color: playlistFilter===f ? "#fde047" : "rgba(134,239,172,0.7)", cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
              ))}
            </div>
          </div>
          <div style={{ fontSize:"0.72rem", color:"rgba(134,239,172,0.55)", marginBottom:"0.75rem" }}>Tap a playlist to open it directly in Spotify! 🎵</div>
          {filteredPlaylists.map((pl, i) => <PlaylistCard key={i} playlist={pl} />)}
        </div>
      )}

      {/* RESULTS - CUSTOM */}
      {result?.type==="custom" && (
        <div>
          <div style={hypeBox}>
            <div style={{ fontSize:"0.6rem", letterSpacing:"0.18em", color:"#fbbf24", textTransform:"uppercase", marginBottom:"0.28rem" }}>🎤 Now Batting...</div>
            <div style={{ fontSize:"0.92rem", fontWeight:700, color:"#fde047", fontStyle:"italic" }}>"{result.hype}"</div>
          </div>
          {result.songs.map((s,i) => <SongCard key={i} song={s} index={i} />)}
          <button onClick={reset} style={{ width:"100%", padding:"0.75rem", borderRadius:8, fontWeight:800, fontSize:"0.85rem", letterSpacing:"0.05em", textTransform:"uppercase", border:"1.5px solid rgba(134,239,172,0.35)", background:"transparent", color:"#86efac", cursor:"pointer", fontFamily:"inherit" }}>🔄 Pick for Another Player</button>
        </div>
      )}

      {/* RESULTS - MLB */}
      {result?.type==="mlb" && (
        <div>
          <div style={{ background:"rgba(253,224,71,0.09)", border:"2px solid rgba(253,224,71,0.38)", borderRadius:10, padding:"1.1rem", marginBottom:"0.75rem" }}>
            <div style={{ fontSize:"1rem", fontWeight:900, color:"#fde047", marginBottom:"0.12rem" }}>⭐ {result.player.name}</div>
            <div style={{ fontSize:"0.75rem", color:"#86efac", marginBottom:"0.55rem" }}>{result.player.team}</div>
            <div style={{ fontSize:"0.88rem", color:"white", fontWeight:700, marginBottom:"0.08rem" }}>"{result.player.song}"</div>
            <div style={{ fontSize:"0.76rem", color:"#86efac", marginBottom:"0.55rem" }}>by {result.player.artist}</div>
            <div style={{ fontSize:"0.8rem", color:"#d1fae5", lineHeight:1.5, marginBottom:"0.5rem" }}>{result.player.vibe}</div>
            <MusicButtons title={result.player.song} artist={result.player.artist} />
          </div>
          <div style={hypeBox}>
            <div style={{ fontSize:"0.6rem", letterSpacing:"0.18em", color:"#fbbf24", textTransform:"uppercase", marginBottom:"0.28rem" }}>🎤 Walk up like a pro!</div>
            <div style={{ fontSize:"0.92rem", fontWeight:700, color:"#fde047", fontStyle:"italic" }}>"{result.displayName} is channeling {result.player.name} energy today!"</div>
          </div>
          <button onClick={reset} style={{ width:"100%", padding:"0.75rem", borderRadius:8, fontWeight:800, fontSize:"0.85rem", letterSpacing:"0.05em", textTransform:"uppercase", border:"1.5px solid rgba(134,239,172,0.35)", background:"transparent", color:"#86efac", cursor:"pointer", fontFamily:"inherit" }}>🔄 Pick a Different Player</button>
        </div>
      )}

      <p style={{ textAlign:"center", color:"rgba(134,239,172,0.28)", fontSize:"0.65rem", marginTop:"1.2rem", letterSpacing:"0.04em" }}>Made with love for baseball families · 2026</p>
    </div>
  );
}
