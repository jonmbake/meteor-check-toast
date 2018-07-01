# Meteor check toast

Enhances the [meteor check package](https://github.com/meteor/meteor/tree/devel/packages/check) by optionally toasting a
success or error messages on the client.

## API

The package exports a single function of the form:

```
function checkToast (value, pattern, toasts = {error: '', success= ''})
```

The `value` and `pattern` params are passed to `check` to perform usual checking. If an  `error` toast is specified,
a toast will be shown if the check fails. If an `success` toast is specified, a toast will be shown if the check passes.  

## Example

```
import checkToast from "meteor/jonmbake:check-toast";

Meteor.methods({addChat: function (roomId, message) {
  // Will function the same as meteor check, except will toast the message, 'Invalid room id' when the check fails
  checkToast(roomId, String, {error: 'Invalid room id'});
  // ...
});

```

If the check fails, the client will see:

![Toast Example](https://raw.githubusercontent.com/jonmbake/screenshots/master/meteor-check-toast/meteor-check-toast-example.png)


## Install

```
meteor add jonmbake:check-toast
```