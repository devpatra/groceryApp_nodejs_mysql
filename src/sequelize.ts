import { Sequelize } from 'sequelize';
import { DB, USER, PASSWORD, HOST } from './config/db.config';

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  pool: {
    max: 10, // Maximum number of connections in pool
    min: 0, // Minimum number of connections in pool
    acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // The maximum time, in milliseconds, that a connection can be idle before being released
  }
});

export default sequelize;
