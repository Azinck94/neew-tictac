'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigins.production + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin.production + '/sign-in/',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  // console.log('api data is: ', data)
  // console.log('api data is: ', store)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id, // ':id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
