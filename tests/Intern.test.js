const Intern = require('../lib/intern');

describe('Intern', () => {

    describe('Initialization', () => {
        it('should create an object with name, id, email, and school properties', () => {
            const employee = new Intern('Rufus', 5, 'rufus.the.mag@akc.org', 'GA Tech');
    
             // Verify that the new object has the correct properties
             expect(employee.name).toEqual("Rufus");
             expect(employee.id).toEqual(5);
             expect(employee.email).toEqual('rufus.the.mag@akc.org');
             expect(employee.school).toEqual('GA Tech');
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Intern();
      
            // Verify that an error was thrown in the callback function
            expect(cb).toThrow();
          });
        
          it("should throw an error if not provided an id", () => {
            const cb = () => new Intern("Rufus");
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to be a number");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if not provided an email", () => {
            const cb = () => new Intern("Rufus", 0);
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
          });

          it("should throw an error if not provided a school", () => {
            const cb = () => new Intern('Rufus', 5, 'rufus.the.mag@akc.org');
      
            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
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
            const err = new Error("Expected parameter 'id' to be a number");
      
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Intern('Rufus', 2, 0);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'school' is not a string", () => {
            const cb = () => new Intern('Rufus', 5, 'rufus.the.mag@akc.org', 0);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

    });
 
});

describe('getName', () => {
    it('should return the name of the employee', () => {
        const employee = new Intern('Rufus', 5, 'rufus.the.mag@akc.org', 'GA Tech');

        expect(employee.getName()).toEqual('Rufus');
    });

});

describe('getID', () => {
    it('should return the ID of the employee', () => {
        const employee = new Intern('Rufus', 0, 'rufus.the.mag@akc.org', 'GA Tech');

        expect(employee.getID()).toEqual(0);
    });

});

describe('getEmail', () => {
    it('should return the email of the employee', () => {
        const employee = new Intern('Rufus', 0, 'rufus.the.mag@akc.org', 'GA Tech');

        expect(employee.getEmail()).toEqual('rufus.the.mag@akc.org');
    });
    
});


describe('getRole', () => {
    it('should return the role of the employee', () => {
        const employee = new Intern('Rufus', 0, 'rufus.the.mag@akc.org', 'intern');

        expect(employee.getRole()).toEqual('Intern');
    });   
});

describe('getSchool', () => {
    it('should return the school of the employee', () => {
        const employee = new Intern('Rufus', 0, 'rufus.the.mag@akc.org', 'GA Tech');

        expect(employee.getSchool()).toEqual('GA Tech');
    });
});
