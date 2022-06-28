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