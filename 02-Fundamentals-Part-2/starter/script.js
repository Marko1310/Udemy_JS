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
*/

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