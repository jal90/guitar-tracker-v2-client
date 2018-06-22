import $ from 'jquery';
import store from './store.js'

// TODO: for production change to heroku server
const apiOrigin = 'http://localhost:4741'

// Authorization Calls
const signUpCall = function (data) {
  return $.ajax({
    url: apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signInCall = function (data) {
  return $.ajax({
    url: apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOutCall = function () {
  return $.ajax({
    url: apiOrigin + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

// Guitar Calls
const getGuitarsCall = function () {
  return $.ajax({
    url: apiOrigin + '/guitars',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

export {
  signUpCall,
  signInCall,
  signOutCall,
  getGuitarsCall
}
