import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
            <Instagram className="h-8 w-8" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
            <Facebook className="h-8 w-8" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl font-display font-bold text-white mb-2 tracking-widest">
            ATANASOV ART
          </p>
          <p className="text-gray-600 text-sm uppercase tracking-wide">
            &copy; {new Date().getFullYear()} Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;