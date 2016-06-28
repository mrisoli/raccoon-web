import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr(),
  thumbnail: attr(),
  creator: attr(),
  createdAt: attr()
});
