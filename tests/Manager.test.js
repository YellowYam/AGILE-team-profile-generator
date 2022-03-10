const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should create an object with name, id, email, and officeNumber properties', () => {
        const engineer = new Manager();

        //Verify that the new object has the correct properties
        expect(engineer).toEqual({name: '', id: undefined, email: '', officeNumber: undefined});
    });
});

describe('getName', () => {
    it('should return the name of the manager', () => {
        const employee = new Manager('Rufus');

        expect(employee.getName()).toEqual('Rufus');
    });

    it('should throw an error if not passed a String as an argument', () => {
        const err = new Error('Expected parameter "name" to be a String');

        const cb = () => {
            const employee = new Manager(0);
        }

        expect(cb).toThrowError(err);
    })
});

describe('getID', () => {
    it('should return the ID of the employee', () => {
        const employee = new Manager('Rufus', 0);

        expect(employee.getID()).toEqual(0);
    });

    it('should throw an error if not passed a Number as an argument', () =>{
        const err = new Error('Expected parameter "id" to be a Number');

        const cb = () => {
            const employee = new Manager('Rufus', '0');
        }

        expect(cb).toThrowError(err);
    });
});

describe('getEmail', () => {
    it('should return the email of the employee', () => {
        const employee = new Manager('Rufus', 0, 'rufus.the.mag@akc.org');

        expect(employee.getEmail()).toEqual('rufus.the.mag@akc.org');
    });

    it('should throw an error if the email argument is not a String', () => {
        const err = new Error('Expected parameter "email" to be a String');

        const cb = () => {
            const employee = new Manager('Rufus', 0, 12);
        }

        expect(cb).toThrowError(err);
    });

    
});


describe('getRole', () => {
    it('should return the role of the employee', () => {
        const employee = new Manager('Rufus', 0, 'rufus.the.mag@akc.org', 'intern');

        expect(employee.getRole()).toEqual('intern');
    });

    it('should throw an error if the role argument is not a String', () => {
        const err = new Error('Expected parameter "role" to be a String');

        const cb = () => {
            const employee = new Manager('Rufus', 0, 'rufus.the.mag@akc.org', 0);
        }

        expect(cb).toThrowError(err);
    });

    
});