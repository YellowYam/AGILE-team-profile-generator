//Imports parent class
const Employee = require('../lib/employee');

//Defines the intern class
class Intern extends Employee {

    constructor(name, id, email, school){ 
    //Inherits parent class attributes
    super(name, id, email);

    //Validates school property
    if (typeof school !== "string" || !school.trim().length) {
        throw new Error("Expected parameter 'school' to be a non-empty string");
      }

   //Assigns properties. (Overrides parent class role)
    this.school = school;
    this.role = "Intern";
    }

   //Gets intern name
    getName(){
       return this.name;
    };

   //Gets intern ID
    getID(){
        return this.id;
     };

   //Gets intern email
     getEmail(){
        return this.email;
     };
   
   //Gets intern school
     getSchool(){
         return this.school;
     }

     //Gets the overridden "Intern" role
     getRole(){
        return this.role;
     };
  }

  module.exports = Intern;