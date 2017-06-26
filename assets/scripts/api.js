'use strict'
const ajaxDefaults = {
  url: 'http://localhost:3000'
}

const myRequest = (data, success, fail) => {
  $.ajax(Object.assign({ method: 'POST', data }, ajaxDefaults))
  .done(success)
  .fail(fail)
}

module.exports = {
  myRequest
}
