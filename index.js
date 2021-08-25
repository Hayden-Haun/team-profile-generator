//  Require remote modules
const fs = require("fs");
const inquirer = require("inquirer");

//  Require local modules for each class/subclass
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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

// When the user chooses DONE for the next employee type, the renderHTML() function is called.
function renderHTML() {
  console.log(teamMembers);
  console.log(idArray);
}
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
        response = renderHTML();
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
        response = renderHTML();
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

//Initialize Manager function: prompts user with manager questions and passes the data into addManager function
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
        response = renderHTML();
        break;
    }
    return response;
  });
}

//Call initialize function
initManager();

// // Hello Class!  here is strategy for attacking the team generator homework.  don't have to use it, but i love creating to do lists based on my pseducode

// pseudocode out your strategy!!

//
// DONE -----1) build folder structure and install necessary libraries,  npm init -y, git init etc

// DONE ----- 2) build 4 test files, Employee, Engineer, Intern, Manager....first time tests run they should fail, no code has been built yet,
// DONE -----  think about what you need to test?
// DONE -----  does a new object get created when you call the class?
// DONE -----  does the name, email, id arguments get set as key/value pairs on the object
// DONE ----- think about what class is the parent?  they are all employees and all will have name, id, email, engineer, intern, manager will be sub classes

// DONE ----- 3) build out questions for team manager based on requirements
// DONE ----- please build your team, what is your managers name?
// DONE ----- what is the team managers id?
// DONE ----- what is the team managers email?
// DONE ----- what is the team managers office number?
// DONE ----- which type of team member would you like to add?  Engineer, Intern, I dont want to add any more team members

// test that a managers object was created from the class with the correct data!!!!

// 4) create a base static HTML layout for the cards

// 5) build out the manager card with manager object dynamically

// 6) Next work on engineer object based on user input

// 7) next work on  intern object based on user input

// going to need a function that generates the html - you can use template literals  - have one js file for this, and export function to generate entire page

// DONE ----- for the main index js file,  import all classes,  create an empty array for teamMembers and idArray,

// grab input for manager and call that class to create an object,  then call another function to create team,  for this function use a switch statement to determine whether the user wants to create an engineer or intern and called the appropriate functions in cases.

// finally, call a funciton if they dont want to create any more team members and call the function to render the HTML to build the team
