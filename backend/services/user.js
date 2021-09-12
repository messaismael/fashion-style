/**
 * User services
 * @author messaismael
 * @since 0.0.1
 */
const User = require('../models/user');

/**
 * Create an user
 * @param  {Object} user The user to add in db
 * @returns {Promise<Object>} Promise the resolve to the created user
*/
function create (user) {
  if (!user) return Promise.reject({success: false, message: 'Bad user data provided'});

  return User.create(user);
}
exports.create = create;