// Server
import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


const port = process.env.PORT || 3001;

connectDB(); // Connect to MongoDB

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => 
    res.send({ clientID: process.env.PAYPAY_CLIENT_ID })
);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

// .env
NODE_ENV=development
PORT=8000
MONGO_URI=mongodb+srv://garrettswink421:Currituck13!@cluster0.htbdugr.mongodb.net/fauxshop?
JWT_SECRET=abc123
PAYPAL_CLIENT_ID=AYhpb615OLb0T8JEHVf2FR-E5TaQ6--5MJS6JMpezPYt-1AAGvRL4Aa6f4mU2r2C3X7p9dQP2pEA4zos