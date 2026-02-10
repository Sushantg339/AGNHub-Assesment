import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#4169E1" }, 
    tap: { scale: 0.95 }
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="logo-link">
            <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            >
            <span className="logo-blue">Bridge</span>
            <span className="logo-dark">Consult</span>
            </motion.div>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((item, index) => (
            <motion.li 
              key={index} 
              className="nav-item"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink 
                to={item.path} 
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
            <motion.li 
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/contact" 
                className="nav-links contact-btn"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </motion.li>
        </ul>
        
        <AnimatePresence>
        {isOpen && (
            <motion.div
            className="mobile-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            >
             <div className="close-icon" onClick={toggleMenu}>
                <FaTimes />
             </div>
             <ul className="mobile-nav-menu">
                {navLinks.map((item, index) => (
                    <motion.li 
                    key={index} 
                    className="mobile-nav-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <NavLink 
                        to={item.path} 
                        className={({ isActive }) => "mobile-nav-links" + (isActive ? " active" : "")}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </NavLink>
                    </motion.li>
                ))}
                 <motion.li 
                    className="mobile-nav-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <NavLink 
                        to="/contact" 
                        className="mobile-nav-links contact-btn-mobile"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                    </motion.li>
             </ul>
            </motion.div>
        )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
