const gameUpdates = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + save.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
