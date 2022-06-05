//Mark
let massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;

// John
let massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`);
} else {
    console.log(`John's BMI ${bmiJohn}is higher than Mark's ${bmiMark}`);
}



