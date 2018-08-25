import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return faker.name.title(i);
  },
  duration(i) {
    return Math.ceil(Math.random(i) * 10) * 60 * 2;
  },
  likes(i) {
    return faker.random.number(i);
  },
  link(i) {
    return faker.internet.url(i)
  },
  dateOfRelease(i) {
    return faker.date.past(i);
  }
});
