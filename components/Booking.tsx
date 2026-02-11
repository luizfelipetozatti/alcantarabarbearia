
import React, { useState, useMemo, useCallback } from 'react';
import { Service, Barber, BookingDetails } from '../types';
import { SERVICES, BARBERS, OPENING_HOURS, ANY_BARBER } from '../constants';
import { CalendarIcon, ClockIcon, UserIcon, CheckCircleIcon, ArrowLeftIcon } from './icons/Icons';

const Booking: React.FC = () => {
    const [step, setStep] = useState(1);
    const [booking, setBooking] = useState<BookingDetails>({
        service: null,
        barber: null,
        date: null,
        time: null,
    });
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleSelectService = (service: Service) => {
        setBooking({ ...booking, service });
        setStep(2);
    };

    const handleSelectBarber = (barber: Barber) => {
        setBooking({ ...booking, barber });
        setStep(3);
    };

    const handleSelectDate = (day: number) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setBooking({ ...booking, date: selectedDate, time: null });
    };

    const handleSelectTime = (time: string) => {
        setBooking({ ...booking, time });
        setStep(4);
    };

    const handleConfirmBooking = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Agendamento confirmado para ${booking.service?.name} com ${booking.barber?.name} em ${booking.date?.toLocaleDateString('pt-BR')} às ${booking.time}.`);
        resetBooking();
    };

    const resetBooking = () => {
        setStep(1);
        setBooking({ service: null, barber: null, date: null, time: null });
    };

    const changeMonth = (offset: number) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + offset);
            return newDate;
        });
    };

    const availableTimes = useMemo(() => {
        if (!booking.date || !booking.service) return [];
        
        const dayOfWeek = booking.date.getDay();
        if (dayOfWeek === 0) return []; // Sunday

        const hours = dayOfWeek === 6 ? OPENING_HOURS.saturday : OPENING_HOURS.weekdays;
        const slots: string[] = [];
        const serviceDuration = booking.service.duration;

        for (let h = hours.start; h < hours.end; h++) {
            for (let m = 0; m < 60; m += 15) {
                const totalMinutesStart = h * 60 + m;
                const totalMinutesEnd = (hours.end * 60);

                if (totalMinutesStart + serviceDuration <= totalMinutesEnd) {
                    const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
                    slots.push(time);
                }
            }
        }
        
        // Simulate some slots being booked
        return slots.filter((_, i) => (booking.date!.getDate() + i) % 3 !== 0);
    }, [booking.date, booking.service]);

    const renderCalendar = () => {
        const today = new Date();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

        return (
            <div className="bg-brand-gray p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-600">&lt;</button>
                    <div className="font-bold text-lg">{currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</div>
                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-600">&gt;</button>
                </div>
                <div className="grid grid-cols-7 text-center gap-1 text-sm">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => <div key={d} className="font-semibold text-gray-400">{d}</div>)}
                    {emptyDays.map(i => <div key={`empty-${i}`}></div>)}
                    {days.map(day => {
                        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        const isSunday = date.getDay() === 0;
                        const isSelected = booking.date?.toDateString() === date.toDateString();
                        const isDisabled = isPast || isSunday;

                        return (
                            <button 
                                key={day} 
                                disabled={isDisabled}
                                onClick={() => handleSelectDate(day)}
                                className={`w-10 h-10 rounded-full transition-colors duration-200 ${
                                    isDisabled ? 'text-gray-600 cursor-not-allowed' : 
                                    isSelected ? 'bg-brand-gold text-brand-dark font-bold' : 
                                    'hover:bg-gray-600'
                                }`}
                            >{day}</button>
                        );
                    })}
                </div>
            </div>
        );
    };
    
    const ProgressStep = ({ stepNumber, label, isActive }: { stepNumber: number; label: string; isActive: boolean }) => (
        <div className={`flex items-center ${isActive ? 'text-brand-gold' : 'text-gray-500'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${isActive ? 'bg-brand-gold text-brand-dark' : 'bg-gray-700'}`}>
                {step > stepNumber ? '✓' : stepNumber}
            </div>
            <span className="ml-2 font-semibold hidden sm:inline">{label}</span>
        </div>
    );
    
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-heading uppercase text-brand-gold">Agende seu Horário</h2>
                    <p className="text-gray-300 mt-2">Simples, rápido e online.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-brand-dark p-6 sm:p-8 rounded-lg shadow-2xl">
                    {/* Progress Bar */}
                    <div className="flex justify-between items-center mb-8">
                        <ProgressStep stepNumber={1} label="Serviço" isActive={step >= 1} />
                        <div className="flex-1 h-0.5 bg-gray-700 mx-2"></div>
                        <ProgressStep stepNumber={2} label="Barbeiro" isActive={step >= 2} />
                        <div className="flex-1 h-0.5 bg-gray-700 mx-2"></div>
                        <ProgressStep stepNumber={3} label="Data/Hora" isActive={step >= 3} />
                        <div className="flex-1 h-0.5 bg-gray-700 mx-2"></div>
                        <ProgressStep stepNumber={4} label="Confirmar" isActive={step >= 4} />
                    </div>

                    {/* Step Content */}
                    <div className="min-h-[400px]">
                        {step > 1 && step < 5 && (
                             <button onClick={() => setStep(s => s > 1 ? s - 1 : 1)} className="flex items-center text-brand-gold mb-4 hover:underline">
                                 <ArrowLeftIcon />
                                 <span className="ml-1">Voltar</span>
                             </button>
                        )}
                        {step === 1 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-center">1. Escolha o serviço</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {SERVICES.map(s => (
                                        <button key={s.name} onClick={() => handleSelectService(s)} className="text-left p-4 bg-brand-gray rounded-lg hover:bg-gray-700 border border-transparent hover:border-brand-gold transition-all">
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-lg">{s.name}</span>
                                                <span className="font-semibold text-brand-gold">R${s.price},00</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-center">2. Escolha o profissional</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                    {[...BARBERS, ANY_BARBER].map(b => (
                                        <button key={b.id} onClick={() => handleSelectBarber(b)} className="text-center group p-2 rounded-lg hover:bg-brand-gray transition-all">
                                            <img src={b.imageUrl} alt={b.name} className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-700 group-hover:border-brand-gold transition-colors" />
                                            <p className="mt-2 font-semibold">{b.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-center">3. Escolha a data e hora</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {renderCalendar()}
                                    <div>
                                        <h4 className="font-bold text-lg mb-4 text-center">Horários disponíveis</h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-80 overflow-y-auto pr-2">
                                            {availableTimes.length > 0 ? availableTimes.map(t => (
                                                <button key={t} onClick={() => handleSelectTime(t)} className="p-2 bg-brand-gray rounded-md hover:bg-gray-700 hover:text-brand-gold transition-all">
                                                    {t}
                                                </button>
                                            )) : (
                                                <p className="col-span-full text-center text-gray-400">Nenhum horário disponível para esta data.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 4 && booking.service && booking.barber && booking.date && booking.time &&(
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-center">4. Confirme seu agendamento</h3>
                                <div className="bg-brand-gray p-6 rounded-lg mb-6 space-y-4">
                                    <div className="flex items-center"><UserIcon /> <span className="ml-3 font-semibold">{booking.barber.name}</span></div>
                                    <div className="flex items-center"><CheckCircleIcon /> <span className="ml-3 font-semibold">{booking.service.name} (R${booking.service.price},00)</span></div>
                                    <div className="flex items-center"><CalendarIcon /> <span className="ml-3 font-semibold">{booking.date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })}</span></div>
                                    <div className="flex items-center"><ClockIcon /> <span className="ml-3 font-semibold">{booking.time}</span></div>
                                </div>
                                <form onSubmit={handleConfirmBooking}>
                                    <div className="grid grid-cols-1 gap-4 mb-6">
                                        <input type="text" placeholder="Seu Nome" required className="bg-gray-700 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                                        <input type="tel" placeholder="Seu Telefone" required className="bg-gray-700 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                                    </div>
                                    <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition-all duration-300">
                                        Confirmar Agendamento
                                    </button>
                                </form>
                            </div>
                        )}
                        {step === 5 && (
                           <div className="text-center py-12">
                               <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                               <h3 className="text-2xl font-bold mb-2">Agendamento Confirmado!</h3>
                               <p className="text-gray-300 mb-6">Enviamos os detalhes para você. Estamos te esperando!</p>
                               <button onClick={resetBooking} className="bg-brand-gold text-brand-dark font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition-all">
                                   Novo Agendamento
                               </button>
                           </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;

