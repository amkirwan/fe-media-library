import Ember from 'ember';

export default Ember.Controller.extend({

  albums: Ember.computed.reads('model.albums'),

});
