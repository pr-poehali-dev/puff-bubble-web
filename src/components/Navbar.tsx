import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/e7010981-9e28-4785-86c9-36982585661f.jpg" 
                alt="Puff & Bubble" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-playfair font-semibold text-rose-700">Puff & Bubble</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-rose-600 hover:text-rose-800 font-medium">Главная</Link>
            <Link to="/menu" className="px-3 py-2 text-rose-600 hover:text-rose-800 font-medium">Меню</Link>
            <Link to="/about" className="px-3 py-2 text-rose-600 hover:text-rose-800 font-medium">О нас</Link>
            <Link to="/contacts" className="px-3 py-2 text-rose-600 hover:text-rose-800 font-medium">Контакты</Link>
            <Link 
              to="/order" 
              className="ml-4 px-4 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700 transition-colors"
            >
              Заказать
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-rose-600 hover:text-rose-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-rose-600 hover:bg-rose-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 rounded-md text-rose-600 hover:bg-rose-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Меню
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-rose-600 hover:bg-rose-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="block px-3 py-2 rounded-md text-rose-600 hover:bg-rose-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link 
              to="/order" 
              className="block px-3 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Заказать
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
