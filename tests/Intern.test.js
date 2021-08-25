const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

//3 tests for Intern subclass
describe("Intern", () => {
  describe("new object should be created when called and have values equal to the input parameters", () => {
    it("should create an object when called", () => {
      //Arrange & Act
      const newIntern = new Intern(
        "hayden-haun",
        "12345",
        "haydenhaun@gmail.com",
        "Denver University"
      );
      const isCreated = newIntern !== null;
      //Assert
      expect(isCreated).toEqual(true);
      expect(typeof newIntern).toEqual("object");
    });

    it("should have values equal to the input parameters", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      const newSchool = "Denver University";
      //Act
      const newIntern = new Intern(newName, newId, newEmail, newSchool);
      //Assert
      expect(newIntern.name).toEqual(newName);
      expect(newIntern.id).toEqual(newId);
      expect(newIntern.email).toEqual(newEmail);
      expect(newIntern.school).toEqual(newSchool);
    });
  });

  describe("the getRole method should return it's respective key value", () => {
    it("should return Engineer when called", () => {
      //Arrange
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";
      const newSchool = "Denver University";
      //Act
      const newIntern = new Intern(newName, newId, newEmail, newSchool);

      //Assert
      expect(newIntern.getRole()).toEqual("Intern");
    });
  });
});
