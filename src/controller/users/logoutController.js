const logout = (req, res) => {
  res.clearCookie('token')
    .status(200).json({
      success: true,
      message: 'You are logged out',
    });
};
module.exports = logout;
