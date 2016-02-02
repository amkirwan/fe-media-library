import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('artist', 'Unit | Model | artist', {
  // Specify the other units that are required for this test.
  needs: ['model:album', 'model:comment']
});

test('has attr name', function(assert) {
  assert.expect(1);

  const Artist = this.store().modelFor('artist');
  const attr = Ember.get(Artist, 'attributes').get('name');
  
  assert.ok(attr);
});

test('has attr basedIn', function(assert) {
  assert.expect(1);

  const Artist = this.store().modelFor('artist');
  const attr = Ember.get(Artist, 'attributes').get('basedIn');
  
  assert.ok(attr);
});

test('has attr foundingYear', function(assert) {
  assert.expect(1);

  const Artist = this.store().modelFor('artist');
  const attr = Ember.get(Artist, 'attributes').get('foundingYear');
  
  assert.ok(attr);
});

test('has attr updatedAt', function(assert) {
  assert.expect(1);

  const Artist = this.store().modelFor('artist');
  const attr = Ember.get(Artist, 'attributes').get('updatedAt');
  
  assert.ok(attr);
});

test('has many albums', function(assert) {
  assert.expect(2);

  const Artist = this.store().modelFor('artist');
  const relationship = Ember.get(Artist, 'relationshipsByName').get('albums');

  assert.equal(relationship.key, 'albums', 'has many relationship with albums');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
