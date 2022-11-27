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

// function getOldestFromFirstSpecies(id) {
//   const { responsibleFor } = employees.find(({ id: animalId }) => animalId === id);
//   const { residents } = species.find(({ id: animalId }) => animalId === responsibleFor[0]);
//   const oldestAnimal = residents.sort(({ age: a }, { age: b }) => b - a);
//   return Object.values(oldestAnimal[0]);
// }
// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
