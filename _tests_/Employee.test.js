
const Employee = require('../lib/Employee');


test ("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})