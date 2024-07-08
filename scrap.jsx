
// Product Model / Review Sub Model
import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema], // Assuming you have defined reviewSchema elsewhere
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;

// Controller
// Only pulling in the relevant controller
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
  
    const product = await Product.findById(req.params.id);
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (review) => review.user.toString() === req.user._id.toString()
      );
  
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already reviewed");
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
  
      product.reviews.push(review);
  
      product.numReviews = product.reviews.length;
  
      product.rating =
        product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length;
  
      await product.save();
      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  });

// Route

// Server

// Store

// Slice

// Screen

// Error
Not Found - /api/products/66413e1ebb1b1f59c392a751/review

:8000/api/products/66413e1ebb1b1f59c392a751/review:1 
       Failed to load resource: the server responded with a status of 404 (Not Found)

message: "Not Found - /api/products/66413e1ebb1b1f59c392a751/review",
stack: "Error: Not Found - /api/products/66413e1ebb1b1f59c392a751/review
           at notFound (file:///Users/garrettswink/dev/fauxshop/backend/middleware/errorMiddleware.js:2:19)
           at Layer.handle [as handle_request] (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/layer.js:95:5)
           at trim_prefix (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:328:13)
           at /Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:286:9
           at Function.process_params (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:346:12)
           at next (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:280:10)
           at /Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:646:15
           at next (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:265:14)
           at Function.handle (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:175:3)
           at router (/Users/garrettswink/dev/fauxshop/node_modules/express/lib/router/index.js:47:12)"