import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js';
import router from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Middlewares

app.use(cors());
app.use(express.json());
app.use(cookieParser())

//Connect to MongoDB
connectDB();

//Authentication Route
app.use('/api/auth', router);

//Sample route

app.get('/', (req, res) => {
    res.end('CMS Backend is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});