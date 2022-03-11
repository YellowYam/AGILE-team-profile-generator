function generateHTML(employees, manager) {

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
    `
    const managerCard = `<!--Manager Card-->
<div class="card">
    <div class="card-header">
        <h3>${manager.getName()}</h3>
        <h3 class="card-title"> <i class="fas fa-mug-hot"></i> Manager</h3>
    </div>

<div class="card-body">
    <ul>
    <li>ID: test</li>
    <li>Email: <a href="mailto:test">test</a> </li>
    <li>Office Number: test</li>
    </ul>
</div>
</div>`;

    let employeeCards = [];

    const engineerIcon = `<i class="fas fa-glasses"></i>`;
    const internIcon = `<i class="fas fa-user-graduate"></i>`;

    for (let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Engineer'){
        const engineerTemplate = `
        <!-- An Engineer Card-->
     <div class="card">
        <div class="card-header">
            <h3>${employees[i].getName()}</h3>
            <h3 class="card-title">${engineerIcon}${employees[i].getRole()}</h3>
        </div>
   
    <div class="card-body">
        <ul>
        <li>ID: test</li>
        <li>Email: <a href="mailto:test">test</a> </li>
        ${`<li>GitHub: ${employees[i].getGitHub()}</li>`}
        </ul>
    </div>
</div>
        `
        employeeCards.push(engineerTemplate);
        }
    if(employees[i].getRole() === 'Intern'){
    const internTemplate = 
    `
        <!-- An Intern Card-->
     <div class="card">
        <div class="card-header">
            <h3>${employees[i].getName()}</h3>
            <h3 class="card-title">${internIcon}${employees[i].getRole()}</h3>
        </div>
   
    <div class="card-body">
        <ul>
        <li>ID: test</li>
        <li>Email: <a href="mailto:test">test</a> </li>
        ${`<li>School: ${employees[i].getSchool()}</li>`}
        </ul>
    </div>
</div>
        `
        employeeCards.push(internTemplate);
    }
     
    }

    employeeCards = employeeCards.join('');

    const footer = `</main>
<body>

</body>
</html>`;

    const indexHTML = documentHead + managerCard + employeeCards + footer;
    return indexHTML;
}

module.exports = generateHTML;