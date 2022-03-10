const Employee = require('../lib/employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber){ 
    super(name, id, email);
    this.officeNumber = officeNumber;
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
        return 'Manager';
     };
   }
 

  module.exports = Manager;