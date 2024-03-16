import React from 'react';

export default function HeroHeading() {
    return (
        <div className="flex flex-col items-center">
            <img src="/images/hero/logokaye.png" alt="Nom de l'image" className="mx-auto mb-1" />
            <h1 className='tracking-tighter font-bold text-4xl md:text-5xl lg:text-6xl mt-1'>
                <span className="from-[#feba3d] to-[#ffffff] bg-clip-text text-transparent bg-gradient-to-b">Réservez le Goût, Réservez l'Événement</span>
            </h1>
        </div>
    );
}
