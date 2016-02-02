import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('album').get('comments');
  },

  actions: {
    showModal: function(name, comment) {
      this.render(name, {
        into: 'application',
        controller: 'modal',
        outlet: 'modal',
        model: comment
      });
    },

    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    deleteComment: function(comment) {
      return comment.destroyRecord();
    },

    showNewCommentModal: function(name, album) {
      let comment = this.store.createRecord('comment');
      comment.set('album', album);

      this.render(name, {
        into: 'application',
        controller: 'modal',
        outlet: 'modal',
        model: comment
      })
    },

    saveNewComment: function(comment) {
      comment.save().then(() => {
        this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }, (error) => {
        console.log(error);
      });
    }
  }
});
