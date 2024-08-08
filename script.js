// Variables

const name = "Andy";

let age = 25;

const isPresent = true;

// The variable Var is out of date

// Primary datatypes

// "" '' = String
// 25 = number
// true or false = boolean

// Non primary datatypes

// function
// array

// FUNCTION

function personal() {
    const userName = "Ashborn";
    const userAge = 25;
    const userPresent = true;

    const userInfo = "My name is" + " " + userName + ". " + "I am" + " " + userAge + " " + "I'm at home" + " " + userPresent;
    console.log(userInfo)

    // Template litteral
    const userCredentials = `My name is ${userName}. I am ${userAge}. I'm at home ${userPresent}`
}

personal();

// Arrow function
const simpleCalculater = () => {
    let number1 = 5
    let number2 = 10
    let sum = number1 + number2

    console.log(sum)
}

simpleCalculater()

// DOM manupilation

const fillInText = document.getElementById("fillInText")

console.log(fillInText)

fillInText.textContent = "I am learning JS"

const changColor = document.getElementById("changeColor")

console.log(changColor)
