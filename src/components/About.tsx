import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            About <span className="text-red-600">Yashwin Motor Traders</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                For over a decade, <span className="font-semibold text-black">Yashwin Motor Traders</span> has been the trusted name in importing premium vehicles from Japan and other international markets.
              </p>
              <p className="text-lg">
                Our commitment to <span className="font-semibold text-black">transparency, quality, and customer satisfaction</span> has made us one of the leading vehicle importers in the region. We understand that purchasing an imported vehicle is a significant investment, which is why we ensure every step of the process is handled with expertise and care.
              </p>
              <p className="text-lg">
                From sourcing the perfect vehicle to delivering it to your doorstep, we provide a seamless experience backed by years of industry knowledge and a passion for excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-sm text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-sm text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide">Vehicles Imported</div>
              </div>
              <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-8 rounded-sm text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-sm uppercase tracking-wide">Customer Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-red-700 to-red-900 p-8 rounded-sm text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wide">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
