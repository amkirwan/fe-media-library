import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  basedIn: DS.attr('string'),
  foundingYear: DS.attr('string'),
  updatedAt: DS.attr('date'),
  albums: DS.hasMany('album', { async: true })

});
