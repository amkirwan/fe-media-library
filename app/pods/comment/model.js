import DS from 'ember-data';

export default DS.Model.extend({
  
  author: DS.attr('string'),  
  message: DS.attr('string'),
  updatedAt: DS.attr('date'),
  album: DS.belongsTo('album')
});
