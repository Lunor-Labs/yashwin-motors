import { useEffect, useRef, useState } from 'react';
import { Search, CheckCircle, Ship, FileText } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Import Consultation',
    description: 'Expert guidance on selecting the perfect vehicle that meets your requirements and budget.'
  },
  {
    icon: CheckCircle,
    title: 'Vehicle Sourcing & Inspection',
    description: 'Rigorous quality checks and detailed inspections ensuring you get only the best vehicles.'
  },
  {
    icon: Ship,
    title: 'Shipping & Customs Clearance',
    description: 'Hassle-free international shipping and complete customs documentation handling.'
  },
  {
    icon: FileText,
    title: 'Local Registration Assistance',
    description: 'Full support with paperwork and registration processes to get you on the road quickly.'
  }
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Our <span className="text-red-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm p-8 rounded-sm border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-12 h-12 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
