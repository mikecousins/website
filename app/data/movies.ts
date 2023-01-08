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
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
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
    watched: true,
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
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
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
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
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
    name: 'Bicycle Thieves',
    imdb: '0040522',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Like Stars On Earth',
    imdb: '0986264',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: '1917',
    imdb: '8579674',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Downfall',
    imdb: '0363163',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'For A Few Dollars More',
    imdb: '0059578',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Dangal',
    imdb: '5074352',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Batman Begins',
    imdb: '0372784',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Kid',
    imdb: '0012349',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Some Like It Hot',
    imdb: '0053291',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Father',
    imdb: '10272386',
    watched: false,
    resolution: '4k',
    source: 'Web',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'All About Eve',
    imdb: '0042192',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Green Book',
    imdb: '6966692',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Wolf Of Wall Street',
    imdb: '0993846',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Judgment At Nuremberg',
    imdb: '0055031',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Casino',
    imdb: '0112641',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Ran',
    imdb: '0089881',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: "Pan's Labyrinth",
    imdb: '0457430',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Unforgiven',
    imdb: '0105695',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'There Will Be Blood',
    imdb: '0469494',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Truman Show',
    imdb: '0120382',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Sixth Sense',
    imdb: '0167404',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'A Beautiful Mind',
    imdb: '0268978',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Shutter Island',
    imdb: '1130884',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Yojimbo',
    imdb: '0055630',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Treasure Of The Sierra Madre',
    imdb: '0040897',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Monty Python And The Holy Grail',
    imdb: '0071853',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Jurassic Park',
    imdb: '0107290',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Spider-Man: No Way Home',
    imdb: '10872600',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Great Escape',
    imdb: '0057115',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Rashomon',
    imdb: '0042876',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'No Country For Old Men',
    imdb: '0477348',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Kill Bill: Vol. 1',
    imdb: '0266697',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Thing',
    imdb: '0084787',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Finding Nemo',
    imdb: '0266543',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Elephant Man',
    imdb: '0080678',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Chinatown',
    imdb: '0071315',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Raging Bull',
    imdb: '0081398',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'V For Vendetta',
    imdb: '0434409',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Gone With The Wind',
    imdb: '0031381',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Inside Out',
    imdb: '2096673',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Lock, Stock And Two Smoking Barrels',
    imdb: '0120735',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Dial M For Murder',
    imdb: '0046912',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Secret In Their Eyes',
    imdb: '1305806',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: "Howl's Moving Castle",
    imdb: '0347149',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Three Billboards Outside Ebbing, Missouri',
    imdb: '5027774',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Bridge On The River Kwai',
    imdb: '0050212',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Trainspotting',
    imdb: '0117951',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Prisoners',
    imdb: '1392214',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Warrior',
    imdb: '1291584',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Fargo',
    imdb: '0116282',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Gran Torino',
    imdb: '1205489',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'My Neighbor Totoro',
    imdb: '0096283',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Catch Me If You Can',
    imdb: '0264464',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Million Dollar Baby',
    imdb: '0405159',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Bacheha-Ye Aseman',
    imdb: '0118849',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Blade Runner',
    imdb: '0083658',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Gold Rush',
    imdb: '0015864',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Before Sunrise',
    imdb: '0112471',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'On The Waterfront',
    imdb: '0047296',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: '12 Years A Slave',
    imdb: '2024544',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Harry Potter And The Deathly Hallows: Part 2',
    imdb: '1201607',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Klaus',
    imdb: '4729430',
    watched: false,
    resolution: '4k',
    source: 'Web',
    remux: false,
    dolbyVision: true,
  },
  {
    name: 'Ben-Hur',
    imdb: '0052618',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Gone Girl',
    imdb: '2267998',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Wild Strawberries',
    imdb: '0050986',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Third Man',
    imdb: '0041959',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The General',
    imdb: '0017925',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Grand Budapest Hotel',
    imdb: '2278388',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'In The Name Of The Father',
    imdb: '0107207',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Deer Hunter',
    imdb: '0077416',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Barry Lyndon',
    imdb: '0072684',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Wages Of Fear',
    imdb: '0046268',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Hacksaw Ridge',
    imdb: '2119532',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Sherlock Jr.',
    imdb: '0015324',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Memories Of Murder',
    imdb: '0353969',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Mr. Smith Goes To Washington',
    imdb: '0031679',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Wild Tales',
    imdb: '3011894',
    watched: true,
  },
  {
    name: 'Mad Max: Fury Road',
    imdb: '1392190',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Seventh Seal',
    imdb: '0050976',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Mary And Max',
    imdb: '0978762',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Room',
    imdb: '3170832',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'How To Train Your Dragon',
    imdb: '0892769',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Monsters, Inc.',
    imdb: '0198781',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Jaws',
    imdb: '0073195',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Big Lebowski',
    imdb: '0118715',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Dead Poets Society',
    imdb: '0097165',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Tôkyô Monogatari',
    imdb: '0046438',
    watched: false,
  },
  {
    name: 'The Passion Of Joan Of Arc',
    imdb: '0019254',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Hotel Rwanda',
    imdb: '0395169',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Ford v Ferrari',
    imdb: '1950186',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Rocky',
    imdb: '0075148',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Platoon',
    imdb: '0091763',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Spotlight',
    imdb: '1895587',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Terminator',
    imdb: '0088247',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Ratatouille',
    imdb: '0382932',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Stand By Me',
    imdb: '0092005',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Logan',
    imdb: '3315342',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Rush',
    imdb: '1979320',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Network',
    imdb: '0074958',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Pather Panchali',
    imdb: '0048473',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'Into The Wild',
    imdb: '0758758',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'The Wizard Of Oz',
    imdb: '0032138',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Before Sunset',
    imdb: '0381681',
    watched: false,
  },
  {
    name: 'Groundhog Day',
    imdb: '0107048',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Best Years Of Our Lives',
    imdb: '0036868',
    watched: false,
  },
  {
    name: 'The Exorcist',
    imdb: '0070047',
    watched: false,
  },
  {
    name: 'To Be Or Not To Be',
    imdb: '0035446',
    watched: false,
  },
  {
    name: 'The Incredibles',
    imdb: '0317705',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Battle Of Algiers',
    imdb: '0058946',
    watched: false,
  },
  {
    name: 'La Haine',
    imdb: '0113247',
    watched: false,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Jai Bhim',
    imdb: '15097216',
    watched: false,
  },
  {
    name: "Hachi: A Dog's Tale",
    imdb: '1028532',
    watched: false,
  },
  {
    name: 'My Father And My Son',
    imdb: '0476735',
    watched: false,
    resolution: '1080p',
    source: 'Web',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Pirates Of The Caribbean: The Curse Of The Black Pearl',
    imdb: '0325980',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'The Grapes Of Wrath',
    imdb: '0032551',
    watched: false,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Amores Perros',
    imdb: '0245712',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Rebecca',
    imdb: '0032976',
    watched: false,
  },
  {
    name: 'Cool Hand Luke',
    imdb: '0061512',
    watched: false,
    resolution: '720p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'The Handmaiden',
    imdb: '4016934',
    watched: false,
  },
  {
    name: 'The 400 Blows',
    imdb: '0053198',
    watched: false,
  },
  {
    name: 'The Sound Of Music',
    imdb: '0059742',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: true,
    dolbyVision: false,
  },
  {
    name: 'It Happened One Night',
    imdb: '0025316',
    watched: false,
  },
  {
    name: 'Persona',
    imdb: '0060827',
    watched: false,
  },
  {
    name: 'Life Of Brian',
    imdb: '0079470',
    watched: true,
    resolution: '1080p',
    source: 'BD',
    remux: false,
    dolbyVision: false,
  },
  {
    name: 'Dersu Uzala',
    imdb: '0071411',
    watched: false,
  },
  {
    name: 'The Iron Giant',
    imdb: '0129167',
    watched: false,
  },
  {
    name: 'The Help',
    imdb: '1454029',
    watched: false,
  },
  {
    name: 'Aladdin',
    imdb: '0103639',
    watched: true,
    resolution: '4k',
    source: 'UHD BD',
    remux: true,
    dolbyVision: true,
  },
  {
    name: 'Gandhi',
    imdb: '0083987',
    watched: false,
  },
  {
    name: 'Du Rififi Chez Les Hommes',
    imdb: '0048021',
    watched: false,
  },
];
