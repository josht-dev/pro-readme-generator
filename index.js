// Include packages needed for this application
const genMd = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter the project title: ",
        name: 'title',
        validate: function(title) {
            // User must enter project title
            return (title) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter a project description: ",
        name: 'Description'
    },
    {
        type: 'confirm',
        message: 'Include a table of contents? (Y/N)',
        name: 'index'
    },
    {
        type: 'input',
        message: "Enter installation instructions: ",
        name: 'Installation'
    },
    {
        type: 'input',
        message: "Enter usage instructions: ",
        name: 'Usage'
    },
    {
        type: 'input',
        message: "List your collaborators, third-party assets, and any tutorials you followed: ",
        name: 'Credits'
    },
    {
        type: 'list',
        message: "Choose a license to use: ",
        name: 'License',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'Unlicense'],
        default: 'MIT'
    },
    {
        type: 'input',
        message: "Add the project features: ",
        name: 'Features'
    },
    {
        type: 'input',
        message: "Enter instructions on how others can contribute: ",
        name: 'How to Contribute'
    },
    {
        type: 'input',
        message: "Enter test instructions: ",
        name: 'Tests'
    },
    {
        type: 'input',
        message: "Enter your GitHub username: ",
        name: 'username',
        validate: function(username) {
            // User must enter GitHub user name
            return (username) ? true : false;
        }
    },
    {
        type: 'input',
        message: "Enter your email address: ",
        name: 'email',
        validate: function(email) {
            // Use regex to validate a proper email
            const validation = 
                new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/, 'gm');
            //
            return validation.test(email);
        }
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!');
    });
}

// Create a function to initialize app
function init() {
    console.log('Welcome to the professional README generator!');
    // Prompt the user with questions via inquirer.prompt
    inquirer
        .prompt(questions).then((response) => {
            // Use the user data to generate the readme data
            let readme = genMd(response);

            // REMOVE - TESTING ONLY
            writeToFile('test2.md', JSON.stringify(response));

            // Write readme to file
            writeToFile('test.md', readme);
        });
    //
}

// Function call to initialize app
init();
