/**
 *User model.
 * @author messaismael
 * @since 0.0.1
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'The email is required.']
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'The username is required.']
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'The password is required.'],
  },
  createdAt: Date,
  updatedAt: Date
});

// Insensitive index for some unique fields, not managing accents for comparison
// https://stackoverflow.com/a/41501310
userSchema.index({ username: 1, email: 1 }, { collation: { locale: 'en', strength: 1 } } );

userSchema.pre('save', function (next){
  var currentDate = new Date();

  // Edit the updatedAt field to the current date
  if (!this.keepUpdatedDate) this.updatedAt = currentDate;

  // if createdAt doesn't exist, add to that field
  if (!this.createdAt) this.createdAt = currentDate;

  next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;