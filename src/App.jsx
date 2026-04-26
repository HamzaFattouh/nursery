// =====================================================
// React & Router
// =====================================================
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// =====================================================
// Context
// =====================================================
import UserContextProvider from "./Contexts/User";

// =====================================================
// Main Website Components - الموقع الرئيسي
// =====================================================
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Gallery from "./component/Gallery/Gallery";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";

// =====================================================
// Dashboard Components - لوحات التحكم
// =====================================================
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import TeacherDashboard from "./component/Dashboard/TeacherDashboard";
import ParentDashboard from "./component/Dashboard/ParentDashboard";

// Admin
import AdminUsers from "./component/Admin/Users/Users";
import AdminCameras from "./component/Admin/Cameras/Cameras";

// Teacher
import TeacherStudents from "./component/Teacher/Students/Students";
import TeacherInquiries from "./component/Teacher/Inquiries/Inquiries";

// Parent
import ParentCameras from "./component/Parent/Cameras/Cameras";
import ParentInquiries from "./component/Parent/Inquiries/Inquiries";


// =====================================================
// Router Configuration
// =====================================================
const Router = createBrowserRouter([
  // -----------------------------------------------
  // Main Website Routes
  // -----------------------------------------------
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  // -----------------------------------------------
  // Dashboard Routes
  // -----------------------------------------------
  {
    path: "/",
    children: [
      // Admin
      { path: "admin/dashboard", element: <AdminDashboard /> },
      { path: "admin/users", element: <AdminUsers /> },
      { path: "admin/cameras", element: <AdminCameras /> },

      // Teacher
      { path: "teacher/dashboard", element: <TeacherDashboard /> },
      { path: "teacher/students", element: <TeacherStudents /> },
      { path: "teacher/inquiries", element: <TeacherInquiries /> },

      // Parent
      { path: "parent/dashboard", element: <ParentDashboard /> },
      { path: "parent/cameras", element: <ParentCameras /> },
      { path: "parent/inquiries", element: <ParentInquiries /> },
    ],
  },
]);


// =====================================================
// App Component
// =====================================================
export default function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={Router} />
    </UserContextProvider>
  );
}