const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(({ firstName, lastName }) => firstName === employeeName
   || lastName === employeeName);
}

// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
