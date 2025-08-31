
import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-tertiary bg-clip-text text-transparent mb-4">
                {title}
            </h2>
            <p className="text-xl md:text-2xl text-text-muted tracking-wide">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeader;
