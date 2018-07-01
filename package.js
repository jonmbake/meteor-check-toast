Package.describe({
  name: 'jonmbake:check-toast',
  version: '0.0.3',
  summary: 'Enhances the meteor check package by optionally toasting a success or error messages on the client.',
  git: 'https://github.com/jonmbake/meteor-check-toast',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.3');
  api.use(['ecmascript', 'check']);
  api.addFiles('.npm/package/node_modules/toastr/build/toastr.css', 'client');
  api.mainModule('check-toast.js');
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'jquery']);
  api.use('jonmbake:check-toast');
  api.addFiles('.npm/package/node_modules/toastr/build/toastr.css', 'client');
  api.mainModule('check-toast-tests.js');
});

Npm.depends({
  toastr: '2.1.4'
});
