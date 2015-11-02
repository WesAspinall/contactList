import Backbone from 'backbone';
import photoModel from './photoModel';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: photoModel,

  parse(data) {
    return data.results;
  }
 
});