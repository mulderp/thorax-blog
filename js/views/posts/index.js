define([
  'view',
  'hbs!templates/posts/index'
], function (View, template) {
  return View.extend({
    name: 'posts/index',
    template: template
  });
});
