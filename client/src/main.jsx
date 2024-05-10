import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.jsx';

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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
