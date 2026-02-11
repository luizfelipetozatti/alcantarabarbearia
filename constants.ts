
import { Service, Barber } from './types';

export const SERVICES: Service[] = [
    { name: 'Corte de Cabelo', price: 40, duration: 30 },
    { name: 'Barba', price: 40, duration: 30 },
    { name: 'Corte e Barba', price: 70, duration: 60 },
    { name: 'Sobrancelha', price: 15, duration: 15 },
    { name: 'Pezinho', price: 15, duration: 15 },
    { name: 'Corte Infantil', price: 35, duration: 30 },
];

export const BARBERS: Barber[] = [
    { id: 1, name: 'Alcântara', imageUrl: 'https://picsum.photos/seed/alcantara/400/400' },
    { id: 2, name: 'Davi', imageUrl: 'https://picsum.photos/seed/davi/400/400' },
    { id: 3, name: 'Maicon', imageUrl: 'https://picsum.photos/seed/maicon/400/400' },
    { id: 4, name: 'Gabriel', imageUrl: 'https://picsum.photos/seed/gabriel/400/400' },
];

export const ANY_BARBER: Barber = { id: 0, name: 'Qualquer Barbeiro', imageUrl: 'https://picsum.photos/seed/any/400/400' };

export const OPENING_HOURS = {
    weekdays: { start: 9, end: 19 }, // 9 AM to 7 PM
    saturday: { start: 9, end: 18 }, // 9 AM to 6 PM
};

export const INSTAGRAM_URL = "https://www.instagram.com/alcantara_barbearia_oficial/";
export const BOOKSY_URL = "https://booksy.com/pt-br/139535_alcantara-barbearia_barbearias_874135_araraquara#ba_s=seo";
export const GMAPS_URL = "https://maps.app.goo.gl/NZ7tcE56B3NUyBhHA";

export const WHATSAPP_NUMBER = "5516997001778";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
