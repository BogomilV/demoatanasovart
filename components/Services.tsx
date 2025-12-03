import React from 'react';
import { PenTool, Brush, Zap, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <PenTool className="h-8 w-8 text-red-500" />,
      title: "Татуировки",
      description: "Уникални дизайни, съобразени с вашата анатомия и идеи. От минимализъм до реализъм.",
      price: "От 100 лв",
    },
    {
      icon: <Brush className="h-8 w-8 text-red-500" />,
      title: "Cover-up",
      description: "Експертно скриване на стари и нежелани татуировки с нови, красиви произведения.",
      price: "От 150 лв",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: "Пиърсинг",
      description: "Професионални услуги за пиърсинг, използващи висококачествени титаниеви бижута.",
      price: "От 40 лв",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-red-500" />,
      title: "Консултация",
      description: "Запишете безплатна 15-минутна сесия за обсъждане на вашата идея, размери и място.",
      price: "Безплатно",
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Нашите Услуги</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-charcoal p-8 border border-gray-800 hover:border-red-600/50 transition-all duration-300 rounded-sm hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-gray-800/50 rounded-full inline-block group-hover:bg-red-900/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                {service.description}
              </p>
              <div className="pt-6 border-t border-gray-800">
                <span className="text-red-500 font-bold tracking-wider">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;