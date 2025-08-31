
import React from 'react';
import SectionHeader from './SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Package {
    name: string;
    price: string;
    features: string[];
    featured: boolean;
}

const packagesData: Package[] = [
    {
        name: "Essential",
        price: "Intimate Luxury",
        features: ["10 Premium Units", "4-Hour Service", "Professional Staff", "Premium Selection", "Setup & Cleanup"],
        featured: false
    },
    {
        name: "Premium",
        price: "Ultimate Experience",
        features: ["15 Premium Units", "6-Hour Service", "Elite Team", "Exclusive Selection", "Custom Themes", "Event Coordination"],
        featured: true
    },
    {
        name: "Executive",
        price: "Grand Scale Events",
        features: ["20+ Premium Units", "Full-Day Service", "Dedicated Manager", "VIP Experience", "Custom Branding", "Complete Management"],
        featured: false
    }
];

const PackageCard: React.FC<Package> = ({ name, price, features, featured }) => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();
    const cardClasses = featured
        ? "border-gold-primary scale-105 shadow-2xl shadow-gold-primary/30"
        : "border-white/10";
    const buttonClasses = featured
        ? "bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary shadow-lg shadow-gold-primary/30"
        : "border-2 border-gold-primary text-text-light bg-transparent hover:bg-gold-primary/10";

    return (
        <div ref={ref} className={`relative flex flex-col bg-white/5 backdrop-blur-xl border-2 rounded-3xl p-8 text-center overflow-hidden transition-all duration-500 hover:scale-105 hover:border-gold-primary ${cardClasses} ${animationClasses}`}>
            {featured && (
                <>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary font-bold uppercase tracking-widest text-sm rounded-full shadow-lg">Most Popular</div>
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent animate-holographic"></div>
                </>
            )}
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent mt-12 mb-2">{name}</h3>
            <p className="text-text-muted mb-8">{price}</p>
            <ul className="space-y-4 text-left flex-grow mb-10">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4 text-text-muted">
                        <i className="fas fa-crown text-gold-primary"></i>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <a href="#contact" className={`mt-auto w-full px-8 py-3 font-bold uppercase rounded-full transition-all duration-300 hover:scale-105 ${buttonClasses}`}>Get Started</a>
        </div>
    );
};

const Packages: React.FC = () => {
    return (
        <section id="packages" className="py-24 bg-dark-secondary">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="Exclusive Packages" subtitle="Choose Your Premium Experience" />
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                    {packagesData.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
