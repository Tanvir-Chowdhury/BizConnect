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
import Profile from './pages/Entrepreneur/Profile.jsx';
import Startups from './pages/Entrepreneur/Startups.jsx';
import FindPartners from './pages/Entrepreneur/FindPartners.jsx';
import FindInvestors from './pages/Entrepreneur/FindInvestors.jsx';
import FindMentors from './pages/Entrepreneur/FindMentors.jsx';
import FindEmployees from './pages/Entrepreneur/FindEmployees.jsx';
import Notifications from './pages/Entrepreneur/Notifications.jsx';
import Login from './pages/Login.jsx';


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
    path: "/entrepreneur/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/entrepreneur/startups",
    element: <Startups></Startups>,
  },
  {
    path: "/entrepreneur/findpartners",
    element: <FindPartners></FindPartners>,
  },
  {
    path: "/entrepreneur/findinvestors",
    element: <FindInvestors></FindInvestors>,
  },
  {
    path: "/entrepreneur/findmentors",
    element: <FindMentors></FindMentors>,
  },
  {
    path: "/entrepreneur/findemployees",
    element: <FindEmployees></FindEmployees>,
  },
  {
    path: "/entrepreneur/notifications",
    element: <Notifications></Notifications> ,
  },
  {
    path: "/investor",
    element: <InvestorPortal />,
  },
  {
    path: "/student",
    element: <StudentPortal />,
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
