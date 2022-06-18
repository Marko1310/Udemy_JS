'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
// const if;


// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    const juice = 'Juice with ${apples} apples and ${oranges} oranges.';
    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);\


function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);

console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

console.log(calcAge2(1991));

//Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1985, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return `${retirement}`
    } else {
        consoleß.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'John'));


const friends = ['michael', 'steven', 'peter'];
console.log(friends[1]);

const year = new Array(1991, 1984, 2008, 2020);
console.log(year[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

//
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2012, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];

console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

console.log(friends.includes('Steven'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter')
} else {
    console.log('He is not here');
}


//OBJECTS

const Jonas = {
    firstName: 'Jonas',
    lastName: 'Scmetman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// console.log(Jonas);

// console.log(Jonas.lastName);
// console.log(Jonas['lastName']);

// const nameKey = 'Name';
// console.log(Jonas['first' + nameKey]);
// console.log(Jonas['last' + nameKey]);

Jonas.location = 'Zagreb';

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (Jonas[interestedIn]) {
    console.log(Jonas[interestedIn]);
} else {
    console.log('Wrong request');
}

//Challenge
console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`);


const Jonas = {
    firstName: 'Jonas',
    lastName: 'Scmetman',
    birthyear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthyear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthyear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and 
        he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
    }
};
console.log(Jonas.calcAge());
console.log(Jonas.age);

console.log(Jonas.getSummary());


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const jonasArray = [
    'Jonas',
    'Schmideman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i <= jonasArray.length - 1; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    types.push(typeof jonasArray[i]);
}

console.log(types)

const years = [1991, 2007, 1969, 2020];

const age = [];

console.log('ONLY STRINGS');
for (let j = 0; j < years.length; j++) {
    // const age = 2037 - years[j];
    // console.log(age);

    if (typeof jonasArray[j] !== 'string') {
        continue;
    }
    console.log(jonasArray[j], typeof jonasArray[j]);
}

console.log('BREAK WITH NUMBER');
for (let j = 0; j < years.length; j++) {
    // const age = 2037 - years[j];
    // console.log(age);

    if (typeof jonasArray[j] === 'number') {
        break;
    }
    console.log(jonasArray[j], typeof jonasArray[j]);
}


const jonas = [
    'Jonas',
    'Schmideman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} repetition ${rep}`);
    }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// console.log('-------------');

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You roled the a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}