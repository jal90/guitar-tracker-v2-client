// TODO: The idea for this file is to have all AJAX calls in one place, so they're not taking up
// space and cluttering components. This is easier said than done. One solution I can think of is
// to make this a React component with all the functions that can pass the functions as props to other
// components. This might require this becoming a parent component right under App, in which case,
// might as well keep the functions in the App component. None of this is necessary. Will do more research
// on best practices.

// const $ = require('jquery');
// const store = require('./store.js')
//
// const getGuitars = function () {
//   $.ajax({
//     url: 'http://localhost:4741/guitars',
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.token
//     }
//   })
//     .then(res => {
//       const guitars = res
//       this.setState({ guitars })
//     })
//     .then(() => console.log(this.state))
// }
//
// module.exports = {
//   getGuitars
// }
