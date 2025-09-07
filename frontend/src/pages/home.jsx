
import Clients from "../components/Clients";

const Home = () => {
  const products = [
    { id: 1, name: "Premium Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
    { id: 2, name: "Smart Fitness Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
    { id: 3, name: "Bluetooth Speaker", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop" },
    { id: 4, name: "Wireless Mouse", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" },
    { id: 5, name: "USB-C Cable", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 6, name: "Laptop Stand", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
    { id: 7, name: "Smartphone Case", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop" },
    { id: 8, name: "Power Bank", image: "https://images.unsplash.com/photo-1609592424380-b5fa37caf7b5?w=400&h=300&fit=crop" },
    { id: 9, name: "Gaming Keyboard", image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop" },
    { id: 10, name: "HD Webcam", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop" },

  ];

  const handleContact = (productName) => {
    const phoneNumber = "9685416419";
    const message = `Hi! I'm interested in ${productName}. Can you please provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[url('https://media.istockphoto.com/id/1885692596/vector/research-idea-work.jpg?s=612x612&w=0&k=20&c=8JDsZ6fS6r-4Xjsx5wsBbpTB5hI5WlZL3qfQ8efzb3Q=')] text-white py-20 shadow-lg shadow-gray-700/40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                Welcome to Our Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
                Discover amazing products and services that will transform your business and enhance your digital experience.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-lg shadow-gray-400/40">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition duration-300 shadow-lg shadow-gray-400/40">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide cutting-edge solutions with exceptional customer service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
                <p className="text-gray-600">Lightning-fast loading times and optimized performance for the best user experience.</p>
              </div>

              <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
                <p className="text-gray-600">99.9% uptime guarantee with 24/7 customer support to ensure your business never stops.</p>
              </div>

              <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
                <p className="text-gray-600">Enterprise-grade security with end-to-end encryption to protect your valuable data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Company</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We are a leading technology company dedicated to providing innovative solutions that help businesses grow and succeed in the digital age. Our team of experts works tirelessly to deliver products that exceed expectations.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  With over 10 years of experience in the industry, we have helped thousands of companies transform their operations and achieve their goals through cutting-edge technology and exceptional service.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Read More
                </button>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <img src="https://www.financialexpress.com/wp-content/uploads/2025/05/Top-10-tech-companies-by-market-cap-2025-Who-leads-globally-and-where-does-India-stand-1.png" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our carefully curated selection of premium technology products
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base text-center min-h-[2.5rem] flex items-center justify-center">
                      {product.name}
                    </h3>

                    {/* Contact Button */}
                    <button
                      onClick={() => handleContact(product.name)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Clients />


          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your business today.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
