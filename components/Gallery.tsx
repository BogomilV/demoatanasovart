import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Updated image list with the new provided tattoos.
  // Note: These paths assume the user has saved the images to the public folder with these names.
  const images = [
    { src: "/samurai.jpg", alt: "Самурай и Демон татуировка" },
    { src: "/native-american.jpg", alt: "Портрет на индианка" },
    { src: "/eagle.jpg", alt: "Реалистичен орел" },
    { src: "/rose.jpg", alt: "Реалистична роза на рамо" },
    { src: "/dragons.jpg", alt: "Дракони на гръб" },
    { src: "/fish.jpg", alt: "Риба Кои" },
  ];

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl font-bold text-white mb-4">Портфолио</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto md:mx-0"></div>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 italic text-center md:text-right">Последвайте ни в Instagram за още нови проекти</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(img.src)}
              className="relative aspect-square cursor-pointer overflow-hidden group rounded-sm"
            >
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/40 transition-colors z-10 duration-300"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                onError={(e) => {
                  // Fallback if local image is missing
                  e.currentTarget.src = `https://picsum.photos/seed/tattoo${index}/800/800`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-10 w-10" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Увеличена снимка" 
            className="max-h-[90vh] max-w-full rounded-sm shadow-2xl border-2 border-white/10"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;