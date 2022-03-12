// Defines the base employee class
class Employee {
    constructor(name, id, email){ 

      //Validates constructor
      if (typeof name !== "string" || !name.trim().length) {
         throw new Error("Expected parameter 'name' to be a non-empty string");
       }
     
       if (typeof id !== "number" || isNaN(id)) {
         throw new Error("Expected parameter 'id' to be a number");
       }

       if (typeof email !== "string" || !email.trim().length) {
         throw new Error("Expected parameter 'email' to be a non-empty string");
       }
     
   //Assigns object properties to constructor arguments
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
    }

    // Gets the employee name
    getName(){
       return this.name;
    };

    //Gets the employee ID
    getID(){
      return this.id;
   };

   //Gets the employee email
   getEmail(){
      return this.email;
   };

   //Gets the employee role
   getRole(){
      return this.role;
   };
  }
  
  //Exports Employee class
  module.exports = Employee;