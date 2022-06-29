
const Engineer = require("../lib/Engineer.js");

//testGithub test
test("Can create a github.", () => {
    const testGithub = "AlexandertheGreat491";
    const employeeInstance = new Engineer("Alexander", 123, "agvandyke25@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});