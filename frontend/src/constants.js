// This was the duct tape and chewing gum solution I had last time, I think
// I don't understand why the application isn't reading the env file set to 8000
// The secont half of the terinary originally sets the port to 3001, but it isn't reading that.
// Nor is it reading the env file. This solution works, but it makes me nervous
// Should be kept under consideration if you run into issues down the road.

// This was the original solution I came up with that worked.
// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';
// export const PRODUCTS_URL = `${BASE_URL}/api/products`;

// This is the secondary solution that also works, but is not the same as what is seen in the T code.

// All this shit goes down in 4.3
export const BASE_URL = 'http://localhost:8000';
export const PRODUCTS_URL = 'http://localhost:8000/api/products';
export const USERS_URL = 'http://localhost:8000/api/users';
export const ORDERS_URL = 'http://localhost:8000/api/orders';
export const PAYPAL_URL = 'http://localhost:8000/api/config/paypal';
export const UPLOAD_URL = 'http://localhost:8000/api/upload';



