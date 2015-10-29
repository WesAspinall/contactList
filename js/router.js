import Backbone from 'backbone';
import $ from 'jquery';

import turtleCollection from './resources/turtleCollection';
import turtleModel from './resources/turtleModel';

import homeView from './views/homeView';
import turtleInfo from './views/turtleInfo';

export default Backbone.Router.extend({

    routes: {
    ''      : "redirectToTurtles",
    "turtles" : "showTurtles",
    "turtle/:id" : "showSpecificTurtle",
  },

initialize(appElement) {

    this.$el = appElement;
    this.collection = new turtleCollection();
},



 redirectToTurtles() {
    this.navigate('turtles', {
      replace: true,
      trigger: true
    });
  },


  showTurtles() {
    this.collection.fetch().then(() => {
      this.$el.html(
        homeView(
          this.collection.toJSON()
        )
      );
    });
  },


start() {
    Backbone.history.start();
    return this;
  },

});

