import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation once component mounts
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1950&q=80"
          alt="Luxury car background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/90 to-gray-800/90"></div>
      </div>

      {/* Animated glow blobs */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main text content */}
      <div
        className={`relative z-20 text-center px-6 max-w-5xl transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
          Trusted Vehicle Importers <span className="text-red-600">Since 2024</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          We bring top-quality vehicles from Japan to your doorstep.
        </p>

        {/* Buttons */}
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

      {/* Scroll-down indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-20"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
