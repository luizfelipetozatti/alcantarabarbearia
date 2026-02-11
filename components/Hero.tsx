
import React from 'react';

interface HeroProps {
    onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://picsum.photos/seed/barbershop/1920/1080')` }}></div>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 p-6 flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading uppercase text-brand-gold tracking-widest leading-none">
                    Alcântara
                </h1>
                <p className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-8">
                    Barbearia
                </p>
                <p className="max-w-xl text-lg mb-10 font-light text-gray-200">
                    Tradição e modernidade se encontram para oferecer o melhor corte e a melhor experiência.
                </p>
                <button onClick={onBookClick} className="bg-brand-gold text-brand-dark font-bold text-lg py-3 px-10 rounded-sm hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-gold/20">
                    Faça seu Agendamento
                </button>
            </div>
        </section>
    );
};

export default Hero;
