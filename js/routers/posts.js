define([
  'backbone',
  'mocks',
  'collections/posts'
], function (Backbone, Mock, PostsCollection) {
  var collection;

  if (!collection) {
    collection = new PostsCollection();
    Mock.start();
    console.log("*** Mock Posts API ***");
  }

  return Backbone.Router.extend({
    routes: {
      "posts/:slug": "showPost",
      "": "index"
    },
    index: function() {
    },
    showPost: function() {
    }
  });
});
