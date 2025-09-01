import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, Send, AlertCircle, CheckCircle, ShieldCheck } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{title}</h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

const ContactInfoCard = ({ icon, title, value, href }) => (
    <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-800 flex items-center gap-4 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 card-glow"
    >
        <div className="text-yellow-400">{icon}</div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
    </motion.a>
);

const contactDetails = [
    { icon: <Mail size={22} />, title: 'Email', value: 'yugank942@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yugank942@gmail.com' },
    { icon: <Phone size={22} />, title: 'Phone', value: '+91 8052128256', href: 'tel:+918052128256' },
    { icon: <Linkedin size={22} />, title: 'LinkedIn', value: 'linkedin.com/in/yugank-singh-a7b868224', href: 'https://linkedin.com/in/yugank-singh-a7b868224' },
    { icon: <Github size={22} />, title: 'GitHub', value: 'github.com/yugankXsingh', href: 'https://github.com/yugankXsingh' },
    { icon: <MapPin size={22} />, title: 'Location', value: 'India', href: '#' },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill out all fields.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Check if EmailJS is available
            if (typeof window !== 'undefined' && window.emailjs) {
                const result = await window.emailjs.send(
                    'service_pofs5me',
                    'template_zu2fwwc',
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                        to_name: 'Yugank',
                    },
                    'UkkVH9_p_54GoS9k7'
                );

                if (result.status === 200) {
                    setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    throw new Error('Failed to send email');
                }
            } else {
                // Fallback: Open Gmail compose window
                const subject = encodeURIComponent(`Message from ${formData.name}`);
                const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yugank942@gmail.com&su=${subject}&body=${body}`;
                
                window.open(gmailUrl, '_blank');
                setStatus({ type: 'success', message: 'Opening Gmail to send your message...' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Email Error:', error);
            // Fallback: Open Gmail compose window
            const subject = encodeURIComponent(`Message from ${formData.name}`);
            const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yugank942@gmail.com&su=${subject}&body=${body}`;
            
            window.open(gmailUrl, '_blank');
            setStatus({ type: 'success', message: 'Opening Gmail to send your message...' });
            setFormData({ name: '', email: '', message: '' });
        }

        setIsSubmitting(false);
        setTimeout(() => setStatus({type: '', message: ''}), 5000);
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <SectionTitle title="Get In Touch" subtitle="Ready to transform your data into actionable insights? Let's collaborate!" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Start a Conversation</h3>
                        <p className="text-gray-300 mb-8">
                            I'm passionate about turning complex data into clear, actionable insights. Whether you need help with data visualization, statistical analysis, or building comprehensive dashboards, I'm here to help bring your data to life.
                        </p>
                        <div className="space-y-4">
                            {contactDetails.map(item => <ContactInfoCard key={item.title} {...item} />)}
                             <div className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-800 flex items-center gap-4">
                                <div className="text-yellow-400"><ShieldCheck size={22} /></div>
                                <div>
                                    <p className="text-sm text-gray-400">Quick Response Guarantee</p>
                                    <p className="text-white font-medium text-sm">I typically respond to all inquiries within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-[#1e1e1e] p-8 rounded-lg border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        disabled={isSubmitting}
                                        className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition disabled:opacity-50" 
                                        placeholder="Your full name" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        disabled={isSubmitting}
                                        className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition disabled:opacity-50" 
                                        placeholder="your.email@example.com" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows="5" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        disabled={isSubmitting}
                                        className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition disabled:opacity-50" 
                                        placeholder="Tell me about your project or how I can help..."
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                    <p className="text-xs text-gray-500 mt-4">By sending a message, you agree to discuss potential collaboration opportunities. Your information will be kept confidential.</p>
                                </div>
                            </form>
                             {status.message && (
                                <div className={`mt-4 p-3 rounded-md flex items-center gap-3 text-sm ${status.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                    {status.message}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}