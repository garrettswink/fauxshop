import path from 'path';
import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js'



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



app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => 
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve(); // Set __dirname to current directory

app.use('/images', express.static(path.join(__dirname, '..', 'frontend', 'public', 'images')));
// Original of the above. I think the above is better. Might need to swap out.
// app.use('/public/uploads/', express.static(path.join(__dirname, '/public/uploads/')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req,res) => 
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {

    app.get('/', (req, res) => {
        res.send('API is running');
    });
    
}


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));



