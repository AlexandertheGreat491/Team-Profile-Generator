
const Engineer = require("../lib/Engineer.js");

//testGithub test
test("Can create a github.", () => {
    const testGithub = "AlexandertheGreat491";
    const employeeInstance = new Engineer("Alexander", 123, "agvandyke25@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

//getGithub() method test
test("Testing getGithub will return github.", () => {
    const testGithub = "AlexandertheGreat491";
    const employeeInstance = new Engineer("Alexander", 123, "agvandyke25@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

//getRole() method test
test("Testing role.", () => {
    const returnAnswer = "Engineer";
    const employeeInstance = new Engineer("Alexander", 123, "agvandyke25@gmail.com", "AlexandertheGreat491");
    expect(employeeInstance.getRole()).toBe(returnAnswer);
});