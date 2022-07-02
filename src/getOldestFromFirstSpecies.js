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

// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
