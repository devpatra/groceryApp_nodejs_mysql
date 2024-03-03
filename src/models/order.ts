// Import necessary modules
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config'; // Assuming your Sequelize instance is exported as 'sequelize'

// Define the attributes of the Order model
interface OrderAttributes {
  id: number;
  customerId: number;
  totalPrice: number;
  // Add more attributes as needed
}

// Define the Order model class
class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public customerId!: number;
  public totalPrice!: number;
  // Define corresponding attributes here
}

// Initialize the Order model with attributes and configuration
Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2), // Example of a decimal type with precision 10 and scale 2
      allowNull: false
    },
    // Define more attributes as necessary
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: 'Order', // Specify the model name
    tableName: 'orders' // Optionally, specify the table name (if different from the model name)
    // Add more configuration options as needed
  }
);

// Export the Order model
export default Order;
