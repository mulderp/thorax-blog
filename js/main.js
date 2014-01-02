require([
  'jquery',
  'backbone',
  'views/root',
  'routers/posts',
  'helpers'
], function ($, Backbone, RootView, PostsRouter) {
  $(function() {
    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });

    // RootView may use link or url helpers which
    // depend on Backbone history being setup
    // so need to wait to loadUrl() (which will)
    // actually execute the route
    RootView.getInstance(document.body);

    // Initialize your routers here
    new PostsRouter();

    // This will trigger your routers to start
    Backbone.history.loadUrl();
  });
});
