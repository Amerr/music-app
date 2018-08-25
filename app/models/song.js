import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

const {
  attr
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  duration: attr('number'),
  likes: attr('number'),
  link: attr('string'),
  dateOfRelease: attr('date'),
  album: belongsTo('album'),
  artist: hasMany('artist'),
  genre: belongsTo('genre')
});
