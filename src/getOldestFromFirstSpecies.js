const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalResidents = data.species.find((specie) => specie.id === animal).residents;

  return Object.values(animalResidents.reduce((acc, curr) => {
    if (curr.age >= acc.age) {
      return curr;
    }
    return acc;
  }));
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
