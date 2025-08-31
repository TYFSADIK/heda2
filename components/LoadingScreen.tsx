
import React from 'react';

interface LoadingScreenProps {
    loading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-dark-primary flex justify-center items-center z-[10000] transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="w-20 h-20 relative animate-spin [animation-duration:2s]">
                <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-gold-primary"></div>
                <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-gold-secondary animate-spin [animation-duration:1.5s] [animation-direction:reverse]"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
