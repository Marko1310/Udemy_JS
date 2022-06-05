const country = 'Croatia';
const continent = "Europe";
let population = 4000000;
const language = 'croatian'


//variable name conventions
// console.log(country);
// console.log(continent);
// console.log(population);

let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

const populationFinland = 6000000;
console.log(population > populationFinland);

const populationAverage = 33000000;
console.log(population < populationAverage);

const description =
    country + ' ' +
    'is in ' + continent +
    ',and its ' + population + ' million people speak ' + language;

console.log(description);