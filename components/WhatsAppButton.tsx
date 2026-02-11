
import React from 'react';
import { WhatsAppIcon } from './icons/Icons';
import { WHATSAPP_URL } from '../constants';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 group"
        >
            <WhatsAppIcon className="w-8 h-8" />
            <span className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 bg-brand-dark text-white text-sm font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Fale Conosco!
            </span>
        </a>
    );
};

export default WhatsAppButton;
