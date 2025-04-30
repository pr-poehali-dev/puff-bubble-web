import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070&auto=format&fit=crop)', 
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 to-brown-800/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Puff & Bubble
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-rose-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Уникальное сочетание свежей выпечки и bubble tea в каждой чашке
          </motion.p>
          <motion.p 
            className="text-lg text-white/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Мы создаем неповторимые вкусовые сочетания из свежих ягод, фруктов и натуральных ингредиентов
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/menu" 
              className="px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors inline-flex items-center justify-center"
            >
              Наше меню
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/order" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md hover:bg-white/20 transition-colors"
            >
              Заказать онлайн
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
