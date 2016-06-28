import { test } from 'qunit';
import moduleForAcceptance from 'raccoon-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should list prezis.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 prezis');
  });
});

test('should filter the list of prezis by title.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'Lorem');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .title:contains("Lorem")').length, 1, 'should contain 1 listing with title including lorem');
  });
});
