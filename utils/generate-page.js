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