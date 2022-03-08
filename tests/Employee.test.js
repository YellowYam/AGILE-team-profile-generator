const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an object with name, id, and email properties', () => {
        const employee = new Employee();

        //Verify that the new object has the correct properties
        expect(employee).toEqual({name: '', id: undefined, email: ''});
    });
});

describe('getName', () => {
    it('should return the name of the employee', () => {
        const employee = new Employee('Rufus');

        expect(employee.getName()).toEqual('Rufus');
    });

    it('should throw an error if not passed a String as an argument', () => {
        const err = new Error('Expected parameter "name" to be a String');

        const cb = () => {
            const employee = new Employee(0);
        }

        expect(cb).toThrowError(err);
    })
});