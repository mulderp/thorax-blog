    define(['jquery', 'mockjax'], function($) {
    
      'use strict';
    
      var mock = function() {
    
        $.ajaxSetup({
          dataType: 'json'
        });
    
        $.mockjax({
           url: '/api/posts',
           dataType: 'json',
           proxy: 'json/posts.json'
        });
      };
    
      return {
        start: mock
      };
    });
