
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import ProductPage from './pages/products';
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import ServicesSection from './pages/services';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Toaster from './components/Toaster';

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicesSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App
