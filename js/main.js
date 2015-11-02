import React from 'react';
import ReactDom from 'react-dom';

import './ajaxSetup';


import Router from './router';

let appElement = document.querySelector('.app');

new Router(appElement).start();
