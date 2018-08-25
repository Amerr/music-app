import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

const {
  attr
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  songs: hasMany('song')
});
