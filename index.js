//packages imported
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require ('./utils/generate-page');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// stores employee info from prompts
let employeeArr = [];
let totalArr = [];
let managerArr = [];
let engineerArr = [];
let internArr = [];
const questions = {
    name: `What is the name of the employee?`,
    employeeID: `What is the ID of the employee?`,
    email: `What is the employee's email?`,
    officeNumber: `What is the office number?`,
    github: `What is the GitHub ID of the employee?`,
    school: `What school does the intern attend?`
};

