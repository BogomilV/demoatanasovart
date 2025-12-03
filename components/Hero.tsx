import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/site-bg.jpg"
          alt="Atanasov Art Tattoo Studio Background"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
             // Fallback if the image file is not found
             e.currentTarget.src = "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80";
          }}
        />
        {/* Multiply blend mode darkens the white background of the image while keeping the black ink drawings visible */}
        {/* Increased opacity to 70% to ensure text readability against the complex drawing */}
        <div className="absolute inset-0 bg-charcoal/70 mix-blend-multiply"></div>
        {/* Gradient overlay for text readability at top and bottom, slightly stronger in middle for mobile text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/50 to-charcoal/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto pt-16 sm:pt-0">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
          ATANASOV <br className="sm:hidden" /> <span className="text-red-600">ART</span>
        </h1>
        
        <div className="flex justify-center mb-8 md:mb-12">
            <p className="text-base sm:text-lg md:text-2xl text-gray-100 tracking-widest uppercase font-light border-y border-red-600/50 py-3 sm:py-4 backdrop-blur-sm bg-charcoal/30 px-6 sm:px-10 rounded-sm shadow-xl inline-block">
              Професионални Татуировки <span className="hidden sm:inline">&</span><br className="sm:hidden" /> Изкуство
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-red-700 hover:bg-red-600 text-white font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 w-full sm:w-auto overflow-hidden rounded-sm cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Запази Час <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, '#gallery')}
            className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white/80 hover:border-red-500 text-white hover:text-red-500 font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 w-full sm:w-auto rounded-sm cursor-pointer backdrop-blur-md hover:bg-white/5 flex justify-center items-center"
          >
            Галерия
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;