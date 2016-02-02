import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('album', 'Unit | Model | album', {
  // Specify the other units that are required for this test.
  needs: ['model:artist']
});

test('has attr name', function(assert) {
  assert.expect(1);

  const Album = this.store().modelFor('album');
  const attr = Ember.get(Album, 'attributes').get('name');
  
  assert.ok(attr);
});

test('has attr year', function(assert) {
  assert.expect(1);

  const Album = this.store().modelFor('album');
  const attr = Ember.get(Album, 'attributes').get('year');
  
  assert.ok(attr);
});

test('has attr totalSold', function(assert) {
  assert.expect(1);

  const Album = this.store().modelFor('album');
  const attr = Ember.get(Album, 'attributes').get('totalSold');
  
  assert.ok(attr);
});

test('belongs to artist', function(assert) {
  assert.expect(2);

  const Album = this.store().modelFor('album');
  const relationship = Ember.get(Album, 'relationshipsByName').get('artist');

  assert.equal(relationship.key, 'artist', 'relationship with artist');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('has many to comments', function(assert) {
  assert.expect(2);

  const Album = this.store().modelFor('album');
  const relationship = Ember.get(Album, 'relationshipsByName').get('comments');

  assert.equal(relationship.key, 'comments', 'relationship with artist');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});
