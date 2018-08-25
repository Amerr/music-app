import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  album: belongsTo('album'),
  artist: hasMany('artist'),
  genre: belongsTo('genre')
});
