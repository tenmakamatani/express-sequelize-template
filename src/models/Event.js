'use strict';

import Sequelize from 'sequelize';
import sequelize from './sequelize-loader';

const Event = sequelize.define(
  'events',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    expiredAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    craetedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['userId'],
      },
    ],
  }
);

export default Event;
