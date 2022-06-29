class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter <name> to be a string with something in it");
        };
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter <id> to be a positive number");
        };
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter <email> to be a string that isn't empty");
        };
        this.name = name;
        this.id = id;
        this.email = email;
    };
}