define([
  'view',
  'hbs!templates/posts/show'
], function (View, template) {
  return View.extend({
    name: 'posts/show',
    template: template
  });
});
