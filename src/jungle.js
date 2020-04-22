'use strict'

const animalsFactory = require('./animals/animalsFactory')

class Jungle {

  constructor () {
    animalsFactory.generateForest()
    const { animals } = animalsFactory.build()
    this.animals = animals
  }

  animal_action (animal, action_id) {
    let action = ''

    switch (action_id) {
      case 1:
        animal.sound()
        action = 'make a sound'
        break
      case 2:
        action = animal.eat()
        break
      case 3:
        animal.sleep()
        action = 'go to sleep'
        break
      default:
        break
    }
    return action
  }

  animal_message (action_id) {
    const id = Math.floor(Math.random() * 5) + 1;
    const animal = this.animals.find(el => el.id === id)
    const action = this.animal_action(animal, action_id)
    return `${animal.constructor.name} ${id} ${action}... total energy ${animal.energy}`
  }

  jungle_sound () {
    let message = this.animals.map(animal => {
      animal.sound()
      return `\t${animal.constructor.name} ${animal.id} energy ${animal.energy}\n`
    })
    return `\n\tJUNGLE ROARS !!! \n ${message.join('')}`
  }

  monkey_play () {
    const monkeys = this.animals.filter(el => el.constructor.name == 'Monkey')
    if (monkeys.length === 0) return "There are no monkeys."
    return monkeys[Math.floor(Math.random() * monkeys.length)].play() 
  }

  * perform_action () {
    while (true) {
      const action_id = Math.floor(Math.random() * 5) + 1;

      if (action_id < 4) {
        yield this.animal_message(action_id)
      } else if (action_id == 4) {
        yield this.jungle_sound()
      } else {
        yield this.monkey_play()
      }
    }
  }
}

module.exports = new Jungle()