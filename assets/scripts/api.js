'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log(config.apiOrigin)
  return $.ajax({
    url: config.apiOrigin.development + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin.development + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin.development + '/change-password/' + store.user.id, // ':id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin.development + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function (data) {
  console.log('yo')
  return $.ajax({
    url: config.apiOrigin.development + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const gameTally = function () {
  console.log('hey')
  return $.ajax({
    url: config.apiOrigin.development + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin.development + '/games' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  gameTally,
  updateGame
}
