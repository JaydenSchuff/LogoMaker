const { Circle, Triangle, Square } = require("./shapes");

//Tests to make sure shapeColor is working
describe('Shape Colors', () => {
  describe("Generate Circle", function() {
    it("should pass if the circle is filled in with pink", function() {
        const shape = new Circle("pink");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="pink"/>');
    })
  })
  describe("Generate Triangle", function() {
    it("should pass if the triangle is filled in with blue", function() {
        const shape = new Triangle("blue");
        expect(shape.render()).toEqual('<polygon points="25 160, 150 10, 275 160" fill="blue" stroke-width="5"/>');
    })
  })
  describe("Generate Square", function() {
    it("should pass if the square is filled in with green", function() {
        const shape = new Square("green");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="green"/>');
    })
  })
});