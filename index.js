// Include packages needed for this application
const genMd = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Enter the project title: ", 
    "Add a table of contents? Y/N ",  
    "Add usage instructions: ", 
    "What license does your project use? ", 
    "Add optional sections; installation, features, tests, and how to contribute? Y/N ", 
    "Enter installation instructions with a ';' between each step: ", 
    "List Features separated by ';' between each feature: ", 
    "Add instructions on how others can contribute: ", 
    "Add the tests section? Y/N "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
