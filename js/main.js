import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajaxSetup';
import Backbone from 'backbone'

import Router from './router';

let $app = $('.app');

var router = new Router();
router.start();

 
