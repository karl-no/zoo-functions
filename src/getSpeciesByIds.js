const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const parametro = [];
  if (ids.length === 0) {
    return parametro;
  }
  const species = ids.map((id) => data.species.find((specie) => specie.id === id));
  return species;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
