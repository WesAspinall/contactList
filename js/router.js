import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import {
Turtles as TurtleCollection
} from './resources';

import {
  Turtles as TurtlesView, 
  Turtle as TurtleView,
  Spinner
} from './views';

export default Backbone.Router.extend({

    routes: {
    ''      : "home",
    "turtles" : "showTurtles",
    "turtle/:id" : "showSpecificTurtle",
  },

initialize(appElement) {

    this.$el = appElement;
    this.collection = new TurtleCollection();
},

showSpinner() {
  this.$el.html(Spinner());
  },

home(){

  this.showSpinner();
  return home;

},

start() {
    Backbone.history.start();
    return this;
  },

});
