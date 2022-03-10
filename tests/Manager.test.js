const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {

    describe('Initialization', () => {
        it('should create an object with name, id, email, and officeNumber properties', () => {
            const employee = new Manager('Rufus', 5, 'rufus.the.mag@akc.org', 8);
    
             // Verify that the new object has the correct properties
             expect(employee.name).toEqual("Rufus");
             expect(employee.id).toEqual(5);
             expect(employee.email).toEqual('rufus.the.mag@akc.org');
             expect(employee.officeNumber).toEqual(8);
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Manager();
      
            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
          });
        
          it("should throw an error if not provided an id", () => {
            const cb = () => new Manager("Rufus");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if not provided an email", () => {
            const cb = () => new Manager("Rufus", 0);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a String");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if not provided an officeNumber", () => {
            const cb = () => new Manager('Rufus', 5, 'rufus.the.mag@akc.org');
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'officeNumber' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Intern(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });
      

          it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Intern("Rufus", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Intern('Rufus', 2, 0);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'officeNumber' is not a number", () => {
            const cb = () => new Intern('Rufus', 5, 'rufus.the.mag@akc.org', '0');
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

    });
 
});


describe('getName', () => {
    it('should return the name of the manager', () => {
        const employee = new Manager('Rufus');

        expect(employee.getName()).toEqual('Rufus');
    });
});

describe('getID', () => {
    it('should return the ID of the employee', () => {
        const employee = new Manager('Rufus', 0);

        expect(employee.getID()).toEqual(0);
    });
});

describe('getEmail', () => {
    it('should return the email of the employee', () => {
        const employee = new Manager('Rufus', 0, 'rufus.the.mag@akc.org');

        expect(employee.getEmail()).toEqual('rufus.the.mag@akc.org');
    });
    
});


describe('getRole', () => {
    it('should return the role of the employee', () => {
        const employee = new Manager('Rufus', 0, 'rufus.the.mag@akc.org', 'intern');

        expect(employee.getRole()).toEqual('Manager');
    });
    
});