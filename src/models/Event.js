'use strict';

import Sequelize from 'sequelize';
import sequelize from './sequelize-loader';

const Event = sequelize.define(
  'events',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    lat: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    lng: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    expired_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    indexes: [
      {
        fields: ['user_id'],
      },
    ],
  }
);

export default Event;
