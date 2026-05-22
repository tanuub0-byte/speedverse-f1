require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Team = require('../models/Team');
const Driver = require('../models/Driver');
const Car = require('../models/Car');
const Race = require('../models/Race');
const User = require('../models/User');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/speedverse_f1';

const teams = [
  {
    name: 'Red Bull Racing',
    shortName: 'Red Bull',
    fullName: 'Oracle Red Bull Racing',
    nationality: 'Austrian',
    base: 'Milton Keynes, UK',
    teamPrincipal: 'Christian Horner',
    technicalDirector: 'Pierre Waché',
    founded: 2005,
    championships: 6,
    wins: 119,
    podiums: 264,
    poles: 101,
    color: '#3671C6',
    secondaryColor: '#CC1E4A',
    description: 'The most dominant team in recent F1 history, Red Bull Racing has won multiple consecutive championships.',
    drivers: ['Max Verstappen', 'Sergio Perez'],
    engine: 'Honda RBPTH002',
    chassis: 'RB20',
    points2024: 860,
    position2024: 1
  },
  {
    name: 'Ferrari',
    shortName: 'Ferrari',
    fullName: 'Scuderia Ferrari HP',
    nationality: 'Italian',
    base: 'Maranello, Italy',
    teamPrincipal: 'Frédéric Vasseur',
    technicalDirector: 'Loic Serra',
    founded: 1950,
    championships: 16,
    wins: 243,
    podiums: 808,
    poles: 245,
    color: '#E8002D',
    secondaryColor: '#FFFFFF',
    description: 'The most iconic team in Formula 1, Ferrari has been competing since the very first season.',
    drivers: ['Charles Leclerc', 'Carlos Sainz'],
    engine: '066/12',
    chassis: 'SF-24',
    points2024: 652,
    position2024: 3
  },
  {
    name: 'Mercedes',
    shortName: 'Mercedes',
    fullName: 'Mercedes-AMG Petronas F1 Team',
    nationality: 'German',
    base: 'Brackley, UK',
    teamPrincipal: 'Toto Wolff',
    technicalDirector: 'James Allison',
    founded: 2010,
    championships: 8,
    wins: 125,
    podiums: 289,
    poles: 131,
    color: '#27F4D2',
    secondaryColor: '#000000',
    description: 'The dominant force of the hybrid era, Mercedes won 8 consecutive constructors championships.',
    drivers: ['Lewis Hamilton', 'George Russell'],
    engine: 'M15 E Performance',
    chassis: 'W15',
    points2024: 468,
    position2024: 4
  },
  {
    name: 'McLaren',
    shortName: 'McLaren',
    fullName: 'McLaren Formula 1 Team',
    nationality: 'British',
    base: 'Woking, UK',
    teamPrincipal: 'Andrea Stella',
    technicalDirector: 'Peter Prodromou',
    founded: 1966,
    championships: 8,
    wins: 183,
    podiums: 507,
    poles: 156,
    color: '#FF8000',
    secondaryColor: '#000000',
    description: 'One of the most successful teams in F1 history, McLaren is back at the front of the grid.',
    drivers: ['Lando Norris', 'Oscar Piastri'],
    engine: 'Mercedes M15 E Performance',
    chassis: 'MCL38',
    points2024: 666,
    position2024: 2
  },
  {
    name: 'Aston Martin',
    shortName: 'Aston Martin',
    fullName: 'Aston Martin Aramco F1 Team',
    nationality: 'British',
    base: 'Silverstone, UK',
    teamPrincipal: 'Mike Krack',
    technicalDirector: 'Dan Fallows',
    founded: 2021,
    championships: 0,
    wins: 0,
    podiums: 11,
    poles: 1,
    color: '#229971',
    secondaryColor: '#CEDC00',
    description: 'The rebranded Force India/Racing Point team, now backed by Lawrence Stroll.',
    drivers: ['Fernando Alonso', 'Lance Stroll'],
    engine: 'Mercedes M15 E Performance',
    chassis: 'AMR24',
    points2024: 94,
    position2024: 5
  },
  {
    name: 'Alpine',
    shortName: 'Alpine',
    fullName: 'BWT Alpine F1 Team',
    nationality: 'French',
    base: 'Enstone, UK',
    teamPrincipal: 'Oliver Oakes',
    technicalDirector: 'David Sanchez',
    founded: 2021,
    championships: 2,
    wins: 21,
    podiums: 312,
    poles: 20,
    color: '#FF87BC',
    secondaryColor: '#0090FF',
    description: 'The rebranded Renault works team, competing under the Alpine brand.',
    drivers: ['Pierre Gasly', 'Esteban Ocon'],
    engine: 'Renault E-Tech RE24',
    chassis: 'A524',
    points2024: 65,
    position2024: 6
  },
  {
    name: 'Williams',
    shortName: 'Williams',
    fullName: 'Williams Racing',
    nationality: 'British',
    base: 'Grove, UK',
    teamPrincipal: 'James Vowles',
    technicalDirector: 'Pat Fry',
    founded: 1977,
    championships: 7,
    wins: 114,
    podiums: 313,
    poles: 128,
    color: '#64C4FF',
    secondaryColor: '#FFFFFF',
    description: 'One of the most successful teams in F1 history, Williams is working its way back to the front.',
    drivers: ['Alexander Albon', 'Franco Colapinto'],
    engine: 'Mercedes M15 E Performance',
    chassis: 'FW46',
    points2024: 17,
    position2024: 9
  },
  {
    name: 'Haas',
    shortName: 'Haas',
    fullName: 'MoneyGram Haas F1 Team',
    nationality: 'American',
    base: 'Kannapolis, USA',
    teamPrincipal: 'Ayao Komatsu',
    technicalDirector: 'Andrea De Zordo',
    founded: 2016,
    championships: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    color: '#B6BABD',
    secondaryColor: '#E8002D',
    description: 'The only American team on the grid, Haas has been a consistent midfield competitor.',
    drivers: ['Nico Hülkenberg', 'Kevin Magnussen'],
    engine: 'Ferrari 066/12',
    chassis: 'VF-24',
    points2024: 31,
    position2024: 7
  },
  {
    name: 'Sauber',
    shortName: 'Sauber',
    fullName: 'Stake F1 Team Kick Sauber',
    nationality: 'Swiss',
    base: 'Hinwil, Switzerland',
    teamPrincipal: 'Alessandro Alunni Bravi',
    technicalDirector: 'James Key',
    founded: 1993,
    championships: 0,
    wins: 1,
    podiums: 23,
    poles: 1,
    color: '#52E252',
    secondaryColor: '#000000',
    description: 'The Swiss team transitioning to become the Audi works team from 2026.',
    drivers: ['Valtteri Bottas', 'Zhou Guanyu'],
    engine: 'Ferrari 066/12',
    chassis: 'C44',
    points2024: 4,
    position2024: 10
  },
  {
    name: 'Racing Bulls',
    shortName: 'Racing Bulls',
    fullName: 'Visa Cash App RB Formula One Team',
    nationality: 'Italian',
    base: 'Faenza, Italy',
    teamPrincipal: 'Laurent Mekies',
    technicalDirector: 'Jody Egginton',
    founded: 2006,
    championships: 0,
    wins: 2,
    podiums: 7,
    poles: 1,
    color: '#6692FF',
    secondaryColor: '#FFFFFF',
    description: 'Red Bull\'s sister team, formerly known as AlphaTauri and Toro Rosso.',
    drivers: ['Yuki Tsunoda', 'Liam Lawson'],
    engine: 'Honda RBPTH002',
    chassis: 'VCARB 01',
    points2024: 36,
    position2024: 8
  }
];

const drivers = [
  {
    name: 'Max Verstappen',
    firstName: 'Max',
    lastName: 'Verstappen',
    number: 1,
    code: 'VER',
    nationality: 'Dutch',
    dateOfBirth: new Date('1997-09-30'),
    team: 'Red Bull Racing',
    championships: 4,
    wins: 63,
    podiums: 110,
    poles: 40,
    fastestLaps: 32,
    points2024: 437,
    position2024: 1,
    bio: 'The youngest F1 World Champion in history, Max Verstappen has dominated the sport with 4 consecutive titles.',
    stats: { races: 200, dnf: 18, avgFinish: 2.1 }
  },
  {
    name: 'Lewis Hamilton',
    firstName: 'Lewis',
    lastName: 'Hamilton',
    number: 44,
    code: 'HAM',
    nationality: 'British',
    dateOfBirth: new Date('1985-01-07'),
    team: 'Mercedes',
    championships: 7,
    wins: 103,
    podiums: 197,
    poles: 104,
    fastestLaps: 67,
    points2024: 211,
    position2024: 6,
    bio: 'The most decorated driver in F1 history with 7 World Championships and 103 race wins.',
    stats: { races: 332, dnf: 28, avgFinish: 3.2 }
  },
  {
    name: 'Charles Leclerc',
    firstName: 'Charles',
    lastName: 'Leclerc',
    number: 16,
    code: 'LEC',
    nationality: 'Monégasque',
    dateOfBirth: new Date('1997-10-16'),
    team: 'Ferrari',
    championships: 0,
    wins: 8,
    podiums: 40,
    poles: 24,
    fastestLaps: 8,
    points2024: 356,
    position2024: 3,
    bio: 'Ferrari\'s lead driver and one of the most talented drivers of his generation.',
    stats: { races: 140, dnf: 22, avgFinish: 5.8 }
  },
  {
    name: 'Lando Norris',
    firstName: 'Lando',
    lastName: 'Norris',
    number: 4,
    code: 'NOR',
    nationality: 'British',
    dateOfBirth: new Date('1999-11-13'),
    team: 'McLaren',
    championships: 0,
    wins: 4,
    podiums: 23,
    poles: 5,
    fastestLaps: 9,
    points2024: 374,
    position2024: 2,
    bio: 'McLaren\'s star driver who took his first F1 victory in 2024 and challenged for the championship.',
    stats: { races: 120, dnf: 12, avgFinish: 6.1 }
  },
  {
    name: 'Fernando Alonso',
    firstName: 'Fernando',
    lastName: 'Alonso',
    number: 14,
    code: 'ALO',
    nationality: 'Spanish',
    dateOfBirth: new Date('1981-07-29'),
    team: 'Aston Martin',
    championships: 2,
    wins: 32,
    podiums: 106,
    poles: 22,
    fastestLaps: 23,
    points2024: 62,
    position2024: 10,
    bio: 'A two-time World Champion and one of the greatest drivers in F1 history, still competing at the highest level.',
    stats: { races: 380, dnf: 45, avgFinish: 7.2 }
  },
  {
    name: 'George Russell',
    firstName: 'George',
    lastName: 'Russell',
    number: 63,
    code: 'RUS',
    nationality: 'British',
    dateOfBirth: new Date('1998-02-15'),
    team: 'Mercedes',
    championships: 0,
    wins: 2,
    podiums: 14,
    poles: 3,
    fastestLaps: 6,
    points2024: 235,
    position2024: 5,
    bio: 'Mercedes\' lead driver and a consistent front-runner, George Russell is a future champion in the making.',
    stats: { races: 120, dnf: 10, avgFinish: 6.8 }
  }
];

const cars = [
  {
    name: 'RB20',
    team: 'Red Bull Racing',
    year: 2024,
    chassis: 'RB20',
    engine: 'Honda RBPTH002',
    horsepower: 1050,
    topSpeed: 372,
    weight: 798,
    acceleration: '2.6s',
    downforce: '3500 kg',
    dragCoefficient: 0.7,
    fuelCapacity: 110,
    color: '#3671C6',
    description: 'The dominant car of the 2024 season, the RB20 continued Red Bull\'s winning streak.'
  },
  {
    name: 'SF-24',
    team: 'Ferrari',
    year: 2024,
    chassis: 'SF-24',
    engine: 'Ferrari 066/12',
    horsepower: 1020,
    topSpeed: 368,
    weight: 798,
    acceleration: '2.7s',
    downforce: '3400 kg',
    dragCoefficient: 0.72,
    fuelCapacity: 110,
    color: '#E8002D',
    description: 'Ferrari\'s 2024 challenger, showing strong pace throughout the season.'
  },
  {
    name: 'W15',
    team: 'Mercedes',
    year: 2024,
    chassis: 'W15',
    engine: 'Mercedes M15 E Performance',
    horsepower: 1010,
    topSpeed: 365,
    weight: 798,
    acceleration: '2.7s',
    downforce: '3300 kg',
    dragCoefficient: 0.73,
    fuelCapacity: 110,
    color: '#27F4D2',
    description: 'Mercedes\' 2024 car, marking a return to competitiveness after difficult seasons.'
  },
  {
    name: 'MCL38',
    team: 'McLaren',
    year: 2024,
    chassis: 'MCL38',
    engine: 'Mercedes M15 E Performance',
    horsepower: 1010,
    topSpeed: 370,
    weight: 798,
    acceleration: '2.65s',
    downforce: '3450 kg',
    dragCoefficient: 0.71,
    fuelCapacity: 110,
    color: '#FF8000',
    description: 'McLaren\'s 2024 car that challenged Red Bull for the constructors championship.'
  }
];

const races = [
  { name: 'Bahrain Grand Prix', round: 1, year: 2025, circuit: 'Bahrain International Circuit', country: 'Bahrain', city: 'Sakhir', countryCode: 'BH', date: new Date('2025-03-02'), raceDate: new Date('2025-03-02'), status: 'completed', winner: 'Max Verstappen', winnerTeam: 'Red Bull Racing', laps: 57, distance: 308.2 },
  { name: 'Saudi Arabian Grand Prix', round: 2, year: 2025, circuit: 'Jeddah Corniche Circuit', country: 'Saudi Arabia', city: 'Jeddah', countryCode: 'SA', date: new Date('2025-03-09'), raceDate: new Date('2025-03-09'), status: 'completed', winner: 'Max Verstappen', winnerTeam: 'Red Bull Racing', laps: 50, distance: 308.5 },
  { name: 'Australian Grand Prix', round: 3, year: 2025, circuit: 'Albert Park Circuit', country: 'Australia', city: 'Melbourne', countryCode: 'AU', date: new Date('2025-03-23'), raceDate: new Date('2025-03-23'), status: 'completed', winner: 'Lando Norris', winnerTeam: 'McLaren', laps: 58, distance: 307.6 },
  { name: 'Japanese Grand Prix', round: 4, year: 2025, circuit: 'Suzuka International Racing Course', country: 'Japan', city: 'Suzuka', countryCode: 'JP', date: new Date('2025-04-06'), raceDate: new Date('2025-04-06'), status: 'completed', winner: 'Max Verstappen', winnerTeam: 'Red Bull Racing', laps: 53, distance: 307.5 },
  { name: 'Chinese Grand Prix', round: 5, year: 2025, circuit: 'Shanghai International Circuit', country: 'China', city: 'Shanghai', countryCode: 'CN', date: new Date('2025-04-20'), raceDate: new Date('2025-04-20'), status: 'upcoming', laps: 56, distance: 305.1 },
  { name: 'Miami Grand Prix', round: 6, year: 2025, circuit: 'Miami International Autodrome', country: 'USA', city: 'Miami', countryCode: 'US', date: new Date('2025-05-04'), raceDate: new Date('2025-05-04'), status: 'upcoming', laps: 57, distance: 308.3 },
  { name: 'Emilia Romagna Grand Prix', round: 7, year: 2025, circuit: 'Autodromo Enzo e Dino Ferrari', country: 'Italy', city: 'Imola', countryCode: 'IT', date: new Date('2025-05-18'), raceDate: new Date('2025-05-18'), status: 'upcoming', laps: 63, distance: 309.0 },
  { name: 'Monaco Grand Prix', round: 8, year: 2025, circuit: 'Circuit de Monaco', country: 'Monaco', city: 'Monte Carlo', countryCode: 'MC', date: new Date('2025-05-25'), raceDate: new Date('2025-05-25'), status: 'upcoming', laps: 78, distance: 260.3 },
  { name: 'Canadian Grand Prix', round: 9, year: 2025, circuit: 'Circuit Gilles Villeneuve', country: 'Canada', city: 'Montreal', countryCode: 'CA', date: new Date('2025-06-15'), raceDate: new Date('2025-06-15'), status: 'upcoming', laps: 70, distance: 305.3 },
  { name: 'Spanish Grand Prix', round: 10, year: 2025, circuit: 'Circuit de Barcelona-Catalunya', country: 'Spain', city: 'Barcelona', countryCode: 'ES', date: new Date('2025-06-29'), raceDate: new Date('2025-06-29'), status: 'upcoming', laps: 66, distance: 307.2 },
  { name: 'Austrian Grand Prix', round: 11, year: 2025, circuit: 'Red Bull Ring', country: 'Austria', city: 'Spielberg', countryCode: 'AT', date: new Date('2025-07-06'), raceDate: new Date('2025-07-06'), status: 'upcoming', laps: 71, distance: 306.5 },
  { name: 'British Grand Prix', round: 12, year: 2025, circuit: 'Silverstone Circuit', country: 'UK', city: 'Silverstone', countryCode: 'GB', date: new Date('2025-07-06'), raceDate: new Date('2025-07-06'), status: 'upcoming', laps: 52, distance: 306.2 },
  { name: 'Hungarian Grand Prix', round: 13, year: 2025, circuit: 'Hungaroring', country: 'Hungary', city: 'Budapest', countryCode: 'HU', date: new Date('2025-07-27'), raceDate: new Date('2025-07-27'), status: 'upcoming', laps: 70, distance: 306.6 },
  { name: 'Belgian Grand Prix', round: 14, year: 2025, circuit: 'Circuit de Spa-Francorchamps', country: 'Belgium', city: 'Spa', countryCode: 'BE', date: new Date('2025-08-03'), raceDate: new Date('2025-08-03'), status: 'upcoming', laps: 44, distance: 308.1 },
  { name: 'Dutch Grand Prix', round: 15, year: 2025, circuit: 'Circuit Zandvoort', country: 'Netherlands', city: 'Zandvoort', countryCode: 'NL', date: new Date('2025-08-31'), raceDate: new Date('2025-08-31'), status: 'upcoming', laps: 72, distance: 306.6 },
  { name: 'Italian Grand Prix', round: 16, year: 2025, circuit: 'Autodromo Nazionale Monza', country: 'Italy', city: 'Monza', countryCode: 'IT', date: new Date('2025-09-07'), raceDate: new Date('2025-09-07'), status: 'upcoming', laps: 53, distance: 306.7 },
  { name: 'Azerbaijan Grand Prix', round: 17, year: 2025, circuit: 'Baku City Circuit', country: 'Azerbaijan', city: 'Baku', countryCode: 'AZ', date: new Date('2025-09-21'), raceDate: new Date('2025-09-21'), status: 'upcoming', laps: 51, distance: 306.0 },
  { name: 'Singapore Grand Prix', round: 18, year: 2025, circuit: 'Marina Bay Street Circuit', country: 'Singapore', city: 'Singapore', countryCode: 'SG', date: new Date('2025-10-05'), raceDate: new Date('2025-10-05'), status: 'upcoming', laps: 62, distance: 308.7 },
  { name: 'United States Grand Prix', round: 19, year: 2025, circuit: 'Circuit of the Americas', country: 'USA', city: 'Austin', countryCode: 'US', date: new Date('2025-10-19'), raceDate: new Date('2025-10-19'), status: 'upcoming', laps: 56, distance: 308.4 },
  { name: 'Mexico City Grand Prix', round: 20, year: 2025, circuit: 'Autodromo Hermanos Rodriguez', country: 'Mexico', city: 'Mexico City', countryCode: 'MX', date: new Date('2025-10-26'), raceDate: new Date('2025-10-26'), status: 'upcoming', laps: 71, distance: 305.4 },
  { name: 'São Paulo Grand Prix', round: 21, year: 2025, circuit: 'Autodromo Jose Carlos Pace', country: 'Brazil', city: 'São Paulo', countryCode: 'BR', date: new Date('2025-11-09'), raceDate: new Date('2025-11-09'), status: 'upcoming', laps: 71, distance: 305.9 },
  { name: 'Las Vegas Grand Prix', round: 22, year: 2025, circuit: 'Las Vegas Strip Circuit', country: 'USA', city: 'Las Vegas', countryCode: 'US', date: new Date('2025-11-22'), raceDate: new Date('2025-11-22'), status: 'upcoming', laps: 50, distance: 309.0 },
  { name: 'Qatar Grand Prix', round: 23, year: 2025, circuit: 'Lusail International Circuit', country: 'Qatar', city: 'Lusail', countryCode: 'QA', date: new Date('2025-11-30'), raceDate: new Date('2025-11-30'), status: 'upcoming', laps: 57, distance: 308.6 },
  { name: 'Abu Dhabi Grand Prix', round: 24, year: 2025, circuit: 'Yas Marina Circuit', country: 'UAE', city: 'Abu Dhabi', countryCode: 'AE', date: new Date('2025-12-07'), raceDate: new Date('2025-12-07'), status: 'upcoming', laps: 58, distance: 306.2 }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Team.deleteMany({}),
      Driver.deleteMany({}),
      Car.deleteMany({}),
      Race.deleteMany({}),
      User.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Insert seed data
    await Team.insertMany(teams);
    await Driver.insertMany(drivers);
    await Car.insertMany(cars);
    await Race.insertMany(races);

    // Create admin user
    await User.create({
      username: 'admin',
      email: 'admin@speedverse.com',
      password: 'Admin@123',
      role: 'admin'
    });

    console.log('✅ Database seeded successfully!');
    console.log('Admin credentials: admin@speedverse.com / Admin@123');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
}

seed();
