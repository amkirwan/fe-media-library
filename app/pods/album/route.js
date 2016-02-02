import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('album', params.album_id);
  },

  actions: {
    newComment: function(album) {
      let comment = this.store.createRecord('comment');
      comment.set('album', album);
      return this.render('album/comment/new', {
        into: 'album',
        outlet: 'new-comment',
        controller: 'album/comment/new',
        model: comment
      });
    },

    saveComment: function(comment) {
      comment.save().then(() => {
        this.disconnectOutlet({
          outlet: 'new-comment',
          parentView: 'album'
        });
      }, (error) => {
        console.log(error);
      });
    },
    cancelComment: function(comment) {
      if (comment.get('isNew')) {
        comment.deleteRecord();
      }

      this.disconnectOutlet({
        outlet: 'new-comment',
        parentView: 'album'
      });
    }
  }
});
