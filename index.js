// Include packages needed for this application
const genMd = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Enter the project title: ", 
    "Enter a project description: ",
    "Enter installation instructions with a ';' between each step: ", 
    "Enter usage instructions: ", 
    //"List Features separated by ';' between each feature: ", 
    "Enter instructions on how others can contribute: ",
    "Enter test instructions: ",
    "Choose a license to use: ",
    "Enter your GitHub username: ",
    "Enter your email address: "
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    // TODO - Prompt the user with questions via inquirer.prompt

    // TODO - Format the received data into a readme

    // TODO - Write answers to file

    
}

// Function call to initialize app
init();
