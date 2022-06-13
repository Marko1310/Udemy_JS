'use strict'

//Calculate the aveerage score of each team
const average = (teamName, score1, score2, score3) => {
    const average_score = (score1 + score2 + score3) / 3;
    console.log(`average score for ${teamName} is ${average_score}.`)
    return average_score;
}
console.log(average('Dolphins', 44, 23, 71));
console.log(average('Koalas', 23, 34, 27));


//Check the winner team
const averageTeam = (score1, score2, score3) => {
    const average_score = (score1 + score2 + score3) / 3;
    return average_score;
}

//TEST 1
let averageScoreDolphins = averageTeam(44, 23, 71);
let averageScoreKoalas = averageTeam(65, 54, 49);

function checkWinner(averageScore1, averageScore2) {
    if (averageScore1 >= 2 * averageScore2) {
        console.log(`Dolphins win (${averageScore1} vs. ${averageScore2})`);
    } else if (averageScore2 >= 2 * averageScore1) {
        console.log(`Koalas win (${averageScore2} vs. ${averageScore1})`);
    } else {
        console.log('No teams win');
    }
}

checkWinner(averageScoreDolphins, averageScoreKoalas);

//TEST 2

averageScoreDolphins = averageTeam(85, 54, 41);
averageScoreKoalas = averageTeam(23, 34, 27);

checkWinner(averageScoreDolphins, averageScoreKoalas);


