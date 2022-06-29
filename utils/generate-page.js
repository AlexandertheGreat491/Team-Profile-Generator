function generateManager(data) {
    return `<div class="col s12 m6 l4">
    <div class = "card">
      <div class="card-panel purple">
         <h2>${data.getName()}</h2>
         <h3><i class="small material-icons">insert_face</i>${data.getRole()}</h1>
      </div>
      <div class="card-content">
        <li>ID: ${data.getId()}</li>
        <li>Email: <a href='mailto:${data.getEmail()}'>${data.getEmail()}</a></li>
        <li>Office number: ${data.getOfficeNumber()}</li>
      </div>
    </div>
    </div>`;
};

// calling the generateEngineers/Interns

function generateEngineer(data) {
    return `
    <div class="col s12 m6 14">
      <div class="card">
      <div class="card-panel purple">
        <h2>${data.getName()}</h2>
        <h3><i class="small material-icons">insert_laptop_windows</i>${data.getRole()}</h3>
      </div>
      <div class="card-content">
      <li>ID: ${data.getId()}</li>
      <li>Email: <a href='mailto:${getEmail()}'>${data.getEmail()}</a></li>
      <li>GitHub: ${data.getGithub()}</li>
      </div>
    </div>
    </div>
    `;
};

function generateIntern(data) {
    return `
    <div class="col s12 m6 14">
      <div class="card">
        <div class="card-panel purple">
          <h2>${data.getName()}</h2>
          <h3><i class="small material-icons">insert_school</i>${data.getRole()}</h1>
        </div>
        <div class="card-content">
          <li>ID: ${data.getId()}</li>
          <li>Email: <a href='mailto:${data.getEmail()}'>${data.getEmail()}</a></li>
          <li>School: ${data.getSchool()}</li>
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
                appearArr.push(engineerInfomration);
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