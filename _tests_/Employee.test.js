const Employee = require('../lib/Employee');


describe('Employee', () =>{
    let employee;
    beforeEach(() =>{
        employee = new Employee('Alexander G. Van Dyke', 123, 'agvandyke25@gmail.com');
    })
    describe ('Intialization of Employee', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            expect(employee.name).toEqual('Alexander G. Van Dyke');
            expect(employee.id).toEqual(123);
            expect(employee.email).toEqual('agvandyke25@gmail.com');
        });
    })
})