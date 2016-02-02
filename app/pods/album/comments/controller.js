import Ember from 'ember';

export default Ember.Controller.extend({
  sortProps: ['updatedAt:desc'],
  sortedComments: Ember.computed.sort('model', 'sortProps'),

  filteredComments: Ember.computed('sortedComments.@each.isNew', function() {
    let comments = this.get('sortedComments');
    return comments.filterBy('isNew', false);
  })
});
