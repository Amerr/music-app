import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('song', {
    path: '/song'
  }, function() {
    this.route('new', {
      path: 'new'
    });
    this.route('show', {
      path: 'show/:song_id'
    });
    this.route('edit', {
      path: 'edit/:song_id'
    });
  });
});

export default Router;
