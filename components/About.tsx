
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-purple rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/perfume1/600/600" 
                alt="Elegant perfume bottle" 
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              The Essence of <span className="text-brand-gold">Confidence</span>
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto lg:mx-0 mb-6 rounded-full"></div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              At Melocents, we believe that fragrance is more than a scent—it's an identity. Each bottle is a masterpiece, crafted with the finest ingredients to create an unforgettable olfactory experience. Our mission is to empower you to express your unique self and embrace your worth with every spritz.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Discover a world of luxury, elegance, and sophistication. Find the scent that tells your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
