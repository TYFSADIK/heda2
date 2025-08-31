
import React from 'react';
import SectionHeader from './SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

const servicesData: Service[] = [
    {
        icon: "fas fa-building",
        title: "Corporate Excellence",
        description: "Transform your corporate events into unforgettable luxury experiences with our elite catering services.",
        features: ["Executive Planning", "Premium Equipment", "Professional Team", "Custom Branding"]
    },
    {
        icon: "fas fa-heart",
        title: "Wedding Elegance",
        description: "Create magical moments with our sophisticated wedding catering services designed for your special day.",
        features: ["Elegant Setups", "Custom Themes", "Photo-Ready Design", "VIP Service"]
    },
    {
        icon: "fas fa-glass-cheers",
        title: "Private Luxury",
        description: "Elevate your private celebrations with our exclusive catering services tailored to your unique vision.",
        features: ["Bespoke Design", "Extended Hours", "Elite Staff", "Full Management"]
    }
];

const ServiceCard: React.FC<Service> = ({ icon, title, description, features }) => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:border-gold-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-primary/20 ${animationClasses}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary to-gold-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="mb-6 animate-iconFloat">
                <i className={`${icon} text-5xl bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent`}></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-light">{title}</h3>
            <p className="text-text-muted mb-6 leading-relaxed">{description}</p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-text-muted">
                        <i className="fas fa-check-circle text-gold-primary"></i>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="Premium Services" subtitle="Exclusive Luxury Experiences" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
