'use client'

import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000); // Adjust this value to match your draw animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
            <div className="relative w-64 h-64 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Cup body */}
                    <path
                        d="M20,50 Q20,80 50,80 Q80,80 80,50 L80,30 Q80,20 70,20 L30,20 Q20,20 20,30 Z"
                        fill="none"
                        stroke="#00704A"
                        strokeWidth="4"
                        className={`${isLoaded ? '' : 'animate-draw'} ${isLoaded ? 'stroke-emerald-700' : 'stroke-emerald-500'}`}
                    />

                    {/* Cup handle */}
                    <path
                        d="M80,40 Q90,40 90,50 Q90,60 80,60"
                        fill="none"
                        stroke="#00704A"
                        strokeWidth="4"
                        className={`${isLoaded ? '' : 'animate-draw'} ${isLoaded ? 'stroke-emerald-700' : 'stroke-emerald-500'}`}
                    />

                    {/* Coffee surface */}
                    <path
                        d="M25,40 Q50,48 75,40"
                        fill="none"
                        stroke="#00704A"
                        strokeWidth="4"
                        className={`animate-wave ${isLoaded ? 'stroke-emerald-600' : 'stroke-emerald-400'}`}
                    />

                    {/* Steam */}
                    <path
                        d="M40,20 Q45,10 50,20 Q55,10 60,20"
                        fill="none"
                        stroke="#00704A"
                        strokeWidth="3"
                        className={`animate-steam ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Sip animation */}
                    <path
                        d="M30,40 C40,37 60,37 70,40"
                        fill="none"
                        stroke="#00704A"
                        strokeWidth="3"
                        className={`animate-sip ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </svg>

                {/* Animated coffee drops */}
                {isLoaded && [0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className="absolute w-2 h-2 bg-emerald-600 rounded-full animate-drip"
                        style={{
                            left: `${25 + index * 25}%`,
                            animationDelay: `${index * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Starbucks text */}
            <div className={`text-4xl font-bold text-emerald-800 tracking-wide ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                {'Starbucks'.split('').map((letter, index) => (
                    <span key={index} className="inline-block animate-letter-float" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Loading;
