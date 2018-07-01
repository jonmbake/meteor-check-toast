import { Meteor } from 'meteor/meteor'
import toastr from 'toastr';

function checkToast (value, pattern, toasts = {}) {
  if (Meteor.isServer) {
    return check(value, pattern);
  }
  try {
    check(value, pattern);
    toasts.success && toastr.success(toasts.success);
  } catch (error) {
    toasts.error && toastr.error(toasts.error);
    throw error
  }
}

export default checkToast;
