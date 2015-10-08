/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone:{
    	type:Sequelize.STRING
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true,
      // validate:{isEamil:true}
    }
  }
};