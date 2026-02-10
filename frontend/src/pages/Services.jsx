import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import './Services.css';
import axios from '../api/axiosConfig';
import Loader from '../components/Loader';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchServices = async () => {
            const res = await axios.get('/services');
            setServices(res.data.data);
            setLoading(false);
        };

        fetchServices();
    }, [services]);

    if(loading){
        return <Loader/>
    }


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
            <div className="services-container">
                <div className="services-header">
                    <h1>Our Services</h1>
                    <p>We offer a wide range of consulting services to meet your business needs.</p>
                </div>
                
                <motion.div 
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    >
                    {services.map(service => (
                        <motion.div key={service._id} variants={itemVariants}>
                            <ServiceCard 
                                title={service.title}
                                description={service.shortDescription}
                                link={`/services/${service._id}`}
                            />
                        </motion.div>
                    ))}

                </motion.div>
            </div>
    );
};

export default Services;