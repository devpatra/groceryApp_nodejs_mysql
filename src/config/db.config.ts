import { Sequelize } from 'sequelize';

export const DB = 'grocery_booking';
export const USER = 'root';
export const PASSWORD = 'Dipl@mat29';
export const HOST = 'localhost'; // Or your database host address

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported dialect
  // Other options
});

export default sequelize;
