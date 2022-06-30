const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animais = {};
  if (!animal) {
    data.species.forEach((info) => {
      animais[info.name] = info.residents.length;
    });
    return animais;
  }
  if (!animal.sex) {
    return data.species.find((animals) => animals.name === animal.specie).residents.length;
  }
  return data.species.find((animals) => animals.name === animal.specie)
    .residents.filter((animals) => animals.sex === animal.sex).length;
}

module.exports = countAnimals;
