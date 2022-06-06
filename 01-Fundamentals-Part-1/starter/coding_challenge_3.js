// //TEST DATA 1
// const scoreDolphins1 = 96;
// const scoreDolphins2 = 108;
// const scoreDolphins3 = 89;

// const scoreKoalas1 = 88;
// const scoreKoalas2 = 91;
// const scoreKoalas3 = 110;

// const averageDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
// const averageKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

// let minScoreDolphins;
// if (averageDolphins >= 100) {
//     minScoreDolphins = true;
// }

// let minScoreKoalas;
// if (averageKoalas >= 100) {
//     minScoreKoalas = true;
// }

// if (averageDolphins > averageKoalas && minScoreDolphins) {
//     console.log(`Dolphins ${averageDolphins} have higher score then Koalas ${averageKoalas}`);
// } else if (averageDolphins < averageKoalas && minScoreKoalas) {
//     console.log(`Koalas ${averageKoalas}have a higher score then Dolphins ${averageDolphins}`);
// } else if (averageDolphins === averageKoalas && minScoreDolphins && minScoreKoalas) {
//     console.log(`Dolphins ${averageDolphins} and Koalas ${averageKoalas} have the same score`)
// } else {
//     console.log(`No team has won`);
// }

// //TEST DATA 2
// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112;
// const scoreDolphins3 = 101;

// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 123;


//TEST DATA 3
const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;

const averageDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const averageKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

let minScoreDolphins;
if (averageDolphins >= 100) {
    minScoreDolphins = true;
}

let minScoreKoalas;
if (averageKoalas >= 100) {
    minScoreKoalas = true;
}

if (averageDolphins > averageKoalas && minScoreDolphins) {
    console.log(`Dolphins ${averageDolphins} have higher score then Koalas ${averageKoalas}`);
} else if (averageDolphins < averageKoalas && minScoreKoalas) {
    console.log(`Koalas ${averageKoalas} have a higher score then Dolphins ${averageDolphins}`);
} else if (averageDolphins === averageKoalas && minScoreDolphins && minScoreKoalas) {
    console.log(`Dolphins ${averageDolphins} and Koalas ${averageKoalas} have the same score`)
} else {
    console.log(`No team has won`);
}