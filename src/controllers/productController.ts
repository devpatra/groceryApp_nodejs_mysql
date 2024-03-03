import { Request, Response } from 'express';
import GroceryItem from '../models/GroceryItem';

// Controller function to add a new grocery item
export const addNewItem = async (req: Request, res: Response): Promise<void> => {
    const { name, price, inventory } = req.body;
    try {
        const newItem = await GroceryItem.create({name, price, inventory });


        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Controller function to view existing grocery items
export const viewItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const items = await GroceryItem.findAll();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to remove a grocery item
export const removeItem = async (req: Request, res: Response): Promise<void> => {
    const itemId = req.params.id;
    try {
        const item = await GroceryItem.findByPk(itemId);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        await item.destroy();
        res.status(200).json({ message: 'Item removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to update details of an existing grocery item
export const updateItem = async (req: Request, res: Response): Promise<void> => {
    const itemId = req.params.id;
    const { name, price, inventory } = req.body;
    try {
        const item = await GroceryItem.findByPk(itemId);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        item.name = name;
        item.price = price;
        await item.save();
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to book multiple grocery items in a single order
export const bookItems = async (req: Request, res: Response) => {
    const { items } = req.body;
    // Perform booking logic here
    res.status(200).json({ message: 'Items booked successfully' });
};