const Employee = require('../lib/employee');

describe('Employee', () => {

    describe('Initialization', () => {
        it('should create an object with name, id, and email properties', () => {
            const employee = new Employee('Rufus', 5, 'rufus.the.mag@akc.org');
    

             // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Rufus");
            expect(employee.id).toEqual(5);
            expect(employee.email).toEqual('rufus.the.mag@akc.org')

        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Employee();
      
            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
          });
        
          it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Rufus");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if not provided an email", () => {
            const cb = () => new Employee("Rufus", 0);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a String");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(3, 2);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });
      

          it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Rufus", "2");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee('Rufus', 2, 0);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

    });
 
});

describe('getName', () => {
    it('should return the name of the employee', () => {
        const employee = new Employee('Rufus', 5, 'rufus.the.mag@akc.org');

        expect(employee.getName()).toEqual('Rufus');
    });

    it('should throw an error if not passed a String as an argument', () => {
        const err = new Error('Expected parameter "name" to be a String');

        const cb = () => {
            const employee = new Employee(0, 5, 'rufus.the.mag@akc.org');
        }

        expect(cb).toThrowError(err);
    })
});

describe('getID', () => {
    it('should return the ID of the employee', () => {
        const employee = new Employee('Rufus', 5, 'rufus.the.mag@akc.org');

        expect(employee.getID()).toEqual(5);
    });

    it('should throw an error if not passed a number as an argument', () =>{
        const err = new Error('Expected parameter "id" to be a Number');

        const cb = () => {
            const employee = new Employee('Rufus', '5', 'rufus.the.mag@akc.org');
        }

        expect(cb).toThrowError(err);
    });
});

describe('getEmail', () => {
    it('should return the email of the employee', () => {
        const employee = new Employee('Rufus', 0, 'rufus.the.mag@akc.org');

        expect(employee.getEmail()).toEqual('rufus.the.mag@akc.org');
    });

    it('should throw an error if the email argument is not a String', () => {
        const err = new Error('Expected parameter "email" to be a String');

        const cb = () => {
            const employee = new Employee('Rufus', 0, 12);
        }

        expect(cb).toThrowError(err);
    });

    
});


describe('getRole', () => {
    it('should return the role of the employee', () => {
        const employee = new Employee('Rufus', 0, 'rufus.the.mag@akc.org');

        expect(employee.getRole()).toEqual('Employee');
    });
    
});