import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import './Root.css'


export default function Root() {
  return (
    <div className="rootpage">
      <Navbar />
      
      <Outlet />
      
      <Footer />
    </div>
  );
}