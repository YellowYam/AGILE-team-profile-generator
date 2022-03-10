const Employee = require('../lib/employee');

class Engineer extends Employee {

    constructor(name, id, email, gitHub){ 
    super(name, id, email);

    if (typeof gitHub !== "string" || !gitHub.trim().length) {
        throw new Error("Expected parameter 'gitHub' to be a non-empty string");
      }

    this.gitHub = gitHub;
    this.role = 'Engineer';
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

     getGitHub(){
        return this.gitHub;
     };

     getRole(){
        return this.role;
     };
  }

  module.exports = Engineer;
  