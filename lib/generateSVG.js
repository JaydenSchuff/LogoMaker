const { Circle, Triangle, Square } = require("./shapes");

//This function takes in your responses from the questions and builds the svg file that can be written
function genSVG(response) {

    if (response.shape === "Circle") {
        response.shape = new Circle(response.shapeColor);
    }
    else if (response.shape === "Triangle") {
        response.shape = new Triangle(response.shapeColor);
    }
    else if (response.shape === "Square") {
        response.shape = new Square(response.shapeColor);
    }
    
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${response.shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.title}</text>
    </svg>
    `
  };
  
  module.exports =  {genSVG};