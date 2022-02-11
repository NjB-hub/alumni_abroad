module.exports = {

  friendlyName: 'Index',

  description: 'Index post.',

  inputs: {

  },

  exits: {

  },

  fn: async function (inputs) {
    var allPosts = await Post.find({}).sort('createdAt DESC').populate(['ownerP', 'ownerProfile', 'event', 'offer']);

    return allPosts;
  }
};