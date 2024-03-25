#! usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done in line # 9
// 2) User input for guessing number - Done in line # 11 to 17
// 3) Compare user input with computer generated number and show result
console.log("Welcome to my game:");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess A Number Between 1 to 6:- ",
    },
]);
// console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations.! You guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
