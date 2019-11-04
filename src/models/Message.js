'use strict';

import Sequelize from 'sequelize';
import sequelize from './sequelize-loader';

const Message = sequelize.define(
  'messages',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    from: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    to: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['from', 'to'],
      },
    ],
  }
);

export default Message;
