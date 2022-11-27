const data = require('../data/zoo_data');

const { species, hours } = data;

function animalsAvailable(animal) {
  return species.find((callback) => callback.name === animal).availability;
}

function animalsExhibit(day) {
  const exhibitedAnimals = [];
  species.forEach((animal) => {
    if (animal.availability.includes(day)) {
      exhibitedAnimals.push(animal.name);
    }
  });
  return exhibitedAnimals;
}

function agenda(day) {
  if (typeof day === 'string') {
    if (day === 'Monday') {
      return {
        Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
      };
    }
    const hour = hours[day];
    const animalScheduled = animalsExhibit(day);
    return {
      [day]: {
        officeHour: `Open from ${hour.open}am until ${hour.close}pm`,
        exhibition: animalScheduled,
      },
    };
  }
}

function schedule() {
  let scheduleDays = {};
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days.forEach((dia) => {
    const daySchedule = agenda(dia);
    const day = Object.keys(daySchedule);
    scheduleDays = { ...scheduleDays, [day]: daySchedule[dia] };
  });
  return scheduleDays;
}

function getSchedule(scheduleTarget) {
  if (species.some((animal) => animal.name === scheduleTarget)) {
    return animalsAvailable(scheduleTarget);
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return agenda(scheduleTarget);
  }
  return schedule();
  // switch (true) {
  // case species.some((animal) => animal.name === scheduleTarget):
  //   return animalsAvailable(scheduleTarget);
  // case Object.keys(hours).includes(scheduleTarget):
  //   return agenda(scheduleTarget);
  // default:
  //   return schedule();
  // }
}

console.log(getSchedule('Monday'));
console.log(getSchedule('Tuesday'));
console.log();
console.log(getSchedule());

module.exports = getSchedule;
