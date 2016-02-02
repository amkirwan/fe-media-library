import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'fe-ember-candidate/tests/helpers/start-app';
import Pretender from 'pretender';

let server;

module('Acceptance | artists', {
  beforeEach: function() {
    this.application = startApp();

     server = new Pretender(function() {
      this.get('/api/artists', function() {
        return [200, { "Content-Type": 'application/json' }, JSON.stringify(
          {"artists":[{"id":1,"name":"foo","album_ids":[1,2]},{"id":2,"name":"bar","album_ids":[1,2]},{"id":3,"name":"qux","album_ids":[1,2]},{"id":4,"name":"baz","album_ids":[1,2]}]}
        )];
      });

      this.get('/api/artists/:artist_id', function(request) {
        return [200, { "Content-Type": 'application/json' }, JSON.stringify({"artist":{"id":request.params.artist_id,"name":"foo","album_ids":[1,2]}})];
      });
     
      this.get('/api/albums/:album_id', function(request) {
        return [200, { "Content-Type": 'application/json' }, JSON.stringify({"album":{"id":request.params.album_id,"name":"album-foo","artist_id":1}})];
      });
    });
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
    server.shutdown();
  }
});

test('visiting /artists', function(assert) {
  assert.expect(1);
  visit('/artists');

  andThen(function() {
    assert.equal(currentURL(), '/artists');
  });
});

test('lists the artists', function(assert) {
  assert.expect(1);
  visit('/artists');

  andThen(function() {
    assert.equal(find('ul.artists li').length, 4, 'The page should list 4 artists');
  });
});

test("click link to the artists albums", function(assert) {
  assert.expect(1);

  visit('/artists');
  click('a:contains("foo")');

  andThen(function() {
    assert.equal(currentURL(), '/artists/1');
  });
});

test("lists the artists albums", function(assert) {
  assert.expect(2);

  visit('/artists/1');

  andThen(function() {
    assert.equal(find('h2.artist').text(), 'foo', 'The page artist is foo');
    assert.equal(find('ul.albums li').length, 2, 'The artist foo has 2 albums');
  });
});
