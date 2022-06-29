const Employee = require("./Employee.js");


//class will have Engineer methods & will inherit methods from Employee

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}