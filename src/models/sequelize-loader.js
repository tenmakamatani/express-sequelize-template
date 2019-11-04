'use strict';

import Sequelize from 'sequelize';

// Enable environment values
import dotenv from 'dotenv';
dotenv.config();

const DB_DRIVER = process.env.DB_DRIVER;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

// Connect DB
const connectInfo = `${DB_DRIVER}://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
const sequelize = new Sequelize(connectInfo, {
  operatorsAliases: false,
});

export default sequelize;
