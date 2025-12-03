import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when the section is 15% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible if you want the animation to run only once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div 
            className={`order-2 md:order-1 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="font-display text-4xl font-bold text-white mb-6 border-l-4 border-red-600 pl-4">
              За Артиста
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Добре дошли в Atanasov Art, мястото, където мастилото среща душата. С дългогодишен опит в индустрията, 
              ние сме специализирани в реализирането на вашите уникални визии чрез авторски дизайни на татуировки, 
              които разказват вашата лична история.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Нашето студио поддържа най-високи стандарти за хигиена и професионализъм. Независимо дали търсите 
              фини линии, смели традиционни мотиви или реалистични портрети, ние сме посветени на това да осигурим 
              комфортна и творческа среда за вашата следваща татуировка.
            </p>
            
            <div className="mt-8 flex gap-4">
               <div className="bg-gray-800 p-4 border border-gray-700 rounded-sm">
                  <span className="block text-3xl font-display font-bold text-red-500">10+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Години Опит</span>
               </div>
               <div className="bg-gray-800 p-4 border border-gray-700 rounded-sm">
                  <span className="block text-3xl font-display font-bold text-red-500">1k+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Клиенти</span>
               </div>
            </div>
          </div>

          {/* Image */}
          <div 
            className={`order-1 md:order-2 flex justify-center md:justify-end relative transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Decorative Border */}
              <div className="absolute top-4 right-4 w-full h-full border-2 border-red-600/20 z-0"></div>
              <img
                src="https://picsum.photos/seed/tattooartist/600/800" 
                alt="Профил на артиста"
                className="relative z-10 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;