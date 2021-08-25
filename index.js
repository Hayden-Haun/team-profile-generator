//  Require remote modules
const fs = require("fs");
const inquirer = require("inquirer");

//  Require local modules for each class/subclass
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const renderHTML = require("./lib/renderHTML.js");

// Initialize empty arrays
const idArray = [];
const teamMembers = [];

//3 Arrays of questions defined for each team member type
const managerQuestions = [
  {
    type: "input",
    message:
      "Welcome to the Team Profile Generator! What is the Manager's Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team manager's Employee ID Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team manager's Email Address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team manager's Office Number?",
    name: "special",
  },
  {
    type: "list",
    message:
      "Please choose an employee role to add a member to the team, otherwise choose DONE",
    name: "nextEmployeeType",
    choices: ["Engineer", "Intern", "DONE"],
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's Employee ID Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's Email Address?",
    name: "email",
  },
  {
    type: "input",
    message: "What School does the intern attend?",
    name: "special",
  },
  {
    type: "list",
    message:
      "Please choose an employee type to add a member to the team, otherwise choose DONE",
    name: "nextEmployeeType",
    choices: ["Engineer", "Intern", "DONE"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's Employee ID Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's Email Address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub Username?",
    name: "special",
  },
  {
    type: "list",
    message:
      "Please choose an employee type to add a member to the team, otherwise choose DONE",
    name: "nextEmployeeType",
    choices: ["Engineer", "Intern", "DONE"],
  },
];

//  -----   FUNCTIONS   -----
//  Takes data answered in manager prompt and creates a new Manager object. Appends this to the team array.
function addIntern(data) {
  const newIntern = new Intern(data.name, data.id, data.email, data.special);
  return newIntern;
}

//  Initialize Engineer function: prompts user with Engineer questions and passes the data into addEngineer function
function initIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    const newEmployee = addIntern(data);
    const nextType = data.nextEmployeeType;

    teamMembers.push(newEmployee);

    switch (nextType) {
      case "Engineer":
        response = initEngineer();
        idArray.push("Engineer");
        break;
      case "Intern":
        response = initIntern();
        idArray.push("Intern");
        break;
      case "DONE":
        response = renderHTML(idArray, teamMembers);
        break;
    }
    return response;
  });
}

//  Takes data answered in manager prompt and creates a new Manager object. Appends this to the team array.
function addEngineer(data) {
  const newEngineer = new Engineer(
    data.name,
    data.id,
    data.email,
    data.special
  );
  return newEngineer;
}

//  Initialize Engineer function: prompts user with Engineer questions and passes the data into addEngineer function
function initEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const newEmployee = addEngineer(data);
    const nextType = data.nextEmployeeType;

    teamMembers.push(newEmployee);

    switch (nextType) {
      case "Engineer":
        response = initEngineer();
        idArray.push("Engineer");
        break;
      case "Intern":
        response = initIntern();
        idArray.push("Intern");
        break;
      case "DONE":
        response = renderHTML(idArray, teamMembers);
        break;
    }
    return response;
  });
}

//  Takes data answered in manager prompt and creates a new Manager object. Appends this to the team array.
function addManager(data) {
  const newManager = new Manager(data.name, data.id, data.email, data.special);
  return newManager;
}

//  Initialize Manager function: prompts user with manager questions and passes the data into addManager function
function initManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const newEmployee = addManager(data);
    const nextType = data.nextEmployeeType;

    teamMembers.push(newEmployee);
    idArray.push("Manager");

    switch (nextType) {
      case "Engineer":
        response = initEngineer();
        idArray.push("Engineer");
        break;
      case "Intern":
        response = initIntern();
        idArray.push("Intern");
        break;
      case "DONE":
        response = renderHTML(idArray, teamMembers);
        break;
    }
    return response;
  });
}

//  Call initialize function
initManager();
