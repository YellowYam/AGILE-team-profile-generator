const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./src/generateHTML')
const fs = require('fs');

/** Inquirer questions to create manager **/
const managerQuestions = [
    //Get manager name
    {
        type: 'input',
        name: 'manager_name',
        message: 'Manager name: ',
    },
     //Get manager ID
     {
        type: 'number',
        name: 'manager_ID',
        message: 'Manager ID: ',
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

/** Inquirer questions to create engineer **/
const engineerQuestions = [
    //Get engineer name
    {
        type: 'input',
        name: 'engineer_name',
        message: 'Engineer name: ',
    },
     //Get engineer ID
     {
        type: 'number',
        name: 'engineer_ID',
        message: 'Engineer ID: ',
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

            return 'Please enter a valid GitHub username.';
        },

    }
];

/** Inquirer questions to create intern **/
const internQuestions = [
    //Get intern name
    {
        type: 'input',
        name: 'intern_name',
        message: 'Intern name: ',
    },
    //Get intern ID
    {
        type: 'number',
        name: 'intern_ID',
        message: 'Intern ID: ',
    },
    //Get intern email
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

/** Inquirer questions to select new employee type **/
const employeeTypes = {
    type: 'list',
    name: 'employee_types',
    message: 'What type of employee would you like to add?',
    choices: ['Engineer', 'Intern', new inquirer.Separator(), 'End Team Creation'],
};

// Creates a new employee for the manager
function createEmployee(employees, manager) {
    inquirer.prompt(employeeTypes)
        .then((type) => {
            //Add engineer
            if (type.employee_types === 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then((engineerData) => {
                        employee = new Engineer(engineerData.engineer_name, engineerData.engineer_ID, engineerData.engineer_email_address,
                            engineerData.engineer_gitHub);
                        employees.push(employee);
                        createEmployee(employees, manager);

                    })
                    .catch((err) => { console.error(err) });
            }
            //Add intern
            else if (type.employee_types === 'Intern') {
                inquirer.prompt(internQuestions)
                    .then((internData) => {
                        employee = new Intern(internData.intern_name, internData.intern_ID, internData.intern_email_address,
                            internData.intern_school);
                        employees.push(employee);
                        createEmployee(employees, manager);

                    })
                    .catch((err) => { console.error(err) });
            }
            //End creation
            else {
                console.log('Team finished!');  
                const htmlDocument = generateHTML(employees, manager); 
                fs.writeFile(`./dist/${manager.getName().toLowerCase().split(' ').join('-')}-team-profile.html`, 
                              htmlDocument , 'utf8', (err) => err ? console.log('File written') : console.error(err));            
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
            // Set manager to id0 and create an array to hold the employees
            const manager = new Manager(data.manager_name, data.manager_ID,
                data.manager_email_address, data.manager_officeNumber)
            console.log(manager);

            const employees = [];
            createEmployee(employees, manager);

            })
            .catch((err) => console.error(err));
}

//Initialize app
init();


