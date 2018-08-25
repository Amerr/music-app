import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.name.title(i);
  },
  genre(i) {
    return faker.random.number(i);
  },
  cover(i) {
    return faker.image.abstract(i)
  },
  year(i) {
    return faker.date.past(i);
  }
});
