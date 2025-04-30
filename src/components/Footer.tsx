import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-playfair font-bold text-white">Puff & Bubble</span>
            </Link>
            <p className="text-brown-100 mb-4">
              Уникальное сочетание свежей выпечки и оригинальных напитков в самом центре города
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-rose-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-rose-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-rose-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-300">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brown-100 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-brown-100 hover:text-white transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brown-100 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-brown-100 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-brown-100 hover:text-white transition-colors">
                  Заказать
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-300">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-rose-300" />
                <span className="text-brown-100">ул. Пекарная, 15, Москва</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-rose-300" />
                <span className="text-brown-100">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-rose-300" />
                <span className="text-brown-100">info@puffandbubble.ru</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-brown-100">
                <span className="font-semibold">Часы работы:</span><br />
                Пн-Пт: 8:00 - 21:00<br />
                Сб-Вс: 9:00 - 22:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-6">
          <p className="text-sm text-center text-brown-300">
            © {new Date().getFullYear()} Puff & Bubble. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
