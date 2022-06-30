//require statement

const Manager = require("../lib/Manager");

//tests

//OfficeNumber test
test("Can create an office number.", () => {
    const testOfficeNumber = 123;
    const employeeInstance = new Manager("Alexander", 123, "agvandyke25@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

//getOfficeNumber() method test
test("Testing OfficeNumber will return office number.", () => {
    const testOfficeNumber = 123;
    const employeeInstance = new Manager("Alexander", 123, "agvandyke25@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});