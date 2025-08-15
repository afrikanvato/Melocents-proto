
import React from 'react';

const Hero: React.FC = () => {
    const whatsappNumber = '27720438809';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Melocents,%20I'm%20interested%20in%20your%20perfumes.`;
  
    const scrollToScents = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#scents')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        </div>
        
        <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter text-shadow-lg animate-fade-in-down">
                MELOCENTS
            </h1>
            <div className="w-48 h-1 bg-brand-gold my-6 rounded-full animate-fade-in-up animation-delay-300"></div>
            <p className="text-xl md:text-2xl font-light text-gray-200 mb-10 tracking-widest animate-fade-in-up animation-delay-500">
                Smell Like Your Worth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-700">
                <a 
                    href="#scents"
                    onClick={scrollToScents}
                    className="bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105"
                >
                    Discover Scents
                </a>
                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Order Now
                </a>
            </div>
        </div>
        <style>{`
            @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
            .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
            .animation-delay-300 { animation-delay: 0.3s; }
            .animation-delay-500 { animation-delay: 0.5s; }
            .animation-delay-700 { animation-delay: 0.7s; }
            .text-shadow-lg { text-shadow: 0 0 20px rgba(212, 175, 55, 0.5); }
        `}</style>
    </section>
  );
};

export default Hero;
