import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.jsx';
import {HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Pages/Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <div className='max-w-screen-lg mx-auto'>
   <RouterProvider router={router} />
   </div>
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
