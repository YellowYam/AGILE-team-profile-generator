//Imports parent class
const Employee = require('../lib/employee');

//Defines the manager class
class Manager extends Employee {

    constructor(name, id, email, officeNumber){ 
    //Inherits parent class attributes
    super(name, id, email);

    //Validates officeNumber property
    if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
        throw new Error("Expected parameter 'officeNumber' to be a number");
      }

    //Assigns properties. (Overrides parent class role)
    this.officeNumber = officeNumber;
    this.role = "Manager"
    }

    //Gets the overridden "Manager" role 
   getRole(){
        return this.role;
     };
   }
 

  module.exports = Manager;