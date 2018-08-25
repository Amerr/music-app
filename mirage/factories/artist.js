import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.name.findName(i);
  },
  avatar(i) {
    return faker.image.avatar(i)
  }
});
