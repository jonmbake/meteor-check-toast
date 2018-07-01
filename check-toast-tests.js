import { Meteor } from 'meteor/meteor'
import { Tinytest } from "meteor/tinytest";

import checkToast from "meteor/jonmbake:check-toast";

Tinytest.add('Should throw error on check violation.', function (test) {
  test.throws(function () {
    checkToast('foo', Number);
  });
});

Tinytest.add('Should not throw error when no violation.', function (test) {
  checkToast(1, Number);
});

if (Meteor.isClient) {
  Tinytest.add('Should toast success.', function (test) {
    checkToast(1, Number, {error: 'Invalid number:(', success: 'Valid number!'});
    test.equal(1, $('.toast-success').length);
    test.equal('Valid number!', $('.toast-success .toast-message').text());
  });

  Tinytest.add('Should toast error.', function (test) {
    try {
      checkToast('foo', Number, {error: 'Invalid number:(', success: 'Valid number!'});
    } catch (e) {
      test.equal(1, $('.toast-error').length);
      test.equal('Invalid number:(', $('.toast-error .toast-message').text());
      return;
    }
    test.fail('Expected error to be thrown');
  });
}