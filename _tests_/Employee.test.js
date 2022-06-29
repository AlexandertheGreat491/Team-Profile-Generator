

const Employee = require('../lib/Employee.js');


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