/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*true;
let javas = 2;
console.log(javas);

console.log(typeof true);
console.log(typeof javas);

javas = 'YES!';

console.log(typeof javas);

let year;

console.log(typeof year);
console.log(year);

year = 1991;

console.log(typeof year);
console.log(year);

let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3)

const firstName = 'Jonas'
const lastName = 'Shmitman'
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
console.log(x);
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFulAge = ageSarah >= 18;
console.log(isFulAge);

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start drivinig licence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;

const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(String(23));

//type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


const money = 10;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('Yaaay');
} else {
    console.log('height is undefined');
}

const age = '18';
if (age === 18) {
    console.log('Person just became an adult(strict)');
}

if (age == 18) {
    console.log('Person just became an adult(loose)');
}

const favorite = Number(prompt('Whats your favourite number?'));

console.log(favorite);

if (favorite === 25) {
    console.log('25 is an amazing number');
} else if (favorite === 7) {
    console.log('seven is also an amzing number');
} else {
    console.log('Number is not seven or 25');
}

if (favorite !== 23) {
    console.log('Why not 23');
}
*/

const hasDriversLicence = true; // A
const hasGoodVision = true // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive');
// }

const isTired = true; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive');
}
