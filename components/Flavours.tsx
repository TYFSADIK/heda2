
import React from 'react';
import SectionHeader from './SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const flavoursList = [
  "Double Apple", "Grape", "Gum Mint", "Love 66", "Orange Mint", "Hawaii",
  "Blueberry", "Lady Killer", "Lemon Mint", "Citrus Mist", "Watermelon",
  "Lime Lit", "Kiwi", "Irish Peach", "Mint", "Pan"
];

const Flavours: React.FC = () => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();
    return (
        <section id="flavours" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="Premium Flavours" subtitle="An Exquisite Selection For Your Palate" />
                <div ref={ref} className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden ${animationClasses}`}>
                     <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent animate-holographic"></div>
                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                        {flavoursList.map((flavour) => (
                            <div key={flavour} className="relative flex items-center gap-4 p-2 z-10">
                                <i className="fas fa-crown text-gold-primary text-lg"></i>
                                <span className="text-text-muted text-lg tracking-wider">{flavour}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flavours;
