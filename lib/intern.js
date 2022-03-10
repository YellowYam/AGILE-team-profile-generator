const Employee = require('../lib/employee');

class Intern extends Employee {

    constructor(name, id, email, school){ 
    super(name, id, email);

    if (typeof school !== "string" || !school.trim().length) {
        throw new Error("Expected parameter 'school' to be a non-empty string");
      }

    this.school = school;
    this.role = "Intern";
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

     getSchool(){
         return this.school;
     }
     getRole(){
        return this.role;
     };
  }

  module.exports = Intern;