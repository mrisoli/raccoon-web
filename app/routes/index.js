import Ember from 'ember';

let prezis = [{
  "id": "56f137f432fbb67217182785",
    "title": "incididunt amet ad nostrud",
    "thumbnail": "https://placeimg.com/400/400/any",
    "creator": {
      "name": "consectetur laborum",
      "profileUrl": "http://randomprofile.prezi.com/"
    },
    "createdAt": "March 6, 2014"
},
{
  "id": "56f137f4d62116d1231786ca",
  "title": "Lorem commodo excepteur minim",
  "thumbnail": "https://placeimg.com/400/400/any",
  "creator": {
    "name": "cupidatat excepteur",
    "profileUrl": "http://randomprofile.prezi.com/"
  },
  "createdAt": "July 31, 2015"
},
{
  "id": "56f137f46ba885ffacf4d3ff",
  "title": "ut ipsum ut nostrud",
  "thumbnail": "https://placeimg.com/400/400/any",
  "creator": {
    "name": "nisi aliquip",
    "profileUrl": "http://randomprofile.prezi.com/"
  },
  "createdAt": "July 5, 2015"
}];

export default Ember.Route.extend({
  model() {
    return prezis;
  }
});
