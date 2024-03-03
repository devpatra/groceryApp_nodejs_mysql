// GroceryItem.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

interface GroceryItemAttributes {
  name: string;
  price: number;
  inventory: number;
}

class GroceryItem extends Model<GroceryItemAttributes> implements GroceryItemAttributes {
  public name!: string;
  public price!: number;
  public inventory!: number;
}

GroceryItem.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'GroceryItem',
    tableName: 'groceries',
  }
);

export default GroceryItem;
