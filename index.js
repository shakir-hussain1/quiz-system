#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.HTML stands for?",
        choices: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.What are the three main 'simple types' in TypeScript?",
        choices: ["Object, Array, Symbol", "Array, Object, Boolean", "Object, String, Number", "Boolean, Number, String"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.________ an interface will have the same properties as that interface.",
        choices: ["Idolizing", "Duplicating", "Extending", "Improving"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.The full form of CSS is:",
        choices: ["Coloured Special Sheets", "Cascading Style Sheets", "Colour and Style Sheets", "None of the above"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which command would you use to install TypeScript globally using npm?",
        choices: ["npm install typescript", "npm global install typescript", "npm install -g typescript", "npm typescript install global"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "HyperText Markup Language":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "Boolean, Number, String":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "Extending":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "Cascading Style Sheets":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "npm install -g typescript":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`Score: ${score}`);
