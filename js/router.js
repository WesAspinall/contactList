import Backbone from 'backbone';
import $ from 'jquery';

import turtleCollection from './resources/turtleCollection';


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

// createPerson(data){
//   this.showSpinner();
//   let newPerson  = this.collection.add();
//   newPerson.save().then(() => {
//     this.showPeople();
//   });
// }

start() {
    Backbone.history.start();
    return this;
  },

});

