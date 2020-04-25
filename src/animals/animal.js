// abstract class is optional (?)
class Animal {
  constructor() {
    this.energy = 10
    this.foods = ['Fish', 'Grain', 'Meet']
  }

  sound() {
    this.energy -= 3
  }

  eat () {
    this.energy += 5
    return `eats ${this.foods[Math.floor(Math.random() * 3)]}`
  }

  sleep () {
    this.energy += 10
  }

}

module.exports = Animal