//packages imported
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generate-page');
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

//user will be prompted for information

const employeeInit = employeeArr => {
    managerArr = employeeArr.filter(employeeArr => employeeArr.role === 'Manager');
    engineerArr = employeeArr.filter(employeeArr => employeeArr.role === 'Engineer');
    internArr = employeeArr.filter(employeeArr => employeeArr.role === 'Intern');

    managerArr.forEach(manager => {
        const parsedId = parseInt(manager.id);
        const parsedOffice = parseInt(manager.officeNumber)
        const managerItem = new Manager(manager.name, parseId, manager.email, parsedOffice);
        totalArr.push(engineerItem);
    });
    engineerArr.forEach(engineer => {
        const parsedId = parseInt(engineer.id);
        const engineerItem = new Engineer(engineer.name, parseId, engineer.email, engineer.github);
        totalArr.push(engineerItem);
    });
    internArr.forEach(intern => {
        const parseId = parseInt(intern.id);
        const internItem = new Intern(intern.name, parseId, intern.email, intern.school);
        totalArr.push(internItem);
    });
    console.log('this is the array of everything');
    console.log(totalArr);
    console.log(totalArr[0].name);
};
