const data = require('../data/zoo_data');

function isManager(id) {
  // retorna true se o id for de um manager
  // return managers.some((manager) => manager === id);
  return data.employees.some((callback) =>
    callback.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const manager = data.employees.filter((callback) =>
      callback.managers.some((id) => id === managerId));

    return manager.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
