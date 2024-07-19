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
import EntrepreneurProfile from './pages/Entrepreneur/EntrepreneurProfile.jsx';
import Startups from './pages/Entrepreneur/Startups.jsx';
import FindPartners from './pages/Entrepreneur/FindPartners.jsx';
import FindInvestors from './pages/Entrepreneur/FindInvestors.jsx';
import FindMentors from './pages/Entrepreneur/FindMentors.jsx';
import FindEmployees from './pages/Entrepreneur/FindEmployees.jsx';
import InvestorProfile from './pages/Investor/InvestorProfile.jsx';
import FindStartups from './pages/Investor/FindStartups.jsx';
import FindMentees from './pages/Investor/FindMentees.jsx';
import EntrepreneurNotifications from './pages/Entrepreneur/EntrepreneurNotifications.jsx';
import InvestorNotifications from './pages/Investor/InvestorNotifications.jsx';
import StudentProfile from './pages/Student/StudentProfile.jsx';
import FindJobs from './pages/Student/FindJobs.jsx';
import StudentNotifications from './pages/Student/StudentNotifications.jsx';
import Login from "./pages/Login.jsx"
import Signup from './pages/Signup.jsx';
import AuthProvider from './auth/AuthProvider.jsx';
import Info from './pages/Info.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/info/:role",
    element: <Info />,
  },
  {
    path: "/entrepreneur",
    element: <EntrepreneurPortal />,
    children: [
      {
        path: "/entrepreneur",
        element: <EntrepreneurProfile />,
      },
      {
        path: "/entrepreneur/profile",
        element: <EntrepreneurProfile />,
      },
      {
        path: "/entrepreneur/findEmployees",
        element: <FindEmployees />,
      },
      {
        path: "/entrepreneur/startups",
        element: <Startups />,
      },
      {
        path: "/entrepreneur/findPartners",
        element: <FindPartners />,
      },
      {
        path: "/entrepreneur/findInvestors",
        element: <FindInvestors />,
      },
      {
        path: "/entrepreneur/findMentors",
        element: <FindMentors />,
      },
      {
        path: "/entrepreneur/notifications",
        element: <EntrepreneurNotifications /> ,
      },
    ],
  },
  {
    path: "/investor",
    element: <InvestorPortal />,
    children: [
      {
        path: "/investor",
        element: <InvestorProfile />,
      },
      {
        path: "/investor/profile",
        element: <InvestorProfile />,
      },
      {
        path: "/investor/findStartups",
        element: <FindStartups />,
      },
      {
        path: "/investor/findMentees",
        element: <FindMentees />,
      },
      {
        path: "/investor/notifications",
        element: <InvestorNotifications />,
      },
    ]
  },
  {
    path: "/student",
    element: <StudentPortal />,
    children: [
      {
        path: "/student",
        element: <StudentProfile />, 
      },
      {
        path: "/student/profile",
        element: <StudentProfile />, 
      },
      {
        path: "/student/findJobs",
        element: <FindJobs />, 
      },
      {
        path: "/student/findPartners",
        element: <FindPartners />, 
      },
      {
        path: "/student/notifications",
        element: <StudentNotifications />, 
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
