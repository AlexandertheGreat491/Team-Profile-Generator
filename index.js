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

//questions that will prompt user for information
const promptUser = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: questions.employeeType,
        choices: ['Manager', 'Engineer', 'Intern', 'Finished adding teammates']
    }, {
        type: 'input',
        name: 'name',
        message: questions.name,
        when: (answers) => answers.role !== 'Finished adding teammates'
    }, {
        type: 'input',
        name: 'id',
        message: questions.employeeID,
        when: (answers) => answers.role !== 'Finished adding teammates'
    }, {
        type: 'input',
        name: 'email',
        message: questions.email,
        when: (answers) => answers.role !== 'Finished adding teammates'
    }, {
        type: 'input',
        name: 'officeNumber',
        message: questions.github,
        when: (answers) => answers.role === 'Manager'
    }, {
        type: 'input',
        name: 'github',
        message: questions.github,
        when: (answers) => answers.role === 'Engineer'
    }, {
        type: 'input',
        name: 'school',
        message: questions.school,
        when: (answers) => answers.role === 'Intern'
    },


    ])
        .then((answers) => {
            if (answers.role === 'Finished adding teammates') {
                employeeArr.push(answers);
                console.log('THis is the finished employee array prior')
                console.log(employeeArr);
                console.log(`End of Employee Question`);
                console.log(employeeArr[0]);
                employeeInit(employeeArr);
            } else {
                employeeArr.push(answers);
                console.log(answers);
                console.log(`adding more employees`);
                console.log(employeeArr);
                return promptUser();
            }
        });

};