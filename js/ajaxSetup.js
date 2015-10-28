import $ from 'jquery';
import {APP_ID, APP_KEY} from './parse_data.js'
$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});