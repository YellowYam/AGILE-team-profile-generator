const Employee = require('../lib/employee');

class Engineer extends Employee {

    constructor(name, id, email, gitHub){ 
    super(name, id, email);
    this.gitHub = gitHub;
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
        return 'Engineer';
     };
  }

  module.exports = Engineer;
  