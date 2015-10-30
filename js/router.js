import Backbone from 'backbone';
import $ from 'jquery';

import turtleCollection from './resources/turtleCollection';
import turtleModel from './resources/turtleModel';
import addNewView from './views/addNew';
import homeView from './views/homeView';
import tInfo from './views/turtleInfo';
import showSpinner from './views/spinner';

export default Backbone.Router.extend({

    routes: {
    ''             : "redirectToTurtles",
    "turtles"      : "showTurtles",
    "turtle/:id"   : "showSpecificTurtle",
    "addNew"       : "addNewNinja"
  },

initialize(appElement) {

    this.$el = appElement;
    this.collection = new turtleCollection();

this.$el.on('click', '.turtle-list-item', (event) => {
    let $li = $(event.currentTarget);
    let turtleId = $li.data('turtle-id');
    this.navigate(`turtle/${turtleId}`, {trigger: true});
  });

 this.$el.on('click', '.addNew', (event) => {
  let $button = $(event.currentTarget);
  let addNew = $button.data('addNew');
  this.navigate(`addNew`, {trigger: true});
});

  this.$el.on('click','.submit', (event) => {
   console.log('submit btton');
   let firstName = $(this.$el).find('#FirstName').val();
   let weapon = $(this.$el).find('#Weapon').val();
   let location = $(this.$el).find('#Location').val();
   let picture = $(this.$el).find('#picUrl').val();
   let email = $(this.$el).find('#Email').val();
   let newNinja = new turtleModel({
    FirstName: firstName,
    Weapon: weapon,
    Location: location,
    Picture: picture,
    Email: email
  });

      this.collection.add(newNinja);
      newNinja.save().then( () => {
        alert('new ninja added');
        this.navigate(`turtles`, {trigger: true});
      });
  
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

  addNewNinja() {
    this.collection.fetch().then(() => {
      this.$el.html(
        addNewView(
          this.collection.toJSON()
        )
      );
    });
  },

submitNewNinja() {
  this.showSpinner();
  let newNinja  = this.collection.add();
  newNinja.save().then(() => {
    this.addNewNinja();
  })
},

  showSpinner() {
    this.$el.html( showSpinner() );
  },


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



