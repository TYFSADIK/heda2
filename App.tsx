
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Flavours from './components/Flavours';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <LoadingScreen loading={loading} />
            <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <AnimatedBackground />
                <Navigation />
                <main id="main-content">
                    <Hero />
                    <Services />
                    <Packages />
                    <Flavours />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default App;
