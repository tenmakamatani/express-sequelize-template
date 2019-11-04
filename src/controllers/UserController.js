'use strict';

import sequelize from '../models/sequelize-loader';
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

  static async putOneById(req, res) {
    // Get ID from params
    const id = req.params.id;
    if (!id) {
      return res.status(400).send('ID not found.');
    }

    // Get name and bio from body
    const { name, bio } = req.body;
    if (!(name || bio)) {
      return res.status(400).send('Name and bio was not found.');
    }

    sequelize.transaction(async tx => {
      // Get user from ID
      let user;
      try {
        user = await User.findOne({
          where: {
            id: id,
          },
        });
      } catch (e) {
        return res.status(500).send('Failed to get user.');
      }

      // Update user
      try {
        await user.update(
          {
            name: name ? name : user.name,
            bio: bio ? bio : user.bio,
            updatedAt: new Date(),
          },
          { transaction: tx }
        );
        return res.status(200).json({
          user: user,
        });
      } catch (e) {
        return res.status(500).send('Failed to update user.');
      }
    });
  }
}

export default UserController;
