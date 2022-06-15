//Deine object: person1
const person1 = {
    name: 'Mark',
    surname: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

//Deine object: person2
const person2 = {
    name: 'John',
    surname: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

//Initialize the functins from the objets
person1.calcBMI();
person2.calcBMI();

//define if statement
if (person1.BMI > person2.BMI) {
    console.log(`${person1.name}'s BMI (${person1.BMI}) is higher than ${person2.name}'s (${person2.BMI})`)
} else {
    console.log(`${person2.name}'s BMI (${person2.BMI}) is higher than ${person1.name}'s (${person1.BMI})`)
}


