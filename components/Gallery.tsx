
import React from 'react';

const galleryImages = [
    'https://picsum.photos/seed/cut1/500/500',
    'https://picsum.photos/seed/cut2/500/500',
    'https://picsum.photos/seed/cut3/500/500',
    'https://picsum.photos/seed/cut4/500/500',
    'https://picsum.photos/seed/cut5/500/500',
    'https://picsum.photos/seed/cut6/500/500',
    'https://picsum.photos/seed/cut7/500/500',
    'https://picsum.photos/seed/cut8/500/500',
];

const Gallery: React.FC = () => {
    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-heading uppercase text-brand-gold">Galeria</h2>
                    <p className="text-gray-300 mt-2">Confira nosso trabalho.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="overflow-hidden aspect-square">
                            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
