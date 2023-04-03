//Object Destructuring

const person = {
    name: 'Kenny',
    age: 34,
    codeName: 'Ironman',
    range: 'Sargent',
};

// const { name, age, codeName } = person;

// console.log(name);
// console.log(age);
// console.log(codeName);

const printPerson = ({ name, age, codeName, range = 'civilian' }) => {
    return {
        codeName: codeName,
        age: age,
        latlng: {
            lat: 14.3235,
            lng: -6.32323,
        },
    };
};

const {
    codeName,
    age,
    latlng: { lat, lng },
} = printPerson(person);

console.log(codeName, age, lat, lng);
