'use strict';

import User from '../models/User';

class UserController {
  static async getOneById(req, res) {
    // Get ID from params
    const id = req.params.id;
    if (!id) {
      return res.status(400).send('ID not found.');
    }

    // Get user from ID
    try {
      const user = await User.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json({
        user: user,
      });
    } catch (e) {
      return res.status(500).send('Failed to get user.');
    }
  }
}

export default UserController;
