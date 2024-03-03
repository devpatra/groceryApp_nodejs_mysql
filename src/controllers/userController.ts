import { Request, Response } from 'express';
import User from '../models/User'

import  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Controller function to register a new user
export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: 'User with this email already exists' });
            return;
        }
        // Create new user record
        const newUser = await User.create({ username, email, password, isAdmin: false });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Controller function to authenticate and login a user
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ where: { email } });
        
        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: email, isAdmin: user.isAdmin }, 'your-secret-key', { expiresIn: '1h' });

        // Send token as response
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

