import { useEffect, useRef, useState } from 'react';
import { Calendar, Gauge } from 'lucide-react';

const vehicles = [
  {
    name: 'Toyota Land Cruiser Prado',
    year: 2022,
    condition: 'Excellent',
    mileage: '15,000 km',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Nissan GT-R',
    year: 2021,
    condition: 'Like New',
    mileage: '8,500 km',
    image: 'https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Honda CR-V Hybrid',
    year: 2023,
    condition: 'Pristine',
    mileage: '5,200 km',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Mazda CX-5',
    year: 2022,
    condition: 'Excellent',
    mileage: '12,000 km',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Toyota Alphard',
    year: 2023,
    condition: 'Brand New',
    mileage: '2,000 km',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Subaru Forester',
    year: 2021,
    condition: 'Excellent',
    mileage: '18,500 km',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Vehicles() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vehicles" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Featured <span className="text-red-600">Vehicles</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Handpicked premium vehicles ready for import
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className={`group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-semibold">
                    {vehicle.condition}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-4">{vehicle.name}</h3>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-red-600" />
                      <span className="text-sm">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Gauge className="w-4 h-4 mr-2 text-red-600" />
                      <span className="text-sm">{vehicle.mileage}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-black hover:bg-red-600 text-white py-3 rounded-sm transition-colors duration-300 font-semibold">
                    Request Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
