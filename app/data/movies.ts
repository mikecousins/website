export type Movie = {
  name: string;
  imdb: string;
  watched: boolean;
  resolution?: '4k' | '1080p' | '720p';
  source?: 'UHD BD' | 'BD' | 'Web';
  remux?: boolean;
  dolbyVision?: boolean;
};

export const movies: Movie[] = [
  {
    name: 'The Shawshank Redemption',
    imdb: '0111161',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Godfather',
    imdb: '0068646',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Dark Knight',
    imdb: '0468569',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Godfather Part II',
    imdb: '0071562',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: '12 Angry Men',
    imdb: '0050083',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: "Schindler's List",
    imdb: '0108052',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    imdb: '0167260',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Pulp Fiction',
    imdb: '0110912',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    imdb: '0120737',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Good, The Bad And The Ugly',
    imdb: '0060196',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Forrest Gump',
    imdb: '0109830',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Fight Club',
    imdb: '0137523',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Lord Of The Rings: The Two Towers',
    imdb: '0167261',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Inception',
    imdb: '1375666',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Star Wars: Episode V - The Empire Strikes Back',
    imdb: '0080684',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Matrix',
    imdb: '0133093',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Goodfellas',
    imdb: '0099685',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: "One Flew Over The Cuckoo's Nest",
    imdb: '0073486',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Seven',
    imdb: '0114369',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Seven Samurai',
    imdb: '0047478',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: "It's A Wonderful Life",
    imdb: '0038650',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Silence Of The Lambs',
    imdb: '0102926',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'City Of God',
    imdb: '0317248',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Saving Private Ryan',
    imdb: '0120815',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Life Is Beautiful',
    imdb: '0118799',
    watched: true,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Interstellar',
    imdb: '0816692',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Green Mile',
    imdb: '0120689',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Star Wars',
    imdb: '0076759',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Terminator 2: Judgement Day',
    imdb: '0103064',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Back To The Future',
    imdb: '0088763',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Spirited Away',
    imdb: '0245429',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Psycho',
    imdb: '0054215',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Pianist',
    imdb: '0253474',
    watched: true,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Parasite',
    imdb: '6751668',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Léon: The Professional',
    imdb: '0110413',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Lion King',
    imdb: '0110357',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Gladiator',
    imdb: '0172495',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'American History X',
    imdb: '0120586',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Departed',
    imdb: '0407887',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Usual Suspects',
    imdb: '0114814',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Prestige',
    imdb: '0482571',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Whiplash',
    imdb: '2582802',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Casablanca',
    imdb: '0034583',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Seppuku',
    imdb: '0056058',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Grave Of The Fireflies',
    imdb: '0095327',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Intouchables',
    imdb: '1675434',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Modern Times',
    imdb: '0027977',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Once Upon A Time In The West',
    imdb: '0064116',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Rear Window',
    imdb: '0047396',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Cinema Paradiso',
    imdb: '0095765',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Alien',
    imdb: '0078748',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'City Lights',
    imdb: '0021749',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Apocalypse Now',
    imdb: '0078788',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Memento',
    imdb: '0209144',
    watched: true,
  },
  {
    name: 'Raiders Of The Lost Ark',
    imdb: '0082971',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Django Unchained',
    imdb: '1853728',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'WALL-E',
    imdb: '0910970',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Lives Of Others',
    imdb: '0405094',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Sunset Boulevard',
    imdb: '0043014',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Paths Of Glory',
    imdb: '0050825',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Shining',
    imdb: '0081505',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Great Dictator',
    imdb: '0032553',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Avengers: Infinity War',
    imdb: '4154756',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Witness For The Prosecution',
    imdb: '0051201',
    watched: true,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Aliens',
    imdb: '0090605',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Spider-Man: Into The Spider-Verse',
    imdb: '4633694',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'American Beauty',
    imdb: '0169547',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    imdb: '0057012',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Dark Knight Rises',
    imdb: '1345836',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Oldboy',
    imdb: '0364569',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Amadeus',
    imdb: '0086879',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Inglourious Basterds',
    imdb: '0361748',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Coco',
    imdb: '2380307',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Joker',
    imdb: '7286456',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Toy Story',
    imdb: '0114709',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Braveheart',
    imdb: '0112573',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Das Boot',
    imdb: '0082096',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Avengers: Endgame',
    imdb: '4154796',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Princess Mononoke',
    imdb: '0119698',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Once Upon A Time In America',
    imdb: '0087843',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Good Will Hunting',
    imdb: '0119217',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Your Name.',
    imdb: '5311514',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Requiem For A Dream',
    imdb: '0180093',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: "Singin' In The Rain",
    imdb: '0045152',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: '3 Idiots',
    imdb: '1187043',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Toy Story 3',
    imdb: '0435761',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'High And Low',
    imdb: '0057565',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Stars Wars: Episode VI - Return Of The Jedi',
    imdb: '0086190',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Capernaum',
    imdb: '8267604',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Top Gun: Maverick',
    imdb: '1745960',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Eternal Sunshine Of The Spotless Mind',
    imdb: '0338013',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: '2001: A Space Odyssey',
    imdb: '0062622',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Reservoir Dogs',
    imdb: '0105236',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Hunt',
    imdb: '2106476',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Come And See',
    imdb: '0091251',
    watched: false,
  },
  {
    name: 'Citizen Kane',
    imdb: '0033467',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'M',
    imdb: '0022100',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Lawrence Of Arabia',
    imdb: '0056172',
    watched: false,
  },
  {
    name: 'North By Northwest',
    imdb: '0053125',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Vertigo',
    imdb: '0052357',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Amélie',
    imdb: '0211915',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Apartment',
    imdb: '0053604',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'A Clockwork Orange',
    imdb: '0066921',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Ikiru',
    imdb: '0044741',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Double Indemnity',
    imdb: '0036775',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Full Metal Jacket',
    imdb: '0093058',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Hamilton',
    imdb: '8503618',
    watched: false,
    resolution: '4k',
    source: 'Web',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Scarface',
    imdb: '0086250',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'To Kill A Mockingbird',
    imdb: '0056592',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Sting',
    imdb: '0070735',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Incendies',
    imdb: '1255953',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Heat',
    imdb: '0113277',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Up',
    imdb: '1049413',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Taxi Driver',
    imdb: '0075314',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Jodaeiye Nader Az Simin',
    imdb: '1832382',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Metropolis',
    imdb: '0017136',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'L.A. Confidential',
    imdb: '0119488',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Die Hard',
    imdb: '0095016',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Snatch',
    imdb: '0208092',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Indiana Jones And The Last Crusade',
    imdb: '0097576',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Shawshank Redemption',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Godfather',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0068646',
  },
  {
    name: 'The Dark Knight',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0468569',
  },
  {
    name: 'The Godfather Part II',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: '12 Angry Men',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: "Schindler's List",
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Return Of The King',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'Pulp Fiction',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Lord Of The Rings: The Fellowship Of The Ring',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
  {
    name: 'The Good, The Bad And The Ugly',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    imdb: '0111161',
  },
];
