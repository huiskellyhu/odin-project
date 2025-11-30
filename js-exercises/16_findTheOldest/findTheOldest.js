const getAge = function (birth, death) {
    if (!death) {
        death = new  Date().getFullYear();
    }
    return death - birth;

    // person.yearOfDeath ??= new Date().getFullYear();

    // return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth, 
            currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })

    // const peopleOldestToYoungest = people.toSorted(
    //     (person, nextPerson) => getAge(nextPerson) - getAge(person),
    // );

    // const oldestPerson = peopleOldestToYoungest[0];
    // return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;