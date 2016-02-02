import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('string'),
  totalSold: DS.attr('number'),
  artist: DS.belongsTo('artist', { async: true }),
  comments: DS.hasMany('comment', { async: true })
});
