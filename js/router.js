import Backbone from 'backbone';
import $ from 'jquery';

import turtleCollection from './resources/turtleCollection';


import homeView from './views/homeView';
import tInfo from './views/turtleInfo';
import showSpinner from './views/spinner';

export default Backbone.Router.extend({

    routes: {
    ''      : "redirectToTurtles",
    "turtles" : "showTurtles",
    "turtle/:id" : "showSpecificTurtle",
  },

initialize(appElement) {

    this.$el = appElement;
    this.collection = new turtleCollection();

 this.$el.on('click', '.turtle-list-item', (event) => {
      let $li = $(event.currentTarget);
      let turtleId = $li.data('turtle-id');
      this.navigate(`turtle/${turtleId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });
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

  showSpinner() {
    this.$el.html( showSpinner() );
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

   showSpecificTurtle(id) {
    let turtle = this.collection.get(id);

    if (turtle) {
      // we found the person from the collection
      this.$el.html(
        tInfo(
          turtle.templateData()
        )
      );
    } else {
      this.showSpinner();
      turtle = this.collection.add({objectId: id});
      turtle.fetch().then(() => {
        this.$el.html(
          tInfo(
            turtle.templateData()
          )
        );
      });
    }
  }


});



