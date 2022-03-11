const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');


const managerQuestions = [
    //Get manager name
    {
        type: 'input',
        name: 'manager_name',
        message: 'Manager name: ',
    },
    //Get user email
    {
        type: 'input',
        name: 'manager_email_address',
        message: 'Enter the manager email: ',
        validate(value) {
            const pass = value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
            if (pass) {
                return true;
            }

            return 'Please enter a valid email.';
        },

    },
    {
        type: 'number',
        name: 'manager_officeNumber',
        message: 'Manager\'s office number: ',
    },
];

const engineerQuestions = [
    //Get engineer name
    {
        type: 'input',
        name: 'engineer_name',
        message: 'Engineer name: ',
    },
    //Get engineer email
    {
        type: 'input',
        name: 'engineer_email_address',
        message: 'Enter the engineer email: ',
        validate(value) {
            const pass = value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
            if (pass) {
                return true;
            }

            return 'Please enter a valid email.';
        },

    },
    //Get engineer GitHub
    {
        type: 'input',
        name: 'engineer_gitHub',
        message: 'Enter the engineer GitHub username: ',
        validate(value) {
            const pass = value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
            if (pass) {
                return true;
            }

            return 'Please enter a valid email.';
        },

    }
];

const internQuestions = [
    //Get intern name
    {
        type: 'input',
        name: 'intern_name',
        message: 'Intern name: ',
    },
    //Get engineer email
    {
        type: 'input',
        name: 'intern_email_address',
        message: 'Enter the intern email: ',
        validate(value) {
            const pass = value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
            if (pass) {
                return true;
            }

            return 'Please enter a valid email.';
        },

    },
    //Get intern school
    {
        type: 'input',
        name: 'intern_school',
        message: 'Enter the intern\'s school: ',
    }
];

const employeeTypes = {
    type: 'list',
    name: 'employee_types',
    message: 'What type of employee would you like to add?',
    choices: ['Engineer', 'Intern', new inquirer.Separator(), 'End Team Creation'],
};

function createEmployee(id) {
    inquirer.prompt(employeeTypes)
        .then((type) => {
            console.log(type);
            //Add engineer
            if (type.employee_types === 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then((engineerData) => {
                        employee = new Engineer(engineerData.engineer_name, id, engineerData.engineer_email,
                            engineerData.engineer_gitHub);
                        employees.push(employee);
                        id++;
                        createEmployee();

                    })
                    .catch((err) => { console.error(err) });
            }
            //Add intern
            else if (type.employee_types === 'Intern') {
                inquirer.prompt(internQuestions)
                    .then((internData) => {
                        employee = new Intern(internData.intern_name, id, internData.intern_email,
                            internData.intern_school);
                        employees.push(employee);
                        id++;
                        createEmployee();

                    })
                    .catch((err) => { console.error(err) });
            }
            //End creation
            else {
                console.log('Team finished!');
            }

        })
        .catch((err) => console.error(err));
}

function init() {
    //Begin inputs
    inquirer
        //Ask manager questions
        .prompt(managerQuestions)
        .then((data) => {
            console.log(data);
            // Set manager to id0 and create an array to hold the employees
            data.managerID = 0;
            const manager = new Manager(data.manager_name, data.managerID,
                data.manager_email_address, data.manager_officeNumber)
            employees = [];

            //Setup employee creation loop
            let id = 1;

            createEmployee(id);

            })
            .catch((err) => console.error(err));


        
}

//Initialize app
init();

