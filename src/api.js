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

const createGuitarCall = function (data) {
  return $.ajax({
    url: apiOrigin + '/guitars',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
}

const updateGuitarCall = function (data, id) {
  return $.ajax({
    url: apiOrigin + '/guitars/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
}

const deleteGuitarCall = function (id) {
  return $.ajax({
      url: apiOrigin + '/guitars/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.token
      }
    })
}

// Setup calls
const getSetupsCall = function () {
  return $.ajax({
    url: apiOrigin + '/setups',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const createSetupCall = function (data) {
  return $.ajax({
    url: apiOrigin + '/setups',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
}

export {
  signUpCall,
  signInCall,
  signOutCall,
  getGuitarsCall,
  createGuitarCall,
  updateGuitarCall,
  deleteGuitarCall,
  getSetupsCall,
  createSetupCall
}
