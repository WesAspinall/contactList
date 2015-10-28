import $ from 'jquery';

const APP_ID = 'LzL1KGQ3efb9qVBFu6ihUDDCwlZC90VIZU0HTUPM';
const API_KEY = 'ZNrynchKrFONjovOLDJcJgEjrXaPC5X0UypEIzsX';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});