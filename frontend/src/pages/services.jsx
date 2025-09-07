import React from 'react';
import {
  FileText, Calculator, Briefcase, Building2, CreditCard, UserCheck
  , Zap, Shield, Heart, MessageCircle

} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      category: "Business Registration",
      title: "GST Registration",
      description: "Complete GST registration services for new businesses and existing entities looking to become GST compliant.",
      icon: <FileText size={32} className="text-white" />,
      features: [
        "New GST Registration",
        "GST Number Allocation",
        "Digital Signature Certificate",
        "Business Setup Guidance"
      ],
      buttonText: "Get Started"
    },
    {
      id: 2,
      category: "Tax Compliance",
      title: "GST Return Filing",
      description: "Monthly and quarterly GST return filing services ensuring timely compliance and avoiding penalties.",
      icon: <Calculator size={32} className="text-white" />,
      features: [
        "GSTR-1 Filing",
        "GSTR-3B Filing",
        "Annual Return GSTR-9",
        "Input Tax Credit Reconciliation"
      ],
      buttonText: "Get Started"
    },
    {
      id: 3,
      category: "Business Registration",
      title: "UDYAM Registration",
      description: "MSME registration under UDYAM portal for small and medium enterprises to avail government benefits.",
      icon: <Briefcase size={32} className="text-white" />,
      features: [
        "UDYAM Certificate",
        "MSME Benefits Access",
        "Loan Eligibility Support",
        "Government Subsidy Assistance"
      ],
      buttonText: "Order Now"
    },
    {
      id: 4,
      category: "Company Registration",
      title: "Private Limited Company",
      description: "Complete private limited company registration with all legal formalities and documentation support.",
      icon: <Building2 size={32} className="text-white" />,
      features: [
        "Company Incorporation",
        "Director Identification Number",
        "Corporate Bank Account",
        "Compliance Calendar Setup"
      ],
      buttonText: "Get Started"
    },
    {
      id: 5,
      category: "Financial Services",
      title: "Income Tax Filing",
      description: "Professional income tax return filing services for individuals and businesses with maximum refunds.",
      icon: <CreditCard size={32} className="text-white" />,
      features: [
        "Individual ITR Filing",
        "Business Tax Returns",
        "Tax Planning Advisory",
        "Notice Response Support"
      ],
      buttonText: "File Now"
    },
    {
      id: 6,
      category: "Legal Compliance",
      title: "Trademark Registration",
      description: "Protect your brand with trademark registration services including search, filing and monitoring.",
      icon: <UserCheck size={32} className="text-white" />,
      features: [
        "Trademark Search",
        "Application Filing",
        "Registration Certificate",
        "Renewal Support"
      ],
      buttonText: "Protect Brand"
    }
  ];

  return (
    <>
      <section className="bg-[url('https://img.freepik.com/free-vector/horoscope-icons-set-with-zodiac-calendar-prediction-symbols-flat-isolated-vector-illustration_1284-83593.jpg')] text-white py-20 shadow-lg shadow-gray-700/40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Our Professional Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              From GST registration to company incorporation, tax filing, and trademark protection—get expert solutions for all your business needs in one place.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-700 transition duration-300 shadow-lg shadow-gray-400/40">
              Explore Services
            </button>
            <button className="border-2 border-white text-white bg-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white transition duration-300 shadow-lg shadow-gray-400/40">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional accounting and tax services to ensure compliance and growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  );
};

export default ServicesSection;