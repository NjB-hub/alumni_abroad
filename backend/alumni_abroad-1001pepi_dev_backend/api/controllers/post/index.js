module.exports = {

  friendlyName: 'Index',

  description: 'Index post.',

  inputs: {
    
  },

  exits: {

  },

  fn: async function (inputs) {
    var requestorId = this.req.query["requestorId"];
    
    if(requestorId){
      await User.update({id: requestorId}).set({
        unreadPosts: false
      })
    }

    var allPosts = await Post.find({}).sort('createdAt DESC').populate(['ownerP', 'ownerProfile', 'event', 'offer']);

    return allPosts;
  }
};