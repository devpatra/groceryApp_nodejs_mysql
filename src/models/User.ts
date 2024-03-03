// User.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

interface UserAttributes {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  // Add more fields as necessary
}

class User extends Model<UserAttributes> implements UserAttributes {
  public username!: string;
  public email!: string;
  public password!: string;
  public isAdmin!: boolean;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // Define more fields as necessary
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

export default User;
