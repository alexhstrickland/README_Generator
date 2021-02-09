// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const userInput = [
            {
                type: 'input',
                message: 'Please enter your Github username? ',
                name: 'userName',
            },
            {
                type: 'input',
                message: 'Please enter your email address: ',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the title of the project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Please include a short description of your project: ',
                name: 'description',
            },
            {
                type: 'list',
                message: 'Please choose a license for your project: ',
                name: 'license',
                choices: ['ISC', 'None', 'MIT', 'BSD 3', 'Apache 2.0', 'GPL 3.0'],
            },
            {
                type: 'input',
                message: 'Enter the command you would like to use for installation: ',
                name: 'install',
                default: 'npm install',
            },
            {
                type: 'input',
                message: 'Enter the command you would like to use for testing: ',
                name: 'test',
                default: 'npm test',
            },
            {
                type: 'input',
                message: 'Please enter instructions for usage: ',
                name: 'usage',
            },
            {
                type:'input',
                message: 'Please enter instructions for contributing: ',
                name: 'contribution',
            },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success");
    });
}

// TODO: Create a function to initialize app
function init() {
   const output = './output';
   if((fs.existsSync(output)) !== true) {
       fs.mkdirSync(output);
   }
   questions().then(data => {
       writeToFile(output + "/README.md", generateMarkdown(data));
   })
}

function questions() {
    return inquirer.prompt(userInput);
}

// Function call to initialize app
init();


