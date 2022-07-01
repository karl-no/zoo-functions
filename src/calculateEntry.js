const data = require('../data/zoo_data');

// prices: { adult: 49.99, senior: 24.99, child: 20.99 }
const priceChildren = data.prices.child;
const priceAdult = data.prices.adult;
const priceSenior = data.prices.senior;

const entrantsToday = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const children = entrants.filter((child) => child.age < 18).length;
  const adults = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const seniors = entrants.filter((senior) => senior.age >= 50).length;

  return { child: children, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * priceChildren) + (adult * priceAdult) + (senior * priceSenior);
}

console.log(calculateEntry(entrantsToday));

module.exports = { calculateEntry, countEntrants };
