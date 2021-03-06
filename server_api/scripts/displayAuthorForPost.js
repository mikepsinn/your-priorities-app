var models = require('../models');
var async = require('async');
var ip = require('ip');
var _ = require('lodash');

var postId = process.argv[2];

models.Post.find({
  where: {
    id: postId
  },
  include: [
    models.User
  ]
}).then(function (post) {
  console.log(post.User.name+" "+post.User.email);
  process.exit();
});

