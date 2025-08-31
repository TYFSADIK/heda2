
import React, { useState, FormEvent, ChangeEvent } from 'react';
import SectionHeader from './SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactInfo {
    icon: string;
    title: string;
    value: string;
    href?: string;
}

const contactInfoData: ContactInfo[] = [
    { icon: "fas fa-phone-alt", title: "24/7 Booking", value: "+1 (647) 906-9995", href: "tel:+16479069995" },
    { icon: "fas fa-envelope", title: "Email Us", value: "book@crownshisha.ca", href: "mailto:book@crownshisha.ca" },
    { icon: "fas fa-map-marker-alt", title: "Service Area", value: "Greater Toronto Area" }
];

const ContactInfoCard: React.FC<ContactInfo> = ({ icon, title, value, href }) => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();
    const content = href ? <a href={href} className="text-text-muted hover:text-gold-primary transition-colors">{value}</a> : <p className="text-text-muted">{value}</p>;

    return (
        <div ref={ref} className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group transition-all duration-300 hover:border-gold-primary/50 hover:shadow-2xl hover:shadow-gold-primary/10 ${animationClasses}`}>
            <i className={`${icon} text-3xl text-gold-primary mb-4`}></i>
            <h4 className="text-xl font-bold text-text-light mb-1">{title}</h4>
            {content}
        </div>
    );
};


const Contact: React.FC = () => {
    const [formRef, animationClasses] = useScrollAnimation<HTMLFormElement>();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', eventType: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', eventType: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="Book Your Experience" subtitle="Let's Create Something Extraordinary" />
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        {contactInfoData.map(info => <ContactInfoCard key={info.title} {...info} />)}
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} noValidate className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-6 ${animationClasses}`}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wider mb-2">First Name</label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full bg-black/20 border-2 border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all"/>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wider mb-2">Last Name</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full bg-black/20 border-2 border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all"/>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                           <div>
                                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black/20 border-2 border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider mb-2">Phone</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-black/20 border-2 border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all"/>
                            </div>
                        </div>
                         <div>
                            <label htmlFor="eventType" className="block text-sm font-bold uppercase tracking-wider mb-2">Event Type</label>
                            <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full bg-black/20 border-2 border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all appearance-none bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFD700' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em'}}>
                                <option value="">Select Event Type</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="wedding">Wedding</option>
                                <option value="private">Private Party</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your vision..." required className="w-full bg-black/20 border-2 border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all resize-none"></textarea>
                        </div>
                        <button type="submit" disabled={status === 'sending'} className="w-full px-8 py-4 font-bold uppercase rounded-full bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary shadow-lg shadow-gold-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold-primary/50 disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            {status === 'success' && (
                <div role="alert" className="fixed top-24 right-4 md:right-8 bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary font-bold p-6 rounded-lg shadow-2xl animate-slideIn">
                    Message sent successfully! We'll be in touch.
                </div>
            )}
        </section>
    );
};

export default Contact;
