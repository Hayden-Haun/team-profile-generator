// When the user chooses DONE for the next employee type, the renderHTML() function is called.

function renderHTML(idArray, teamMembers) {
  console.log(teamMembers);
  console.log(idArray);

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
  }
  $(".cardContainer").append(response);
}

function managerCard(data) {
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
