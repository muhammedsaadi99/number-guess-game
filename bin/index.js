#! /usr/bin/env node
import inquirer from "inquirer";
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function startGame() {
    console.log('Welcome to the Number Guessing Game!');
    console.log('I am thinking of a number between 1 and 100...');
    const secretNumber = getRandomNumber(1, 100);
    let attempts = 0;
    while (true) {
        const answers = await inquirer.prompt({
            type: 'number',
            name: 'guess',
            message: 'Enter your guess (between 1 and 100):',
            validate: (input) => {
                if (isNaN(input) || input < 1 || input > 100) {
                    return 'Please enter a valid number between 1 and 100';
                }
                return true;
            }
        });
        const guess = answers.guess;
        attempts++;
        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
            break;
        }
        else if (guess < secretNumber) {
            console.log('Too low! Try again.');
        }
        else {
            console.log('Too high! Try again.');
        }
    }
}
startGame();
