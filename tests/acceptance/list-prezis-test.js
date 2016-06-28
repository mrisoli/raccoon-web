import { test } from 'qunit';
import moduleForAcceptance from 'raccoon-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should list prezis.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 100, 'should see 100 prezis');
  });
});

test('should filter the list of prezis by title.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'Lorem');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 9, 'should show 9 listing');
    assert.equal(find('.listing .title:contains("Lorem")').length, 9, 'should contain 9 listings with title including lorem');
  });
});
