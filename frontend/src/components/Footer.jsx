import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">
                        <span className="logo-blue">Bridge</span><span className="logo-white">Consult</span>
                    </h3>
                    <p className="footer-text">
                        Empowering businesses with strategic insights and innovative solutions. Your partner in growth and success.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaGithub /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Services</h4>
                    <ul className="footer-links">
                        <li><NavLink to="/services">Business Strategy</NavLink></li>
                        <li><NavLink to="/services">Financial Audit</NavLink></li>
                        <li><NavLink to="/services">Marketing Analysis</NavLink></li>
                        <li><NavLink to="/services">HR Management</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Newsletter</h4>
                    <p className="footer-text">Subscribe to our newsletter for the latest updates.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ConsultHub. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;