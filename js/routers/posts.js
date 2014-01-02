define([
  'backbone',
  'mocks',
  'collections/posts',
  'views/root',
  'views/posts/index',
  'views/posts/show'
], function (Backbone, Mock, PostsCollection, RootView, IndexView, ShowPost) {
  var collection;

  if (!collection) {
    collection = new PostsCollection();
    Mock.start();
    console.log("*** Mock Posts API ***");
  }

  return Backbone.Router.extend({
    routes: {
      "posts/:id": "showPost",
      "": "index"
    },
    index: function() {
      var view;
      collection.fetch({success: function(result) {
        view = new IndexView({collection: collection});
        console.log(collection.size());
        RootView.getInstance().setView(view);
      }});
    },
    showPost: function(id) {
      var post = collection.get(id);
      console.log(post);

      var view = new ShowPost({model: post});
      RootView.getInstance().setView(view);
    }
  });
});
