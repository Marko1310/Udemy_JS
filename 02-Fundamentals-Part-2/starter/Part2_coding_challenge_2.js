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

//Array of bills
const bills = [125, 555, 44];

//Calculate tips based on the values of bills in an array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`Tip for bill = ${bills[0]} is ${tips[0]}`);
console.log(`Tip for bill = ${bills[1]} is ${tips[1]}`);
console.log(`Tip for bill = ${bills[2]} is ${tips[2]}`);

//Calculate the total value(bills * tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Total value for bill = ${bills[0]} is ${total[0]}`);
console.log(`Total value for bill = ${bills[1]} is ${total[1]}`);
console.log(`Total value for bill = ${bills[2]} is ${total[2]}`);
