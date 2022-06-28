//template helper code

//creates the header section of the page
const generateHeader = headerText => {
    if (!headerText) {
        return '';
    }
    return `
        <header>
        <h1>My Team</h1>
        </header>
        `;
}

// creates team members roster

const generateRoster = rosterArr => {
    return `
    <section>
     <h2>Members</h2>
    </section>
    `;
    ${rosterArr
    .filter(({ member }) => member)
    .map(({ name, position, ID, Email, Office, GitHub }) =>{
        return `
        <div>
        <h3>${name}</h3>
        <h4>${position}</h4>
        <div>${ID}</div>
        <div>${Email}</div>
        <div>${Office}</div>
        <div>${GitHub}</div>
        </div>
        `;
    })
    .join('')
        
}
    
    
    
    
}