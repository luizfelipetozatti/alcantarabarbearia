
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-heading uppercase text-brand-gold">Nossa Equipe</h2>
                    <p className="text-gray-300 mt-2">Profissionais dedicados ao seu estilo.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {BARBERS.map((barber) => (
                        <div key={barber.id} className="text-center group">
                            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-gray group-hover:border-brand-gold transition-all duration-300">
                                <img src={barber.imageUrl} alt={barber.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-white">{barber.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Barbers;
