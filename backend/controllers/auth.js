/**
 * @author messaismael
 * @since 0.0.1
*/
const AuthService = require("../services/auth")
const status = require("http-status");
const Util = require("../services/util")

exports.register = async (req, res) => {
  try{
    const createdUser = await AuthService.register(req.body);
    console.log(`User created with the id ${createdUser._id}.`);
    res.status(status.OK).json({ success: true, data: createdUser });
  }catch (e){
    Util.error(e);
    res.status(status.BAD_REQUEST).json(e);
  }
}