const getFormFields = require('../../lib/get-form-fields')

const onSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#sign-up-modal').modal('hide')
}

module.exports = {
  onSubmit
}
