
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-heading uppercase text-brand-gold">Nossos Serviços</h2>
                    <p className="text-gray-300 mt-2">Qualidade e precisão em cada detalhe.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <div key={service.name} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50 flex justify-between items-center transition-transform transform hover:-translate-y-2">
                            <div>
                                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                                <p className="text-gray-400">{service.duration} min</p>
                            </div>
                            <div className="text-2xl font-bold text-brand-gold">
                                R${service.price},00
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
