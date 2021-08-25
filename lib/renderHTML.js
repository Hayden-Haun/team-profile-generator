// When the user chooses DONE for the next employee type, the renderHTML() function is called.
// const { fstat } = require("fs");
// var jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = new JSDOM("").window;
// global.document = document;
// var $ = (jQuery = require("jquery")(window));

const fs = require("fs");

function writeToFile(data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    err ? console.log(err) : console.log("Complete! Please see index.html");
  });
}

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

function renderHTML(idArray, teamMembers) {
  console.log(teamMembers);
  console.log(idArray);

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
  //console.log(finalPage);
  return writeToFile(finalPage);
}

function managerCard(data) {
  console.log("managerCard working");
  return `
  <div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-success">
      <h3>${data.name}</h3>
      <div class="d-flex flex-row">
        <img class="icon-image" src="./src/manager.jpeg" />
        <p class="m-2">Manager</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item"> 
      Email: <a href="mailto:${data.email}" target="no_blank">${data.email}</a>
      </li>
      <li class="list-group-item">Office Number = ${data.special}</li>
    </ul>
</div>`;
}

function engineerCard(data) {}

function internCard(data) {}

//Export code to index.js
module.exports = renderHTML;
