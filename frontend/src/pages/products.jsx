
import { Phone, Mail } from 'lucide-react';

const ProductPage = () => {
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
    { id: 11, name: "Wireless Charger", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop" },
    { id: 12, name: "Gaming Mouse", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" },
    { id: 13, name: "Mechanical Keyboard", image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop" },
    { id: 14, name: "Smart Home Hub", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 15, name: "Tablet Stand", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
    { id: 16, name: "LED Monitor", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop" },
    { id: 17, name: "Gaming Headset", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
    { id: 18, name: "Smart Ring", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
    { id: 19, name: "Portable SSD", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 20, name: "Smart Glasses", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" }
  ];

  const handleContact = (productName) => {
    const phoneNumber = "9685416419";
    const message = `Hi! I'm interested in ${productName}. Can you please provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h">
      {/* Hero Section */}
      <div className="relative   text-white bg-[url('https://media.istockphoto.com/id/1603182869/vector/manager-providing-constructive-feedback-vector-illustration.jpg?s=612x612&w=0&k=20&c=GeWTkyjiQUUQ5NzAaN1XFhTJzwPeUavk4i73wsiws2k=')]">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Premium Tech Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover our exclusive collection of high-quality technology products designed to enhance your digital lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                Explore Products
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                  <Phone size={16} />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Our experts are here to help you find the perfect product for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContact("General Inquiry")}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Us
            </button>
            <button
              onClick={() => handleContact("General Inquiry")}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;