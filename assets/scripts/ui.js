'use strict'
const store = require('./store')

const success = function () {
  $('#prompt').text('Action Successful')
}

const failure = function () {
  $('#prompt').text('There seems to have been an error')
}

const signUpSuccess = function (data) {
  console.log(data)
}

const newGameSuccess = function (data) {
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log(store.user)
}

const signOutSuccess = function () {
  store.user = null
  console.log(store.user)
}
const signOutFail = function () {
  console.log('sign out failed')
}

const changePasswordSuccess = function () {
  console.log('Password Successfully Changed.')
}
const changePasswordFailure = function (error) {
  console.log('Password Change Failed:', error)
}
const updateGameSuccess = function () {
  console.log('Game Updated Successfully')
}
const updateGameFailure = function (error) {
  console.log('Game Update Failed:', error)
}
module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFail,
  newGameSuccess,
  updateGameSuccess,
  updateGameFailure
}
