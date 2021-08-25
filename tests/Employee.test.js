const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("test new object is created when calls", () => {
    it("should be created when called", () => {
      const newName = "hayden-haun";
      const newId = "12345";
      const newEmail = "hayden@gmail";

      const newEmployee = new Employee(newName, newId, newEmail);

      const isCreated = newEmployee !== null;

      expect(isCreated).toEqual(true);

      expect(typeof newEmployee).toEqual("object");
    });
  });
});
