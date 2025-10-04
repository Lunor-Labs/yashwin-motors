import { useEffect, useRef, useState } from 'react';
import { Shield, DollarSign, Zap, Award, Headphones as HeadphonesIcon, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Vehicles',
    description: 'Every vehicle undergoes thorough inspection and certification'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, complete cost breakdown provided upfront'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient logistics ensuring quick and safe delivery'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Only premium vehicles from trusted sources'
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Dedicated team guiding you through every step'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Strong partnerships with dealers across Japan and beyond'
  }
];

export default function WhyChooseUs() {
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
    <section id="why-choose-us" ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Why Choose <span className="text-red-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/20 mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <feature.icon className="w-10 h-10 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
