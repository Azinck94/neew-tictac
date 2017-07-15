'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const api = require('./api')
const events = require('./events')
const ui = require('./ui')

$(function () {
  console.log(config)
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
  checkForWin()
})
// signup
$('#sign-up').on('submit', api.onSubmit)

const checkForWin = function () {
  console.log('Working')
  if (winByRow() || winByCol() || winByDiagonal()) {
    winnerLog()
  }
}

const winByRow = function () {
  if (
    $('#box0').text() === $('#box1').text() && $('#box1').text() === $('#box2').text() && $('#box0').text() !== '' ||
    $('#box3').text() === $('#box4').text() && $('#box4').text() === $('#box5').text() && $('#box3').text() !== '' ||
    $('#box6').text() === $('#box7').text() && $('#box7').text() === $('#box8').text() && $('#box6').text() !== '') {
    console.log('row')
    return true
  } else {
    return false
  }
}

const winByCol = function () {
  if (
    $('#box0').text() === $('#box3').text() && $('#box3').text() === $('#box6').text() && $('#box0').text() !== '' ||
    $('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text() && $('#box1').text() !== '' ||
    $('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text() && $('#box2').text() !== '') {
    console.log('col')
    return true
  } else {
    return false
  }
}

const winByDiagonal = function () {
  if (
    $('#box4').text() === $('#box8').text() && $('#box8').text() === $('#box0').text() && $('#box4').text() !== '' ||
    $('#box4').text() === $('#box2').text() && $('#box2').text() === $('#box6').text() && $('#box6').text() !== '') {
    console.log('diag')
    return true
  } else {
    tieGame()
  }
}

const winnerLog = function () {
  if (turnCount % 2 === 0) {
    $('#game-text').text('Player 2 Wins')
  } else {
    $('#game-text').text('Player 1 Wins')
  }
  $('.game-cell').each(function () {
    $(this).text('')
  })
}

const drawLog = function () {
  $('#game-text').text('You Both Lose!')
}

const tieGame = function () {
  if (turnCount > 8) {
    drawLog()
  } else {
    return false
  }
}
// New Game button, which should reset all squares to have a value of "''" and allow the users to start playing
$('#new-game-button').on('click', function (event) {
  event.preventDefault()
  console.log('What the F did i do')
  const data = {}
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.failure)
  $('#game-text').text('New game!')
  turnCount = 0
  // Create an array to represent the game-board
  $('.game-cell').each(function () {
    $(this).text('')
  })
})
const stats = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const store = require('./store')

$('#list-all-games').on('click', function (event) {
  event.preventDefault()
  console.log('dude')
  const data = {}
  event.preventDefault()
  api.newGame(data)
  $('#game-log').text(data.games)
})
$('#new-game-button').on('click', function (event) {
  event.preventDefault()
  console.log('What the F did i do')
  const data = {}
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.failure)
  $('#game-text').text('New game!')
  turnCount = 0
  // Create an array to represent the game-board
  $('.game-cell').each(function () {
    $(this).text('')
  })
})
const getGameUpdates = function (stats) {
  event.preventDefault()
  console.log(data)
  stats()
    .then(function (data) {
      $('#list-games-log').val(data.games.length)
      console.log(data)
      console.log('Success')
    })
    .catch(function (data) {
      console.log('Nope')
    })
}
const authEvents = require('./events.js')

$(() => {
  authEvents.addHandlers()
  $('#game-board').hide
  $('#list-all-games').on('click', events.getGameUpdates)
  $()
})

// $('#list-all-games').on('click', events.getGameUpdates)
//
// $('#gameActionButton').on('click', events.getGameUpdates)

module.exports = {
  turnCount,
  authEvents,
  turnCounter,
  checkForWin,
  winnerLog,
  tieGame,
  drawLog,
  getGameUpdates
}
