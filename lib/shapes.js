//All ofthe shape classes that utilize the shapeColor param from the prompt questions
class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    //If you somehow were able to bypass choosing a shape, it would give you this error
    render(){
        return new Error("No shape selected!")
    }
}

class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
      }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
      }

    render() {
        return `<polygon points="25 160, 150 10, 275 160" fill="${this.shapeColor}" stroke-width="5"/>`
    }
}

class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
      }

    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`
    }
}

//this exports the Circle, Triangle and Square classes that will all be imported inside of shapes.test and generateSvg
module.exports = {Circle, Triangle, Square};