import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EntrepreneurPortal from './pages/Entrepreneur/EntrepreneurPortal.jsx';
import InvestorPortal from './pages/Investor/InvestorPortal.jsx';
import StudentPortal from './pages/Student/StudentPortal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/entrepreneur",
    element: <EntrepreneurPortal />,
  },
  {
    path: "/investor",
    element: <InvestorPortal />,
  },
  {
    path: "/student",
    element: <StudentPortal />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
