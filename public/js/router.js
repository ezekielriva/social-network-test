define(['views/index', 'views/register', 'views/login', 'views/forgotpassword'],
  function(indexView, registerView, loginView, forgotpasswordView) {
    var SocialRouter = Backbone.Router.extend({
      currentView: null,

      routes: {
        'index': 'index',
        'login': 'login',
        'register': 'register',
        'forgotpassword': 'forgotpassword'
      },

      changeView: function(view) {
        if (null != this.currentView) {
          this.currentView.undelegateEvents();
        }
        this.currentView = view;
        this.currentView.render();
      },

      index: function() {
        this.changeView( new indexView() );
      },

      register: function() {
        this.changeView( new registerView() );
      },

      login: function() {
        this.changeView( new loginView() );
      },

      forgotpassword: function() {
        this.changeView( new forgotpasswordView() );
      }
    });

    return new SocialRouter();
  });
