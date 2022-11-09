const db = require('../models');
const Users = db.User;

module.exports = {
  updateUser: async (req, res) => {
    try {
      const user = await Users.find(
        req.body.full_name,
        req.body.email,
        req.params.dob,
        req.body.city
      );
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Duplicate value.',
        });
      }
      res.status(200).json({
        success: true,
        message: 'user updated successfully',
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    }
  },
};
