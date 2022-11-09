const db = require('../models');
const Users = db.User;

module.exports = {
  updateUser: async (req, res) => {
    try {
      const user = await Users.find(
        req.params.userId,
        req.body.full_name,
        req.body.email,
        req.body.dob,
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
        message: 'Server error',
        error: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await Users.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).send();
      }
      res.status(201).json({
        success: true,
        message: 'delete successfull',
      });
    } catch (error) {
      return res.status(501).json({
        success: false,
        message: 'Server error',
        error: error.message,
      });
    }
  },
};
