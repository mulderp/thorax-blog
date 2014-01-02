define(['collection'], function (Collection) {
  return Collection.extend({
    name: 'posts',
    url: '/api/posts'
  });
});
