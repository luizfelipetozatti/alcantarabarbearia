
import React, { useState } from 'react';

interface HeaderProps {
    onBookClick: () => void;
    onServicesClick: () => void;
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookClick, onServicesClick, onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { label: 'Serviços', action: onServicesClick },
        { label: 'Contato', action: onContactClick },
    ];

    return (
        <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-3xl font-heading tracking-wider text-brand-gold uppercase">
                    Alcântara
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button key={link.label} onClick={link.action} className="text-white hover:text-brand-gold transition-colors duration-300 font-medium">
                            {link.label}
                        </button>
                    ))}
                    <button onClick={onBookClick} className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-sm hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                        Agendar Agora
                    </button>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-brand-dark">
                    <nav className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                           <button key={link.label} onClick={() => { link.action(); setIsOpen(false); }} className="text-white py-2 w-full text-center hover:text-brand-gold transition-colors duration-300 font-medium">
                                {link.label}
                            </button>
                        ))}
                        <button onClick={() => { onBookClick(); setIsOpen(false); }} className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-sm hover:bg-yellow-500 transition-all duration-300 w-full mt-2">
                            Agendar Agora
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
