'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail)
  $('#change-password')[0].reset()
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(function () {
      delete store.user
      return store
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  api,
  getFormFields,
  ui,
  store,
  onSignUp,
  onSignIn,
  onSignOut,
  addHandlers
}
