
import React from 'react';
import { INSTAGRAM_URL, BOOKSY_URL, GMAPS_URL } from '../constants';

const SocialIcon: React.FC<{ href: string, path: string }> = ({ href, path }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <div className="text-3xl font-heading tracking-wider text-brand-gold uppercase mb-4">
                    Alcântara Barbearia
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">Instagram</a>
                    <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">Booksy</a>
                    <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">Google Maps</a>
                </div>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Alcântara Barbearia. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
