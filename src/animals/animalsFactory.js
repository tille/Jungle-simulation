const monkey = require('./monkey')
const snake = require('./snake')
const tiger = require('./tiger')

class AnimalsFactory {
  constructor () {
    this.animals = [] 
  }

  generateForest () {
    let cant = 5
    while (cant--) {
      let type = Math.floor(Math.random() * 3) + 1;
      this.generateAnimal(type, cant + 1)
    }
  }

  generateAnimal (type, id) {
    switch (type) {
      case 1:
        this.animals.push(new monkey(id))
        break
      case 2:
        this.animals.push(new tiger(id))
        break
      case 3:
        this.animals.push(new snake(id))
        break
      default:
        break
    }
  }

  build () {
    return {
      animals: this.animals
    }
  }
}

module.exports = new AnimalsFactory()