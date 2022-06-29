//require statement
//object will inherit methods from parent

const Intern = require("../lib/Intern");

//school test
test("Can create school.", () => {
    const testingSchool = "School Name";
    const employeeInstance = new Intern("Alexander", 123, "agvandyke25@gmail.com", testingSchool);
    expect(employeeInstance.school).toBe(testingSchool);
});

//getSchool() method test
test("Testing officeNumber will return office number.", () => {
    const testingSchool = "School Name";
    const employeeInstance = new Intern("Alexander", 123, "agvandyke25@gmail.com", testingSchool);
    expect(employeeInstance.getSchool()).toBe(testingSchool);
});

//getRole() method test
test("Testing role.", () => {
    const returnAnswer = "Intern";
    const employeeInstance = new Intern("Alexander", 123, "agvandyke25@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnAnswer);
});