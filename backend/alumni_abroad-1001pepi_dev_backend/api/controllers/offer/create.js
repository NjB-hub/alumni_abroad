module.exports = {

  friendlyName: 'Create',

  description: 'Create offer.',

  inputs: {
    company: { 
      type: 'string', 
      required: true 
    },
    post_id: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New offer created',
    },
    
    error: {
      statusCode: 400,
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try{
     
      let newOffer = await Offer.create({
        company: inputs.company,
        post_id: inputs.post_id
      }).fetch();

      return exits.success({
        message: `The offer has been created successfully !`,
        data: newOffer
      });

    }catch(error){
      if (!newOffer) {
        return exits.error({
          message: 'Oops :) an error occurred',
          error: 'Problem creating offer',
        });
      }

  
    }

  }


};
