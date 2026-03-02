import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    // 1. State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // 2. State for submission status
    const [status, setStatus] = useState("");

    // 3. Handle input changes
    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    // 4. Handle form submission (Fetch to Formspree)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("SUBMITTING");
        
        // 🔴 REPLACE 'YOUR_FORM_ID' with the unique ID from your Formspree dashboard
        const response = await fetch("https://formspree.io/f/mdalvqdp", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("SUCCESS");
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        } else {
            setStatus("ERROR");
        }
    };

    return (
        <section className="contact-hero">
            {/* Background Image Wrapper */}
            <div className="contact-bg-wrapper">
                <img 
                    src="/images/contact.jpg" 
                    alt="Maryland Wrestling Practice" 
                    className="contact-bg-img" 
                />
            </div>

            {/* Dark Overlay with Gradient to Footer */}
            <div className="contact-overlay"></div>

            <div className="contact-content">
                <div className="contact-text">
                    <h1 className="hero-title fade-on-scroll is-visible">Get in Touch</h1>
                    <p className="hero-desc">
                        Have questions about joining or upcoming matches? Send us a message.
                    </p>
                </div>

                {/* --- SUCCESS STATE --- */}
                {status === "SUCCESS" ? (
                    <div className="success-message fade-on-scroll is-visible">
                        <h3>Message Sent!</h3>
                        <p>Thanks for reaching out. We'll get back to you soon.</p>
                        
                        {/* 🔴 RED SOLID BUTTON */}
                        <Link to="/" className="back-home-btn">
                            Back to Home
                        </Link>
                    </div>
                ) : (
                    /* --- FORM STATE --- */
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <input 
                            type="text" 
                            name="subject" 
                            placeholder="Subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            required 
                        />

                        <textarea 
                            name="message" 
                            rows="5" 
                            placeholder="Message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required
                        ></textarea>

                        <button 
                            type="submit" 
                            className="contact-submit-btn" 
                            disabled={status === "SUBMITTING"}
                        >
                            {status === "SUBMITTING" ? "Sending..." : "Send Message"}
                            <div className="btn-squircle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                        
                        {status === "ERROR" && (
                            <p className="error-message">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;