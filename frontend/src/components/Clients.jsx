import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


function Clients() {
  const clients = [
    { id: 1, name: 'Client 1', logo: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Client 2', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, name: 'Client 3', logo: '/photo/img3.jpg' },
    { id: 4, name: 'Client 4', logo: '/photo/img4.webp' },
    { id: 5, name: 'Client 5', logo: '/photo/img5.avif' },
    { id: 6, name: 'Client 6', logo: '/photo/img6.jpg' },
    { id: 7, name: 'Client 7', logo: '/photo/img7.webp' },
    { id: 8, name: 'Client 8', logo: '/photo/img8.avif' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Trusted by <span className="text-gray-800">Leading Companies</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg">Join thousands of companies that trust our services</p>
        </div>

        {/* Mobile Single Image Slider */}
        <div className="block md:hidden relative mb-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg p-6">
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                  <img
                    src={clients[currentIndex].logo}
                    alt={clients[currentIndex].name}
                    className="w-full h-16 object-contain mx-auto"
                    width={100}
                    height={100}
                  />
                  <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                    {clients[currentIndex].name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
          >
            <ChevronLeft className="text-blue-600" size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
          >
            <ChevronRight className="text-blue-600" size={16} />
          </button>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:block mb-8 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client) => (
              <div key={client.id} className="group">
                <div className="bg-white rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-12 md:h-16 object-contain mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    width={100}
                    height={100}
                  />
                  <p className="text-center text-xs md:text-sm text-gray-600 mt-2 md:mt-3 font-medium">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Auto-Scroll Animation */}
        <div className="relative">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 text-gray-700">
            Continuous Partnership
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-8"
                >
                  <div className="bg-white rounded-lg p-3 md:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-20 md:w-32 h-8 md:h-12 object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Clients;