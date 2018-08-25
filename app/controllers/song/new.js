import Ember from 'ember';

const {
  get,
  computed: {
    alias
  }
} = Ember;

export default Ember.Controller.extend({
  song: alias('model.song'),
  artists: alias('model.artists'),
  genres: alias('model.genres'),
  actions: {
    updateGenre(genre) {
      get(this, 'song').set('genre', genre);
    },
    updateArtist(artist) {
      get(this, 'song').set('artist', artist);
    },
    save() {
      get(this, 'song').save().then((song) => {
        this.transitionToRoute('song.show', song);
      });
    }
  }
});