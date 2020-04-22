#!/usr/bin/env node
'use strict'

var argv = require('minimist')(process.argv.slice(2));

const jungle = require('./src/jungle')

function main () {
  try {
    const action = jungle.perform_action()
    let { actions } = argv

    while (actions--) {
      console.log(action.next().value)
    }
  } catch (e) {
    throw new Error(`something went wrong ${e}`)
  }
}

main()