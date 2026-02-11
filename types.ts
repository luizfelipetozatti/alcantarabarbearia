
export interface Service {
    name: string;
    price: number;
    duration: number; // in minutes
}

export interface Barber {
    id: number;
    name: string;
    imageUrl: string;
}

export interface BookingDetails {
    service: Service | null;
    barber: Barber | null;
    date: Date | null;
    time: string | null;
}
