const Animal = require('./animal')

// concrete product
class Monkey extends Animal {
  constructor (id) {
    super()
    this.energy = 10
    this.id = id
  }

  eat () {
    this.energy += 2
    return `eats ${this.foods[Math.floor(Math.random() * 3)]}`
  }

  sound () {
    this.energy -= 4
  }

  play () {
    if (this.energy - 8 < 0) {
      return `Monkey ${this.id} say I’m too tired to play`
    } else {
      this.energy -= 8
      return `Monkey ${this.id} plays and say Oooo Oooo... total energy ${this.energy}`
    }
  }
}

module.exports = Monkey