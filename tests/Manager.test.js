// const { it, expect } = require("@jest/globals");
// const { describe } = require("yargs");
// const { expect } = require("@jest/globals");
// const { shouldInstrument } = require("@jest/transform");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

//3 tests for Manager class
describe("Manager", () => {
  describe("new object should be created when called and have values equal to the input parameters", () => {
    it("should be created when called", () => {
      //Arrange & Act
      const newManager = new Manager(
        "hayden-haun",
        "12345",
        "haydenhaun@gmail.com",
        "555"
      );
      const isCreated = newManager !== null;
      //Assert
      expect(isCreated).toEqual(true);
      expect(typeof newManager).toEqual("object");
    });

    it("should have values equal to the input parameters", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      const newOfficeNumber = "555";
      //Act
      const newManager = new Manager(newName, newId, newEmail, newOfficeNumber);
      //Assert
      expect(newManager.name).toEqual(newName);
      expect(newManager.id).toEqual(newId);
      expect(newManager.email).toEqual(newEmail);
      expect(newManager.officeNumber).toEqual(newOfficeNumber);
    });
  });

  describe("the getRole method should return it's respective key value", () => {
    it("should return Manager when called", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      const newOfficeNumber = "555";
      //Act
      const newManager = new Manager(newName, newId, newEmail, newOfficeNumber);

      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
