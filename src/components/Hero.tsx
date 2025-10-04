import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Trusted Vehicle Importers<br />
          <span className="text-red-600">Since 2010</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          We bring top-quality vehicles from Japan to your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('vehicles')}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Browse Vehicles
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm text-lg font-semibold transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
