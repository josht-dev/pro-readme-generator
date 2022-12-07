// Include packages needed for this application
const genMd = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter the project title: ",
        name: 'title'
    },
    {
        type: 'input',
        message: "Enter a project description: ",
        name: 'description'
    },
    {
        type: 'input',
        message: "Enter installation instructions with a ';' between each step: ",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Enter usage instructions: ",
        name: 'usage'
    },
    /*{
        type: 'input',
        message: "List Features separated by ';' between each feature: ",
        name: 'features'
    },*/
    {
        type: 'input',
        message: "Enter instructions on how others can contribute: ",
        name: 'contribute'
    },
    {
        type: 'input',
        message: "Enter test instructions: ",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license to use: ",
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'Unlicense'],
        default: 'MIT'
    },
    {
        type: 'input',
        message: "Enter your GitHub username: ",
        name: 'username'
    },
    {
        type: 'input',
        message: "Enter your email address: ",
        name: 'email'
    }
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
