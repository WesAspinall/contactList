import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import turtleCollection from './turtleCollection';
import homeViewTemplate from './views/homeView';

let Router = Backbone.Router.extend({

    routes: {
    ""      : "home",
    "turtles" : "showTurtles",
    "turtle/:id" : "showSpecificTurtle",
  },

initialize(appElement) {
    this.$el = appElement;

    this.collection = new turtleCollection();


    this.$el.on('click', '.t-list-item', function(event) {
      let $li = $(event.currentTarget);
      var turtleId = $li.data('turtle-id');
      router.navigate(`ninjas/${turtleId}`);
      router.showSpecificTurtle(turtleId);
    });
  },


  showTurtles() {
    this.collection.fetch().then();
  }


})