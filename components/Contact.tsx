
import React from 'react';
import { WHATSAPP_URL } from '../constants';
import { WhatsAppIcon } from './icons/Icons';

const Contact: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-5xl font-heading uppercase text-brand-gold">Contato & Localização</h2>
                    <p className="text-gray-300 mt-2">Venha nos fazer uma visita.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-brand-dark p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-brand-gold mb-6">Horário de Funcionamento</h3>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex justify-between border-b border-gray-700 pb-2"><span>Segunda - Sexta</span> <strong>09:00 - 19:00</strong></div>
                                <div className="flex justify-between border-b border-gray-700 pb-2"><span>Sábado</span> <strong>09:00 - 18:00</strong></div>
                                <div className="flex justify-between"><span>Domingo</span> <strong>Fechado</strong></div>
                            </div>

                            <h3 className="text-2xl font-bold text-brand-gold mt-10 mb-6">Informações</h3>
                             <div className="space-y-4 text-gray-300">
                                <p><strong>Endereço:</strong> R. João Gurgel, 1500 - Centro, Araraquara - SP</p>
                                <p><strong>Telefone:</strong> (16) 99797-2936</p>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-300 hover:text-brand-gold transition-colors">
                                    <WhatsAppIcon className="w-5 h-5 text-green-500" />
                                    <span><strong>WhatsApp:</strong> (16) 99700-1778</span>
                                </a>
                             </div>
                        </div>
                    </div>
                    <div className="h-96 lg:h-full w-full rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.503460677114!2d-48.17886472472097!3d-21.76100817998064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f17a9a1a0179%3A0x64b6e5f8f553a1d!2sAlc%C3%A2ntara%20Barbearia!5e0!3m2!1sen!2sbr!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location of Alcântara Barbearia"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
