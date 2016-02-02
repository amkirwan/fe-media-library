import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['sort_direction', 'sort_on'],
  sortDirection: Ember.computed.reads('sort_direction'),
  sortOn: Ember.computed.reads('sort_on'),

  sortProps: Ember.computed('sortDirection', 'sortOn', function() {
    let sortDir = this.get('sortDirection');
    let sortOn = this.get('sortOn');

    return [`${sortOn}:${sortDir}`];
  }),

  sortedArtists: Ember.computed.sort('model', 'sortProps')
});
