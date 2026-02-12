import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaLightbulb, FaHandshake, FaBullhorn, FaUsers, FaCogs } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import './Home.css';
import axios from '../api/axiosConfig';
import Loader from '../components/Loader';

const Home = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchServices = async () => {
        try {
            const res = await axios.get("/services");
            const firstThree = res.data.data.slice(0, 3);
            setServices(firstThree);
            setLoading(false)
        } catch (err) {
            console.error("Error fetching services:", err);
        }
        };

        fetchServices();
    }, []);
    return (
        <div className="home-container">
            <section className="hero-section">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Transform Your Business with <span className="highlight-text">BridgeConsult</span>
                    </h1>
                    <p className="hero-subtitle">
                        Strategic insights and innovative solutions to drive your growth. We partner with you to navigate challenges and seize opportunities.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">Get Started</Link>
                        <Link to="/services" className="btn btn-secondary">Our Services</Link>
                    </div>
                </motion.div>
                <motion.div 
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-placeholder-image"></div>
                </motion.div>
            </section>

            <section className="features-section">
                <div className="section-header">
                    <h2>Why Choose Us</h2>
                    <p>We deliver measurable results through a unique approach.</p>
                </div>
                <div className="features-grid">
                    <motion.div 
                        className="feature-card"
                        whileHover={{ y: -10 }}
                    >
                        <FaChartLine className="feature-icon" />
                        <h3>Data-Driven Strategy</h3>
                        <p>We base our recommendations on rigorous analysis and market data.</p>
                    </motion.div>
                    <motion.div 
                        className="feature-card"
                        whileHover={{ y: -10 }}
                    >
                        <FaLightbulb className="feature-icon" />
                        <h3>Innovative Solutions</h3>
                        <p>Thinking outside the box to solve complex business problems.</p>
                    </motion.div>
                    <motion.div 
                        className="feature-card"
                        whileHover={{ y: -10 }}
                    >
                        <FaHandshake className="feature-icon" />
                        <h3>Trusted Partnership</h3>
                        <p>We work collaboratively with your team to ensure sustainable success.</p>
                    </motion.div>
                </div>
            </section>

            <section className="key-services-section">
                <div className="section-header">
                    <h2>Key Services</h2>
                    <p>Explore our core offerings designed to drive your business forward.</p>
                </div>
                <div className="services-grid">
                    {loading ? <Loader/> : services.map((service)=>{
                        return (<motion.div key={service._id} whileHover={{ y: -10 }}>
                            <ServiceCard 
                                title={service.title}
                                description={service.shortDescription}
                                link={`/services/${service._id}`}
                            />
                        </motion.div>)
                    })}
                </div>
                <div className="center-btn-container" style={{ textAlign: 'center', marginTop: '40px' }}>
                     <Link to="/services" className="btn btn-secondary">View All Services</Link>
                </div>
            </section>

             <section className="testimonials-section">
                <div className="section-header">
                    <h2>Client Success Stories</h2>
                    <p>Hear what our partners have to say about their experience.</p>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"ConsultHub transformed our operational efficiency. Their insights were invaluable to our scaling strategy."</p>
                        <h4 className="testimonial-author">- Sarah Johnson, CEO of TechStart</h4>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"The team's dedication and expertise are unmatched. They truly care about our success."</p>
                        <h4 className="testimonial-author">- Michael Chen, Director at GlobalCorp</h4>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Elevate Your Business?</h2>
                    <p>Let's discuss how we can help you achieve your goals.</p>
                    <Link to="/contact" className="btn btn-primary btn-large">Contact Us Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;