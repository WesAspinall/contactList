import Backbone from 'backbone';
import {APP_URL} from '../parse_data';

export default Backbone.Model.extend({

  urlRoot: APP_URL,

  idAttribute: 'objectId' 
  // set to objectId otherwise
  // it will set idAttribute to simply id,
  // and that's not what it is in Parse

});
