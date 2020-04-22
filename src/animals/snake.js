const Animal = require('./animal')

// concrete product
class Snake extends Animal {
  constructor (id) {
    super()
    this.energy = 10
    this.id = id
  }
}

module.exports = Snake