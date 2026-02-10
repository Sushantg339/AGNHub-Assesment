import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const members = [
        {
            "name": "Aarav Sharma",
            "imagelink": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "role": "Frontend Developer"
        },
        {
            "name": "Neha Patel",
            "imagelink": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "role": "Backend Developer"
        },
        {
            "name": "Rohit Verma",
            "imagelink": "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "role": "UI/UX Designer"
        }
    ]

    return (
        <div className="about-container">
            
            <section className="mission-section">
                <motion.div 
                    className="mission-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Our Mission</h1>
                    <p>To empower businesses to achieve their full potential through strategic innovation and sustainable growth.</p>
                </motion.div>
            </section>

            
            <section className="story-section">
                <div className="section-content">
                    <motion.div 
                        className="story-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Story</h2>
                        <p>Founded in 2015, ConsultHub began with a simple idea: that data and strategy should go hand in hand. Over the years, we've grown from a small boutique firm into a global consultancy, but our core values remain the same.</p>
                        <p>We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that drive real results.</p>
                    </motion.div>
                    <motion.div 
                        className="story-image"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="image-placeholder"></div>
                    </motion.div>
                </div>
            </section>

            
            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    {members.map((member) => (
                        <motion.div 
                            key={member}
                            className="team-card"
                            whileHover={{ y: -10 }}
                        >
                            <div className="team-photo">
                                <img src={member.imagelink} alt="member" />
                            </div>
                            <h3>{member.name}</h3>
                            <span className="team-role">{member.role}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;