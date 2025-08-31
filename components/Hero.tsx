
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden [perspective:1000px] p-4">
            <div className="text-center [transform-style:preserve-3d] animate-heroEntrance">
                <div className="animate-crownRotate [transform-style:preserve-3d]">
                     <i className="fas fa-crown text-7xl md:text-8xl text-gold-primary drop-shadow-[0_0_50px_rgba(255,215,0,0.8)] mb-8 inline-block"></i>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider leading-tight bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-tertiary bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(255,215,0,0.3)]">
                    Crown Shisha<br />Elite Catering
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-text-muted max-w-3xl mx-auto tracking-wide animate-fadeIn [animation-delay:0.5s]">
                    Redefining Luxury Event Experiences in Toronto GTA
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn [animation-delay:0.8s]">
                    <a href="#contact" className="px-10 py-4 text-lg font-bold uppercase rounded-full bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary shadow-2xl shadow-gold-primary/40 transition-transform duration-300 hover:scale-105 hover:shadow-gold-primary/60 focus:outline-none focus:ring-4 focus:ring-gold-primary/50">Request Quote</a>
                    <a href="#services" className="px-10 py-4 text-lg font-bold uppercase rounded-full border-2 border-gold-primary text-text-light bg-transparent transition-all duration-300 hover:scale-105 hover:bg-gold-primary/10 hover:shadow-2xl hover:shadow-gold-primary/30 focus:outline-none focus:ring-4 focus:ring-gold-primary/50">Explore</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
