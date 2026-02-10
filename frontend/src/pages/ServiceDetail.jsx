import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import './ServiceDetail.css';
import axios from '../api/axiosConfig';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';

const ServiceDetail = () => {
    const { id } = useParams();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await axios.get(`/services/${id}`);
                setService(res.data.data);
            } catch (error) {
                console.error("Error fetching service:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!service) {
        return (
            <div className="service-detail-container">
                <Link to="/services" className="back-link">
                    <FaArrowLeft /> Back to Services
                </Link>
                <div className="detail-content">
                    <h1>Service Not Found</h1>
                    <p>The requested service could not be found.</p>
                </div>
            </div>
        );
    }   

    return (
        <div className="service-detail-container">
            <Link to="/services" className="back-link">
                <FaArrowLeft /> Back to Services
            </Link>
            
            <motion.div 
                className="detail-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>{service.title}</h1>
                <h2 className="service-subtitle">
                    {service.shortDescription}
                </h2>

                <p>{service.detailedDescription}</p>

                <Link to="/contact" className="btn btn-primary">
                    Request Consultation
                </Link>
            </motion.div>

        </div>
    );
};

export default ServiceDetail;