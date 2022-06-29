//require statement
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testingSchool = "School Name";
    const employeeInstance = new Intern("Alexander", 123, "agvandyke25@gmail.com", testingSchool);
    expect(employeeInstance.school).toBe(testingSchool);
});