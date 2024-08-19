#! /usr/bin/env node
console.log("\n*****WELCOME TO QUIZ SYSTEM*****\n");
import inquirer from "inquirer"; //import module inquirer
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "Q1.HTML stands for?",
        choices: [
            "HighText Machine Language",
            "HyperText and links Markup Language",
            "HyperText Markup Language",
            "None of these",
        ],
    },
    {
        name: "question2",
        type: "list",
        message: "Q2.What are the three main 'simple types' in TypeScript?",
        choices: [
            "Object, Array, Symbol",
            "Array, Object, Boolean",
            "Object, String, Number",
            "Boolean, Number, String",
        ],
    },
    {
        name: "question3",
        type: "list",
        message: "Q3.________ an interface will have the same properties as that interface.",
        choices: ["Idolizing", "Duplicating", "Extending", "Improving"],
    },
    {
        name: "question4",
        type: "list",
        message: "Q4.The full form of CSS is:",
        choices: [
            "Coloured Special Sheets",
            "Cascading Style Sheets",
            "Colour and Style Sheets",
            "None of the above",
        ],
    },
    {
        name: "question5",
        type: "list",
        message: "Q5.Which command would you use to install TypeScript globally using npm?",
        choices: [
            "npm install typescript",
            "npm global install typescript",
            "npm install -g typescript",
            "npm typescript install global",
        ],
    },
]);
console.log("");
let score = 0;
switch (quiz.question1) { //checking of answers
    case "HyperText Markup Language":
        console.log("1. Your answer is correct!");
        ++score;
        break;
    default:
        console.log("1. Sorry! your answer is incorrect!");
}
switch (quiz.question2) {
    case "Boolean, Number, String":
        console.log("2. Your answer is correct!");
        ++score;
        break;
    default:
        console.log("2. Sorry! your answer is incorrect!");
}
switch (quiz.question3) {
    case "Extending":
        console.log("3. Your answer is correct!");
        ++score;
        break;
    default:
        console.log("3. Sorry! your answer is incorrect!");
}
switch (quiz.question4) {
    case "Cascading Style Sheets":
        console.log("4. Your answer is correct!");
        ++score;
        break;
    default:
        console.log("4. Sorry! your answer is incorrect!");
}
switch (quiz.question5) {
    case "npm install -g typescript":
        console.log("5. Your answer is correct!");
        ++score;
        break;
    default:
        console.log("5. Sorry! your answer is incorrect!");
}
console.log("");
console.log(`You have Scored: ${score}\n`);
console.log("*****THANKS FOR YOUR INTEREST*****");
process.exit();
