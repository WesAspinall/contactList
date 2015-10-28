import Backbone from 'backbone';
import TurtleModel from './turtle_model';

let TurtleCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/ninjas',

  model: TurtleModel,

  parse: function(data) {
    return data.results;
  }

});

export default TurtleCollection;