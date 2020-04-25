const Animal = require('./animal')

// concrete product
class Snake extends Animal {
  constructor (id) {
    super()
    this.id = id
  }
}

module.exports = Snake