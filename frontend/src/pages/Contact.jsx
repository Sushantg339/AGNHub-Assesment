import { useForm } from "react-hook-form"
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';
import axios from "../api/axiosConfig";
import { toast } from "react-toastify";

const Contact = () => {
    const {register, reset, handleSubmit, formState : {errors}} = useForm()

    const contactHandler = async (data)=>{
        try {
            const res = await axios.post('/contact', data)
            console.log(res.data?.message)
            toast.success('Contact saved Successfully!')
            reset()
        } catch (error) {
            console.log(error)
            toast.error(res.data?.message)
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Have a question or want to work together? We'd love to hear from you.</p>
            </div>

            <div className="contact-wrapper">
                <motion.div 
                    className="contact-info"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="info-item">
                        <div className="icon-box">
                            <FaPhone />
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon-box">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>info@consulthub.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon-box">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3>Address</h3>
                            <p>123 Business Avenue, Suite 100<br />New York, NY 10001</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="contact-form-container"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <form className="contact-form" onSubmit={handleSubmit(contactHandler)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input autoComplete="off" {...register('name')} type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input autoComplete="off" {...register('email')} type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea autoComplete="off" {...register('message')} id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;