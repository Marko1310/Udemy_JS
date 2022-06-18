//Fill the test array called bill
bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//Create empty arrays
const tips = [];
const total = [];

//Function to calculate tips
//Rule: If the bill is between 500 and 300, the tip is 15%, and if it is any other value, then it's 20%
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = 0.15 * bill;
        return tip;
    } else {
        const tip = 0.20 * bill;
        return tip;
    }
}

//Calculate the tip using the function for every bill
for (let i = 0; i <= 9; i++) {
    calcTip(bill[i]);
    tips.push(calcTip(bill[i]));
    total.push(calcTip(bill[i]) + bill[i]);

    console.log(`For bill ${bill[i]} the tip is ${tips[i]} and the total is ${total[i]}`);
}

//Calculate the average of total bill

function calcAverage(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    const average = sum / arr.length;
    return average;
}

console.log(`Average value of the total bill is ${calcAverage(total)}`);






