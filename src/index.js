import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import SI from './pages/SI';
import WGS from './pages/WGS';
import Kegiatan from './pages/Kegiatan';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/si",
    element: <SI/>,
  },{
    path: "/wgs",
    element: <WGS />,
  },{
    path: "/kegiatan",
    element: <Kegiatan />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

