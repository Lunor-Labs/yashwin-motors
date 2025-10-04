import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-8 text-center md:text-left">
          
          {/* Logo & description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <img
                src="/yashwin-motors/logo.jpeg"
                alt="Yashwin Motor Traders"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your trusted partner in importing premium vehicles from Japan and international markets since 2010.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#vehicles" className="hover:text-red-500 transition-colors">Featured Vehicles</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/share/17WJNftLYC/?mibextid=wwXIfr" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-sm flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-sm flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-sm flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

                {/* Bottom section */}
        <div className="border-t border-neutral-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-neutral-500 text-xs">
              &copy; {currentYear} Yashwin Motor Traders. All rights reserved.
            </p>
            <p className="text-neutral-500 text-xs mt-2 md:mt-0">
              Developed by <a href="https://lunorlabs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-700">Lunor Labs</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
