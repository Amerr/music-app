import Ember from 'ember';

const {
  RSVP: {
    hash
  }
} = Ember;

export default Ember.Route.extend({
  model() {
    return hash({
      artists: this.store.findAll('artist'),
      genres: this.store.findAll('genre'),
      song: this.store.createRecord('song')
    })
  }
});
