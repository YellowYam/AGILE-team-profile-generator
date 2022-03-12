//Generates the HTML page for the manager and employees
function generateHTML(employees, manager) {

//Defines the head of the document
const documentHead = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./css/styles.css"/>
    <title>Team Profile Generator</title>
</head>
    <header>
        <h1>
            My Team
        </h1>
    </header>

    <main>
    <div class="card-container">
    `
//A templated manager card
    const managerCard = `<!--Manager Card-->
<div class="card">
    <div class="card-header">
        <h3>${manager.getName()}</h3>
        <h3 class="card-title"> <i class="fas fa-mug-hot"></i> Manager</h3>
    </div>

<div class="card-body">
    <ul>
    <li>ID: ${manager.getID()}</li>
    <li>Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a> </li>
    <li>Office Number: ${manager.officeNumber}</li>
    </ul>
</div>
</div>`;

    //An array to store employee cards
    let employeeCards = [];

    //HTML code for the font awesome icons
    const engineerIcon = `<i class="fas fa-glasses"></i>`;
    const internIcon = `<i class="fas fa-user-graduate"></i>`;

    //A loop that generates a card for each employee
    for (let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Engineer'){
        //Use this template for an engineer card
        const engineerTemplate = `
        <!-- An Engineer Card-->
     <div class="card">
        <div class="card-header">
            <h3>${employees[i].getName()}</h3>
            <h3 class="card-title">${engineerIcon} ${employees[i].getRole()}</h3>
        </div>
   
    <div class="card-body">
        <ul>
        <li>ID: ${employees[i].getID()}</li>
        <li>Email: <a href="mailto:${employees[i].getEmail()}" target="_blank">${employees[i].getEmail()}</a></li>
        ${`<li>GitHub: <a href="https://www.github.com/${employees[i].getGitHub()}" target="_blank">${employees[i].getGitHub()}</a></li>`}
        </ul>
    </div>
</div>
        `
        employeeCards.push(engineerTemplate);
        }
    if(employees[i].getRole() === 'Intern'){
    //Use this template for an intern card
    const internTemplate = 
    `
        <!-- An Intern Card-->
     <div class="card">
        <div class="card-header">
            <h3>${employees[i].getName()}</h3>
            <h3 class="card-title">${internIcon} ${employees[i].getRole()}</h3>
        </div>
   
    <div class="card-body">
        <ul>
        <li>ID: ${employees[i].getID()}</li>
        <li>Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
        ${`<li>School: ${employees[i].getSchool()}</li>`}
        </ul>
    </div>
</div>
        `
        employeeCards.push(internTemplate);
    }
     
    }

    //Join the employee cards to a finished HTML segment
    employeeCards = employeeCards.join('');

    //Defines the footer of the document
    const footer = `</div>
    </main>
<body>

</body>
</html>`;

    //Concatinates the finished HTML document
    const indexHTML = documentHead + managerCard + employeeCards + footer;

    //Returns the document
    return indexHTML;
}

module.exports = generateHTML;