
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
    const bookingRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-brand-dark">
            <Header
                onBookClick={() => scrollTo(bookingRef)}
                onServicesClick={() => scrollTo(servicesRef)}
                onContactClick={() => scrollTo(contactRef)}
            />
            <main>
                <Hero onBookClick={() => scrollTo(bookingRef)} />
                <div ref={servicesRef}>
                    <Services />
                </div>
                <Barbers />
                <div ref={bookingRef}>
                    <Booking />
                </div>
                <Gallery />
                <div ref={contactRef}>
                    <Contact />
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default App;
