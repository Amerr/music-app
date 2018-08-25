import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSong() {
      this.transitionToRoute('song.new');
    }
  }
});