import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
  this.route('artist', { path: 'artists/:artist_id' });
  this.route('album', { path: 'albums/:album_id' }, function() {
    this.route('comments', { path: '/' });
    this.route('comment', function() {
      this.route('new');
    });
  });
});

export default Router;
