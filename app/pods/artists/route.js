import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let params = { sort_direction: 'asc', sort_on: 'name' };
    return this.store.query('artist', params);
  }
});
