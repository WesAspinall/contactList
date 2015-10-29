import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajaxSetup';
import Backbone from 'backbone';

// Plugs in the router 
import Router from './router';

let $app = $('.app');

// This fires up the the router
new Router($app).start();

console.log('main.js router works');

 
