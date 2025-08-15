
import React from 'react';

const scents = [
  {
    name: 'Aura Magnifique',
    description: 'A radiant blend of jasmine, saffron, and ambergris. Bold and unforgettable.',
    imageUrl: 'https://picsum.photos/seed/scent1/500/700'
  },
  {
    name: 'Noir Élixir',
    description: 'A mysterious composition of black orchid, dark chocolate, and sandalwood.',
    imageUrl: 'https://picsum.photos/seed/scent2/500/700'
  },
  {
    name: 'Solstice Bloom',
    description: 'A vibrant and fresh fragrance with notes of citrus, peony, and white musk.',
    imageUrl: 'https://picsum.photos/seed/scent3/500/700'
  }
];

const ScentCard: React.FC<{ name: string; description: string; imageUrl: string; }> = ({ name, description, imageUrl }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-2xl bg-black">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="font-serif text-3xl font-bold text-brand-gold">{name}</h3>
            <p className="mt-2 text-gray-300 max-w-xs">{description}</p>
        </div>
    </div>
);


const Scents: React.FC = () => {
  return (
    <section id="scents" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Signature <span className="text-brand-gold">Collection</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Each scent is meticulously crafted to evoke a unique mood and memory. Explore our curated collection and find the one that resonates with you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {scents.map((scent, index) => (
            <ScentCard key={index} {...scent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scents;
