
const Util = require('../services/util');
const userService = require('./user')
const User = require('../models/user');
/**
 * create an account
 * @param {object} user The user object to perform registration with
 * @returns {Promise<Object>} A promise that resolves to the registrated user
 */
exports.register = function(user){
  return new Promise(async (resolve, reject)=>{
    if (!user || !user.username  || !user.email || user.password ){
      Util.error('Invalid user data: email/username or password');
      return reject({success: false, message: 'Invalid user data provided.'});
    }

    const newUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      firstname: user.firstname,
      lastname: user.lastname,
      password: user.password,
    });

    const userCreated = await userService.create(user);
    resolve(userCreated);
  });
}