
import React, { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
    const [particles, setParticles] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        const createParticles = () => {
            const particleCount = Math.min(50, window.innerWidth / 20);
            const newParticles = Array.from({ length: particleCount }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 20}s`,
                duration: `${15 + Math.random() * 10}s`,
            }));
            setParticles(newParticles);
        };
        createParticles();
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-r from-dark-primary via-dark-secondary to-dark-primary bg-[size:400%_400%] animate-gradientShift" aria-hidden="true"></div>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10" aria-hidden="true">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="absolute w-0.5 h-0.5 bg-gold-primary rounded-full opacity-0 animate-floatParticle"
                        style={{
                            left: p.left,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default React.memo(AnimatedBackground);
