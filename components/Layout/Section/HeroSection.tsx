import React from 'react';

export default function HeroSection({ children }) {
    return (
        <section id="hero" className="pt-20 pb-40 text-center relative">
            <div className="relative">
                <video autoPlay loop muted className="hero-video w-full" style={{ opacity: 0.6, width: 'auto', height: 'auto' }}>
                    <source src="/images/hero/videoheader.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {children}
                </div>
            </div>
        </section>
    );
}
