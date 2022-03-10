const Employee = require('../lib/employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber){ 
    super(name, id, email);
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