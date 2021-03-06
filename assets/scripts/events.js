'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const config = require('./config.js')

const onSignUp = function (event) {
  $('#game-log').text('Signed Up!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  $('#game-log').text('Signed In!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#game-board').fadeIn(500).css('display', 'block')
}
const onNewGame = function (event) {
  $('#game-board').show()
}
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('hi')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password')[0].reset()
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.signOutFailure)
  $('#game-board').fadeOut(500).css('display', 'none')
}

const addHandlers = () => {
  $('#game-board').hide()
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#new-game-button').on('submit', onNewGame)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#list-all-games').on('submit', getGameUpdates)
}
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
// const createNewGame = function (onSignIn) {
//   event.preventDefault()
//   let data = {}
//   api.newGame(data)
//     .done(ui.onSuccess)
//     .fail(ui.onError)
// }
const stats = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateGame = function (letter, index, gameOver) {
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': letter
      },
      'over': gameOver
    }
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

// const onGetGames = function (event) {
//   event.preventDefault();
//   api.getTotalGames(event)
//       .done(ui.onShowGamesTotal)
//       .fail(ui.onError)
// };
module.exports = {
  api,
  getFormFields,
  ui,
  store,
  onSignUp,
  onSignIn,
  onSignOut,
  addHandlers,
  onUpdateGame,
  stats,
  onNewGame
}

