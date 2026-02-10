import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ title, description, link }) => {
  return (
    <motion.div 
      className="service-card"
      whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <Link to={link} className="service-link">
        Learn More <FaArrowRight className="link-icon" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;