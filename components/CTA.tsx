
import React from 'react';
import { WhatsAppIcon } from './icons';

const CTA: React.FC = () => {
  const whatsappNumber = '27720438809';
  const whatsappMessage = "Hi Melocents! I'm interested in placing an order. Could you please assist me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 sm:py-32 bg-brand-purple text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
          Find Your Signature Scent Today
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Ready to experience the essence of luxury? Contact us on WhatsApp for personalized recommendations, inquiries, and to place your order directly.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold text-lg py-4 px-10 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
