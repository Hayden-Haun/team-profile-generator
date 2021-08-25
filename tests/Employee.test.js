// const { it, expect } = require("@jest/globals");
// const { describe } = require("yargs");
const Employee = require("../lib/Employee");

//6 tests for Employee class
describe("Employee", () => {
  describe("new object should be created when called and have values equal to the input parameters", () => {
    it("should be created when called", () => {
      //Arrange & Act
      const newEmployee = new Employee("hayden-haun", "12345", "hayden@gmail");
      const isCreated = newEmployee !== null;
      //Assert
      expect(isCreated).toEqual(true);
      expect(typeof newEmployee).toEqual("object");
    });

    it("should have values equal to the input parameters", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      //Act
      const newEmployee = new Employee(newName, newId, newEmail);
      //Assert
      expect(newEmployee.name).toEqual(newName);
      expect(newEmployee.id).toEqual(newId);
      expect(newEmployee.email).toEqual(newEmail);
    });
  });

  describe("Each of the four methods should each return their respective key value", () => {
    it(" should return object's name when getName is called", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      //Act
      const newEmployee = new Employee(newName, newId, newEmail);
      //Assert
      expect(newEmployee.getName()).toEqual(newName);
    });

    it("should return object's id when getId is called", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      //Act
      const newEmployee = new Employee(newName, newId, newEmail);
      //Assert
      expect(newEmployee.getId()).toEqual(newId);
    });

    it("should return object's email when getEmail is called", () => {
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      //Act
      const newEmployee = new Employee(newName, newId, newEmail);
      //Assert
      expect(newEmployee.getEmail()).toEqual(newEmail);
    });

    it("should return object's role when getRole is called", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      //Act
      const newEmployee = new Employee(newName, newId, newEmail);
      //Assert
      expect(newEmployee.getRole()).toEqual("Employee");
    });
  });
});
