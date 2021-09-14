/**
 * Auth routes for authentication and authorisation endpoints.
 * @author messaismael
 * @since 0.0.1
 */
const express = require('express');
const router = express.Router();
const eJwt = require('express-jwt');
const config = require('../config');
const authController = require('../controllers/auth');

// JWT authentication may be required
router.use(eJwt({
  secret: config.JWT_SECRET,
  credentialsRequired: false
}));

// Required JWT token
const requireToken = eJWT({
  secret: config.JWT_SECRET,
  credentialsRequired: false
});

/** 
 * Defining model entries
 * @typedef UserFields
 * @property {string} email.required - User's email - eg: user@domain.com
 * @property {string} username.required - User's - eg: userenjema2014
 * @property {string} firstName - User's firstname.
 * @property {string} lastName - User's lastname.
 * @property {string} genre - User's genre - eg: MALE
 * @property {string} password.required - User's password.
 */

/**
 * Registering a user.
 * @route POST /auth/register
 * @group Auth - Operations about authentication and authorization.
 * @param {UserFields.model} entry.body - the request body
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/register', authController.register);

module.exports = router;
