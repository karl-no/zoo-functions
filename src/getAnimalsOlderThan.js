const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameAnimal = data.species.find((name) => name.name === animal);
  return nameAnimal.residents.every((ageAnimal) => ageAnimal.age >= age);
}

// console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
