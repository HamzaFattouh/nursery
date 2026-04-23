import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.Module.css'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="contaner">

          <div className="leftside">
            <div className="logo">
              <span className="logo-text">حضانة الأطفال</span>
            </div>

            <nav className={open ? "open" : ""}>
              <ul className="nav-list">
                <li><NavLink className='pageslink' to="/" onClick={() => setOpen(false)}>الرئيسية</NavLink></li>
                <li><NavLink className='pageslink' to="/about" onClick={() => setOpen(false)}>من نحن</NavLink></li>
                <li><NavLink className='pageslink' to="/services" onClick={() => setOpen(false)}>الخدمات</NavLink></li>
                <li><NavLink className='pageslink' to="/gallery" onClick={() => setOpen(false)}>معرض الصور</NavLink></li>
                <li><NavLink className='pageslink' to="/contact" onClick={() => setOpen(false)}>تواصل معنا</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="rightside">

            <div className="auth">
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>

            {/* Burger Button */}
            <div className="burger" onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}