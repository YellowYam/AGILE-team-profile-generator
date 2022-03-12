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

    //Gets manager name
    getName(){
       return this.name;
    };

    //Gets manager ID
    getID(){
        return this.id;
     };

   //Gets manager email
   getEmail(){
        return this.email;
     };

    //Gets the overridden "Manager" role 
   getRole(){
        return this.role;
     };
   }
 

  module.exports = Manager;