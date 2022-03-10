class Employee {
    constructor(name, id, email){ 
      if (typeof name !== "string" || !name.trim().length) {
         throw new Error("Expected parameter 'name' to be a non-empty string");
       }
     
       if (typeof id !== "number" || isNaN(id)) {
         throw new Error("Expected parameter 'id' to be a number");
       }

       if (typeof email !== "string" || !email.trim().length) {
         throw new Error("Expected parameter 'email' to be a non-empty string");
       }
     
   
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
    }


    getName(){
       return this.name;
    };

    getID(){
      return this.id;
   };

   getEmail(){
      return this.email;
   };

   getRole(){
      return this.role;
   };
  }
  
  module.exports = Employee;