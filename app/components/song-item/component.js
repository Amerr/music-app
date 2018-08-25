import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  didInsertElement() {
    debugger;
    this._super(...arguments);
  }
});
