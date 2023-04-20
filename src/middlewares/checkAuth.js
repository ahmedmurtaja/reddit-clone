const CustomError = require("../utils/CustomError");

const checkAuth = (req,res,next)=>{
  const {token} = req.cookies;
if(!token) throw new CustomError('Un Authorized',401);
}