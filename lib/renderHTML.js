// When the user chooses DONE for the next employee type, the renderHTML() function is called.

//Bring in Module fs to write file
const fs = require("fs");

//This function writes the aggregate text into dist/index.html
function writeToFile(data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    err ? console.log(err) : console.log("Complete! Please see index.html");
  });
}

//This function renders the HTML before the employee cards
function renderTop() {
  return `\n
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- LINK BOOTSTRAP  -->
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Your Team's Profile</title>
      </head>
  
    <body>
      <nav class="bg-dark text-light text-center p-3">
        <h1>Your Team's Profile</h1>
      </nav>
  
      <main
        class="
          container
          d-flex
          flex-row
          justify-content-center
          align-items-center
          col-10">
        <div class="row cardContainer"></div>
  `;
}

//This function renders the HTML below the employee cards
function renderBottom() {
  return `\n    
      </main>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Custom JS file -->
    <script src="./index.js"></script>
    </body>
  </html>`;
}

//this function takes each id in the Array and calls a create card function depending on it's value. It uses the same index as the teamMembers array to pull data in order
function renderHTML(idArray, teamMembers) {
  // console.log(teamMembers);
  // console.log(idArray);

  let currentPage = renderTop();

  for (let i = 0; i < idArray.length; i++) {
    switch (idArray[i]) {
      case "Manager":
        response = managerCard(teamMembers[i]);
        break;
      case "Engineer":
        response = engineerCard(teamMembers[i]);
        break;
      case "Intern":
        response = internCard(teamMembers[i]);
        break;
    }
    currentPage += response;
  }
  let finalPage = currentPage + renderBottom();

  return writeToFile(finalPage);
}

//Creates a manager card
function managerCard(data) {
  return `
  <div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-success">
      <h3>${data.name}</h3>
      <div class="d-flex flex-row">
        <img class="icon-image" src="../src/manager.jpeg" />
        <p class="m-2">Manager</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item"> 
      Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
      </li>
      <li class="list-group-item">Office Number = ${data.officeNumber}</li>
    </ul>
</div>`;
}

//Creates an engineer card
function engineerCard(data) {
  return `
  <div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-warning">
      <h3>${data.name}</h3>
    <div class="d-flex flex-row">
      <img class="icon-image" src="../src/engineer.jpeg" />
      <p class="m-2">Engineer</p>
    </div>
  </div>
  <ul class="list-group list-group-flush text-dark">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">
        Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
    </li>
    <li class="list-group-item">  
      GitHub = <a href="https://github.com/${data.gitHub}" target="no_blank">${data.gitHub}</a>
  </li>
  </ul>
</div>`;
}

//Creates an intern card
function internCard(data) {
  return `<div class="card m-4 text-light" style="width: 24rem">
  <div class="card-header bg-info">
    <h3>${data.name}</h3>
    <div class="d-flex flex-row">
      <img class="icon-image" src="../src/intern.png" />
      <p class="m-2">Intern</p>
    </div>
  </div>
  <ul class="list-group list-group-flush text-dark">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">
      Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
  </li>
    <li class="list-group-item">School: ${data.school}</li>
  </ul>
</div>`;
}

//Export code to index.js
module.exports = renderHTML;
