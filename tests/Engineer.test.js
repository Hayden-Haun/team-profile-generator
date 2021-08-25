// const { describe } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("new object should be created when called and have values equal to the input parameters", () => {
    it("should create an object when called", () => {
      //Arrange & Act
      const newEngineer = new Engineer(
        "hayden-haun",
        "12345",
        "haydenhaun@gmail.com",
        "Hayden-Haun"
      );
      const isCreated = newEngineer !== null;
      //Assert
      expect(isCreated).toEqual(true);
      expect(typeof newEngineer).toEqual("object");
    });

    it("should have values equal to the input parameters", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      const newGitHub = "Hayden-Haun";
      //Act
      const newEngineer = new Engineer(newName, newId, newEmail, newGitHub);
      //Assert
      expect(newEngineer.name).toEqual(newName);
      expect(newEngineer.id).toEqual(newId);
      expect(newEngineer.email).toEqual(newEmail);
      expect(newEngineer.gitHub).toEqual(newGitHub);
    });
  });

  describe("the getRole method should return it's respective key value", () => {
    it("should return Engineer when called", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      const newGitHub = "Hayden-Haun";
      //Act
      const newEngineer = new Engineer(newName, newId, newEmail, newGitHub);

      expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });
});
