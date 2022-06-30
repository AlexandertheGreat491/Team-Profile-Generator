//require statement

const Manager = require("../lib/Manager");

//tests

//OfficeNumber test
test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Alexander", 2, "agvandyke25@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});