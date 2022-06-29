
const Employee = require('../lib/Employee.js');


test ("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})