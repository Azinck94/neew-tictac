'use strict'
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')
// require('./assets/scripts/signup.sh')
// require('./assets/scripts/signin.sh')
// require('./assets/scripts/signout.sh')
// require('./assets/scripts/change-password.sh')

'use strict'
$(() => {
  setAPIOrigin(location, config);
  console.log(authEvents); // add a log here, everything look ok?
  authEvents.addHandlers();
});
// let setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')



// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Win conditions and possible way to compare, but not working
// const win = ($('#box-1').val() === $('#box-2').val() === $('#box-3').val()) ||
// ($('#box-1').val() === $('#box-4').val() === $('#box-7').val()) ||
// ($('#box-1').val() === $('#box-5').val() === $('#box-9').val()) ||
// ($('#box-3').val() === $('#box-5').val() === $('#box-7').val()) ||
// ($('#box-3').val() === $('#box-6').val() === $('#box-9').val()) ||
// ($('#box-7').val() === $('#box-8').val() === $('#box-9').val()) ||
// ($('#box-2').val() === $('#box-5').val() === $('#box-8').val())
// if (win === true) {
//   console.log('Game Over')
// }

// Below is the logic for the game-board, which is also linked to the game-text
