const findTheOldest = function(people) {
  let oldestAge = -Infinity;
  let oldestPerson = null;
  for (person of people) {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    };
    if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
      oldestAge = person.yearOfDeath - person.yearOfBirth;
      oldestPerson = person
    };
  };
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
