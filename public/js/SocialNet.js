define(['router'], function(router) {
  var initialize = function() {
    checkLogin(runApplication);
  };

  var checkLogin = function(callback) {
    var authRequest = $.ajax('/account/authenticated');
    authRequest.done(function() { return callback(true) });
    authRequest.fail(function() { return callback(false) });
  };

  var runApplication = function(authenticated) {
    if (!authenticated) {
      window.location.hash = 'login';
    } else {
      window.location.hash = 'index';
    }
    Backbone.history.start();
  };

  return { initialize: initialize };
});
