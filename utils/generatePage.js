function generateManager(data) {
    return `<div class="col s12 m6 l4">
    <div class = "card z-depth-3">
      <div class="card-panel">
         <h2>${data.getName()}</h2>
         <h3><i class="small material-icons">insert_face</i>${data.getRole()}</h1>
      </div>
      <div class="card-content">
        <ol>
        <li>ID: ${data.getId()}</li>
        <li>Email: <a href='mailto:${data.getEmail()}'>${data.getEmail()}</a></li>
        <li>Office number: ${data.getOfficeNumber()}</li>
        </ol>
      </div>
    </div>
    </div>`;
};

// calling the generateEngineers/Interns

function generateEngineer(data) {
    return `
    <div class="col s12 m6 14">
      <div class="card z-depth-3">
      <div class="card-panel">
        <h2>${data.getName()}</h2>
        <h3><i class="small material-icons">insert_laptop_windows</i>${data.getRole()}</h3>
      </div>
      <div class="card-content">
      <ol>
      <li>ID: ${data.getId()}</li>
      <li>Email: <a href='mailto:${data.getEmail()}'>${data.getEmail()}</a></li>
      <li>GitHub: ${data.getGithub()}</li>
      </ol>
      </div>
    </div>
    </div>
    `;
};

function generateIntern(data) {
    return `
    <div class="col s12 m6 14">
      <div class="card z-depth-3">
        <div class="card-panel">
          <h2>${data.getName()}</h2>
          <h3><i class="small material-icons">insert_school</i>${data.getRole()}</h1>
        </div>
        <div class="card-content">
        <ol>
          <li>ID: ${data.getId()}</li>
          <li>Email: <a href='mailto:${data.getEmail()}'>${data.getEmail()}</a></li>
          <li>School: ${data.getSchool()}</li>
        </ol>
        </div>
       </div>
       </div>
    `;
};

function generateTeam(teamRosterArr) {
    let totaltotalArr;
    //checking for employee type
    console.log(`generateTeam`);
    console.log(teamRosterArr);
    let appearArr = [];
    teamRosterArr.forEach(employee => {
        console.log(`switch statement`);
        console.log(employee);
        const role = employee.getRole();
        switch (role) {
            case 'Manager':
                const managerInformation = generateManager(employee);
                console.log(managerInformation);
                appearArr.push(managerInformation);
                break;
            case 'Engineer':
                const engineerInformation = generateEngineer(employee);
                console.log(engineerInformation);
                appearArr.push(engineerInformation);
                break;
            case 'Intern':
                const internInformation = generateIntern(employee);
                console.log(internInformation);
                appearArr.push(internInformation);
                break;
            default:
                'Uh-oh someting went wrong sir'

        }
        // console.log(appearArr.join(''));
        totaltotalArr = appearArr.join('');
        console.log(totaltotalArr);
    })
    return totaltotalArr;
    // calls the function specific to the type of employee.
}

function generatePage(totalArr) {
    console.log(`generate Page`)
    return`<!DOCTYPE html>
    <html lang="en">


    <head>
        <meta charset="UTF-8">
        <meta https-equiv="X-UA-Compatible" content="IE=edge">
        <!--icons-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!--Google Fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">
        <!--Custom CSS-->
        <link rel="stylesheet" href="style.css">
        <title>Employee Roster Generator</title>
    </head>

    <body>
      <header class='banner'>
        <h1 class='center-align'>Employee Roster Generator</h1>
      </header>
      <div class="container row">
      ${generateTeam(totalArr)}
      </div>
      </div>

      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <!--Custom JavaScript-->
      <script src="index.js"></script>
              
      </body>

      </html>;
    `
}

module.exports = generatePage;