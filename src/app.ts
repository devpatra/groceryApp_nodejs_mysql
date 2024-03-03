import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

// Create Express application
const app: Application = express();

// Middleware
app.use(bodyParser.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'devendra',
  password: 'Dipl@mat',
  database: 'grocery_booking'
});


// Check if MySQL connection is successful
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection
  }
});
pool.query(`select * from users`, (err, result, fields) => {
  if(err){
    return console.log(err);
  }
  return console.log(result);
})


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Grocery Booking API');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
