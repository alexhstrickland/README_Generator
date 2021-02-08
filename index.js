// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt(
            {
                type: 'input',
                message: 'Please enter your Github username: ',
                name:'username'
            },
            {
                type: 'input',
                message: 'Please enter your email address: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is the title of the project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please include a short description of your project: ',
                name: 'description'
            },
            {
                type: 'list',
                message: 'Please choose a license for your project: ',
                name: 'license',
                choices: ['ISC', 'None', 'MIT', 'BSD', 'Apache 2.0']
            },
            {
                type: 'input',
                message: 'Enter the command you would like to use for installation: ',
                name: 'install',
                default: 'npm install'
            },
            {
                type: 'input',
                message: 'Enter the command you would like to use for testing: ',
                name: 'test',
                default: 'npm test'
            },
            {
                type: 'input',
                message: 'Please enter instructions for usage: ',
                name: 'usage'
            },
            {
                type:'input',
                message: 'Please enter instructions for contributing: ',
                name: 'contribution'
            },
        )



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
