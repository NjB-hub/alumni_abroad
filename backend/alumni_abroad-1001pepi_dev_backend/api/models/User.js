/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "users",
  attributes: {
    username: { 
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true, 
      unique: true 
    },
    emailStatus: {
      type: 'string',
      isIn: ['unconfirmed', 'confirmed'],
      defaultsTo: 'unconfirmed',
      columnName: 'email_status'
    },
    emailProofToken: {
      type: 'string',
      description: 'This will be used in the account verification email',
      columnName: 'email_proof_token'
    },
    emailProofTokenExpiresAt: {
      type: 'number',
      description: 'time in milliseconds representing when the emailProofToken will expire',
      columnName: 'email_proof_token_expires_at'
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
    passwordResetToken: {
      type: 'string',
      description:
        'A unique token used to verify the user\'s identity when recovering a password.',
      columnName: 'password_reset_token',
    },
    passwordResetTokenExpiresAt: {
      type: 'number',
      description:
        'A timestamp representing the moment when this user\'s `passwordResetToken` will expire (or 0 if the user currently has no such token).',
      example: 1508944074211,
      columnName: 'password_reset_token_expires_at',
    },
    unreadPosts:{type: 'Boolean', defaultsTo: false},
    isAdmin: {
      type: 'Boolean',
      defaultsTo: false 
    }, 
    userEvents: {
      collection: 'event',
      via: 'participants' 
    },
    userPosts: {
      collection: 'post',
      via: 'ownerP' 
    },
    userComments: {
      collection: 'comment',
      via: 'ownerC' 
    },
    userProfile: {
      collection: 'profile',
      via: 'profileOwner' 
    },
  },

  customToJSON: function () {
    return _.omit(this, ["password"]);
  },

  // LIFE CYCLE
  beforeCreate: async function (values, proceed) {
    // Hash password
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      values.password
    );
    values.password = hashedPassword;
    return proceed();
  },

};

