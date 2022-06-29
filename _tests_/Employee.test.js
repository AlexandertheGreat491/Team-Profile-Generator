
const Employee = require('../lib/Employee.js');

//tests
test ("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

//name test
test("Testing name.", () => {
    const name = "Alexander";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

//ID test
test("Testing ID.", () => {
    const id = 123;
    const employeeInstance = new Employee("Alexander", id);
    expect(employeeInstance.id).toBe(id);
})

//Email test
test("Testing email.", () => {
    const email = "agvandyke25@gmail.com";
    const employeeInstance = new Employee("Alexander", 123, email);
    expect(employeeInstance.email).toBe(email);
})

//getName() method test
test("Name is gotten through the getName method.", () => {
    const testName = "Alexander";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

//getId() method test
test("Can test ID through getID method.", () => {
    const testID = 123;
    const employeeInstance = new Employee("Alexander", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

//getEmail() method test
test("Email can be tested through the getEmail method.", () => {
    const testingEmail = "agvandyke25@gmail.com";
    const employeeInstance = new Employee("Alexander", 123, testingEmail);
    expect(employeeInstance.getEmail()).toBe(testingEmail);
})

//getRole() method test
test("Testing role.", () => {
    const returnAnswer = "Employee";
    const employeeInstance = new Employee("Alexander", 123, "agvandyke25@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnAnswer);
})