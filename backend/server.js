import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 3001;

connectDB(); // Connect to MongoDB

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));



