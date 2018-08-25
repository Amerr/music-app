import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

const {
  attr
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  genre: attr('number'),
  cover: attr('string'),
  year: attr('date'),
  songs: hasMany('song')
});
