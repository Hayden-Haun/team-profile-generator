// // Hello Class!  here is strategy for attacking the team generator homework.  don't have to use it, but i love creating to do lists based on my pseducode

// pseudocode out your strategy!!

// 1) build folder structure and install necessary libraries,  npm init -y, git init etc

// 2) build 4 test files, Employee, Engineer, Intern, Manager....first time tests run they should fail, no code has been built yet, think about what you need to test? does a new object get created when you call the class? does the name, email, id arguments get set as key/value pairs on the object
// think about what class is the parent?  they are all employees and all will have name, id, email, engineer, intern, manager will be sub classes

// 3) build out questions for team manager based on requirements
// please build your team, what is your managers name?
// what is the team managers id?
// what is the team managers email?
// what is the team managers office number?
// which type of team member would you like to add?  Engineer, Intern, I dont want to add any more team members
// test that a managers object was created from the class with the correct data!!!!

// 4) create a base static HTML layout for the cards

// 5) build out the manager card with manager object dynamically

// 6) Next work on engineer object based on user input

// 7) next work on  intern object based on user input

// going to need a function that generates the html - you can use template literals  - have one js file for this, and export function to generate entire page
// for the main index js file,  import all classes,  create an empty array for teamMembers and idArray,
// grab input for manager and call that class to create an object,  then call another function to create team,  for this function use a switch statement to determine whether the user wants to create an engineer or intern and called the appropriate functions in cases.
// finally, call a funciton if they dont want to create any more team members and call the function to render the HTML to build the team

const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
