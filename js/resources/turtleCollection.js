import Backbone from 'backbone';
import turtleModel from './person';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: turtleModel,

  parse(data) {
    return data.results;
  }
 
});