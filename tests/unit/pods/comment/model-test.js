import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:album']
});

test('has attr author', function(assert) {
  assert.expect(1);

  const Comment = this.store().modelFor('comment');
  const attr = Ember.get(Comment, 'attributes').get('author');
  
  assert.ok(attr);
});

test('has attr message', function(assert) {
  assert.expect(1);

  const Comment = this.store().modelFor('comment');
  const attr = Ember.get(Comment, 'attributes').get('message');
  
  assert.ok(attr);
});

test('has attr updatedAt', function(assert) {
  assert.expect(1);

  const Comment = this.store().modelFor('comment');
  const attr = Ember.get(Comment, 'attributes').get('updatedAt');
  
  assert.ok(attr);
});

test('belongs to album', function(assert) {
  assert.expect(2);

  const Comment = this.store().modelFor('comment');
  const relationship = Ember.get(Comment, 'relationshipsByName').get('album');

  assert.equal(relationship.key, 'album', 'relationship with album');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
