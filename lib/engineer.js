//Imports parent class
const Employee = require('../lib/employee');

//Defines the engineer class
class Engineer extends Employee {

    constructor(name, id, email, gitHub){ 
    //Inherits parent class attributes
    super(name, id, email);

    //Validates gitHub property
    if (typeof gitHub !== "string" || !gitHub.trim().length) {
        throw new Error("Expected parameter 'gitHub' to be a non-empty string");
      }

   //Assigns properties. (Overrides parent class role)
    this.gitHub = gitHub;
    this.role = 'Engineer';
    }

   //Gets engineer name
    getName(){
       return this.name;
    };

    //Gets engineer ID
    getID(){
        return this.id;
     };

   //Gets engineer email
     getEmail(){
        return this.email;
     };

   //Gets engineer gitHub
     getGitHub(){
        return this.gitHub;
     };

   //Gets the overridden "Engineer" role
     getRole(){
        return this.role;
     };
  }

  //Exports the engineer class
  module.exports = Engineer;
  