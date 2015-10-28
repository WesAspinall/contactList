import Backbone from 'backbone';
import Turtle from './turtle.js';

import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: Turtle,

  parse(data) {
    return data.results;
  }
 
});