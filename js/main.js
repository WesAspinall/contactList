import $ from 'jquery';

import _ from 'underscore';
import moment from 'moment';

import Backbone from 'backbone';
import Router from './router';


import './ajax_setup';

var appElement = $('.app');

var router = new Router(appElement);
router.start();

let router = router;

console.log('Hello, World');
