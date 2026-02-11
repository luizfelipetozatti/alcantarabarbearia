
import React from 'react';

export const CalendarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-brand-gold" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-brand-gold" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-brand-gold" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-brand-gold" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-1.138 4.162 4.274-1.119zM12.232 9.173c-.197-.1-.453-.153-.708-.056s-.422.28-.488.523c-.066.243-.092.493-.086.743.006.25.066.494.182.721.115.228.268.459.458.694.19.234.395.459.617.672.222.213.441.408.657.581.216.173.422.324.618.458.195.134.38.246.547.333.167.088.33.146.476.17.147.024.288.026.422-.006.134-.033.257-.087.362-.162.106-.075.19-.173.25-.288.06-.115.093-.243.097-.375.004-.132-.014-.268-.056-.402-.042-.134-.109-.265-.201-.387s-.206-.231-.34-.324c-.134-.093-.28-.164-.435-.213s-.313-.075-.468-.072c-.155.003-.306.03-.45.082s-.273.12-.39.201c-.115.082-.213.18-.292.292-.08.112-.139.231-.172.355-.033.124-.039.243-.016.354.023.111.07.213.136.303.066.09.154.164.258.22.104.057.218.093.336.109.118.016.235.013.35-.008.115-.021.22-.056.319-.104.099-.048.188-.109.265-.18.077-.072.143-.154.195-.243l.213-.362c.167-.282.284-.571.348-.864.064-.294.074-.582.028-.858-.046-.276-.15-.531-.312-.762s-.37-.422-.614-.547c-.244-.124-.51-.186-.79-.184s-.542.069-.763.201z"/>
    </svg>
);
