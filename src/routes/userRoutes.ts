import express from 'express';
import {registerUser } from '../controllers/userController';
import {viewItems, bookItems} from '../controllers/productController'

const router = express.Router();

// User routes
router.post('/createuser', registerUser)
router.get('/items', viewItems); // View the list of available grocery items
router.post('/items/book', bookItems); // Book multiple grocery items in a single order

export { router as userRouter };
