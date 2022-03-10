const Employee = require('../lib/employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber){ 
    super(name, id, email);

    if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
        throw new Error("Expected parameter 'officeNumber' to be a number");
      }

    this.officeNumber = officeNumber;
    this.role = "Manger"
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
 

  module.exports = Manager;