import $ from 'jquery';
import Router from './router';
import './ajaxSetup';

var appElement = $('.app');

var router = new Router(appElement);
router.start();


console.log('Hello, World');