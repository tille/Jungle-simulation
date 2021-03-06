const Animal = require('./animal')

// concrete product
class Tiger extends Animal {
  constructor (id) {
    super()
    this.id = id
  }

  sleep () {
    this.energy += 5
  }

  eat () {
    const food = this.foods[Math.floor(Math.random() * 3)]
    if (food === 'Grain') {
      return 'Say I can\'t eat Grain'
    } else {
      this.energy += 5
      return `eats ${food}`
    }
  }
}

module.exports = Tiger