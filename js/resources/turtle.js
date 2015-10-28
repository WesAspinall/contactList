import Backbone from 'backbone';

let TurtleModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/ninjas',

  idAttribute: 'objectId' 
  // set to objectId otherwise
  // it will set idAttribute to simply id,
  // and that's not what it is in Parse

});


export default TurtleModel;