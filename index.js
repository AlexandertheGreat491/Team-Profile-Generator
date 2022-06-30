//importing packages
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generatePage');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//storing employee info from prompts
let employeeArr = [];
let totalArr = [];
let managerArr = [];
let engineerArr = [];
let internArr = [];
const questions = {
    name: `What is the employee's name?`,
    employeeID: `What is the employee's ID?`,
    email: `What is the employee's email?`,
    officeNumber: `What is the office number?`,
    github: `What is the GitHub ID of the engineer?`,
    school: `What school does the intern attend?`
};
// prompting user for information

const employeeInit = empArr => {
    managerArr = employeeArr.filter(employeeArr => employeeArr.role === 'Manager');
    engineerArr = employeeArr.filter(employeeArr => employeeArr.role === 'Engineer');
    internArr = employeeArr.filter(employeeArr => employeeArr.role === 'Intern');

    managerArr.forEach(manager => {
        const parsedId = parseInt(manager.id);
        const parsedOffice = parseInt(manager.officeNumber)
        const managerItem = new Manager(manager.name, parsedId, manager.email, parsedOffice);
        totalArr.push(managerItem);
    });
    engineerArr.forEach(engineer => {
        const parsedId = parseInt(engineer.id);
        const engineerItem = new Engineer(engineer.name, parsedId, engineer.email, engineer.github);
        totalArr.push(engineerItem);
    });
    internArr.forEach(intern => {
        const parsedId = parseInt(intern.id);
        const internItem = new Intern(intern.name, parsedId, intern.email, intern.school);
        totalArr.push(internItem);
    });
    console.log('this is the final array')
    console.log(totalArr);
    console.log(totalArr[0].name);

};
const promptUser = () => {
    return inquirer.prompt([{
            // This question is only asked when the license question is selected as yes
            type: 'list',
            name: 'role',
            message: questions.employeeType,
            choices: ['Manager', 'Engineer', 'Intern', 'Finished adding teammates']
        },
        {
            type: 'input',
            name: 'name',
            message: questions.name,
            when: (answers) => answers.role !== 'Finished adding teammates'
        },
        {
            type: 'input',
            name: 'id',
            message: questions.employeeID,
            when: (answers) => answers.role !== 'Finished adding teammates'
        },
        {
            type: 'input',
            name: 'email',
            message: questions.email,
            when: (answers) => answers.role !== 'Finished adding teammates'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: questions.officeNumber,
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: questions.github,
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: questions.school,
            when: (answers) => answers.role === 'Intern'
        },


    ]).then((answers) => {
        if (answers.role === 'Finished adding teammates') {
            employeeArr.push(answers);
            console.log('This is the finished employee array prior')
            console.log(employeeArr);
            console.log(`End of Employee Question`);
            console.log(employeeArr[0]);
            employeeInit(employeeArr);
        } else {
            employeeArr.push(answers);
            // console.log(answers);
            console.log(`adding more employees`);
            console.log(employeeArr);
            return promptUser();
        }
    });
};



// function to initialize app
const init = () => {
    promptUser()
        // .then(console.log("end of init"))
        // Use writeFileSync method to use promises instead of a callback function
        .then((() => fs.writeFile('./dist/index.html', generatePage(totalArr), function(err){
            if(err) throw err;
            console.log('index.html file created!');
        })))


    .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();