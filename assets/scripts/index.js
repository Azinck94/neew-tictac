'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const api = require('./api')

$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#name').val()
    console.log(input)
    $('#myModal').modal('hide')
  })
})

require('./example')

let turnCount = 0

const turnCounter = function () {
  turnCount++
}
// logic
$('#game-board').on('click', function (event) {
  if (turnCount % 2 === 0) {
    const fill = $(event.target).text()
    if (fill === '') {
      $(event.target).text('x')
      $('#game-text').text('Player 2 Turn')
      turnCount++
      console.log(turnCount)
    }
  } else {
    const fill = $(event.target).text()
    if (fill === '') {
      $(event.target).text('o')
      $('#game-text').text('Player 1 Turn')
      turnCount++
      console.log(turnCount)
    }
  }
})
// signup
$('#sign-up').on('submit', api.onSubmit)

// const winRow = function () {
//   if (
//     box0.text() === box1.text() && box1.text() === box2.text() && box0.text() !== '' ||
//     box3.text() === box4.text() && box4.text() === box5.text() && box3.text() !== '' ||
//     box6.text() === box7.text() && box7.text() === box8.text() && box6.text() !== '' ||
//   )}
//   //return (winner)
//     } else {
//       return false;
// }
//
// const winCol = function () {
//   if (
  //   box0.text() === box3.text() && box3.text() === box6.text() && box0.text() !== '' ||
  //   box1.text() === box4.text() && box4.text() === box7.text() && box1.text() !== '' ||
  //   box2.text() === box5.text() && box5.text() === box8.text() && box2.text() !== '' ||
  // )}
//   )}
//   //return (winner)
//     } else {
//       return false;
// }
//
// };
// New Game button, which should reset all squares to have a value of "''" and allow the users to start playing
$('#new-game-button').on('click', function (event) {
  console.log('button clicked')
  $('#game-text').text('New game!')
  turnCount = 0
  // Create an array to represent the game-board
  $('.game-cell').each(function () {
    $(this).text('')
  })
})

const authEvents = require('./events.js')

$(() => {
  authEvents.addHandlers()
})

module.exports = {
  turnCount,
  authEvents,
  turnCounter
}
