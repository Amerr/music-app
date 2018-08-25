import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { startMirage } from 'music-app/initializers/ember-cli-mirage';
import Ember from 'ember';

const {
  get
} = Ember;


moduleForComponent('song-item', 'Integration | Component | song item', {
  integration: true,
  beforeEach() {
    this.server = startMirage();
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let artist = server.create('artist');
  let genre = server.create('genre');
  let model = server.create('song', {
    genre, likes: 12
  });

  model.createArtist(artist.attrs);

  this.set('model', model);
  this.render(hbs`{{song-item model=model}}`);
  
  assert.equal(this.$('[data-test-song-name]').text().trim(), get(model, 'name'), 'it has rendered the Song name');
  assert.equal(this.$('[data-test-song-genre]').text().trim(), get(genre, 'name'), 'it has rendered the Song genre');
  assert.equal(this.$('[data-test-song-likes]').text().trim(), get(model, 'likes'), 'it has rendered the Song likes');
});
