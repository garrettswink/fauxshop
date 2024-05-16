// CartScreen
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { faTrash } from 'react-icons/fa';
import Message from '../components/Message';

const CartScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


  return (
    <div>CartScreen</div>
  )
}

export default CartScreen

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';

import App from './App.jsx';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
// This is the standard boostrap css import, which is commented out
// In favor of custom styles. It might be worth reworking the custom styles
// Even further to make it more unique
// import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)


// Prompt
// What is wrong with my code.
// When I tried implementing the CartScreen, the app broke