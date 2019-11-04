'use strict';

import Sequelize from 'sequelize';

const sequelize = new Sequelize('mysql://root:root@localhost/mokuview', {
  operatorsAliases: false,
});

export default sequelize;
