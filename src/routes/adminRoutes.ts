import express from 'express';
import { addNewItem, viewItems, removeItem, updateItem } from '../controllers/productController';

const router = express.Router();

// Admin routes
router.post('/items', addNewItem); // Add a new grocery item
router.get('/items', viewItems); // View existing grocery items
router.delete('/items/:id', removeItem); // Remove a grocery item
router.put('/items/:id', updateItem); // Update details of a grocery item

export { router as adminRouter };
