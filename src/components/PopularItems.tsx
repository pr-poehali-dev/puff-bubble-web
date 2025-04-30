import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'bakery' | 'bubbleTea';
};

const PopularItems = () => {
  const [activeTab, setActiveTab] = useState<'bakery' | 'bubbleTea'>('bakery');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Клубничный пуф',
      description: 'Нежное слоёное тесто с кремом и свежими ягодами',
      price: 350,
      image: 'https://cdn.poehali.dev/files/ba8375f8-9a53-44c3-beda-a84e194cffde.jpg',
      category: 'bakery'
    },
    {
      id: 2,
      name: 'Классический круассан',
      description: 'Хрустящее тесто с шоколадной глазурью и ягодами',
      price: 280,
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1932&auto=format&fit=crop',
      category: 'bakery'
    },
    {
      id: 3,
      name: 'Клубничный чай',
      description: 'Освежающий чай с кусочками свежей клубники',
      price: 320,
      image: 'https://cdn.poehali.dev/files/73f43345-091f-4309-af06-661eb063723b.jpg',
      category: 'bubbleTea'
    },
    {
      id: 4,
      name: 'Классический Bubble Tea',
      description: 'Зеленый чай с тапиокой и сливочной пенкой',
      price: 290,
      image: 'https://cdn.poehali.dev/files/04d35c45-e218-436b-a9ea-b81a856a3ec7.jpg',
      category: 'bubbleTea'
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-brown-800 mb-4">Популярные позиции</h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Отведайте наши самые любимые посетителями десерты и напитки
          </p>
          
          {/* Category Tabs */}
          <div className="flex justify-center mt-8 mb-10">
            <div className="inline-flex p-1 bg-rose-100 rounded-lg">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'bakery' 
                    ? 'bg-rose-600 text-white' 
                    : 'text-rose-600 hover:bg-rose-200'
                }`}
                onClick={() => setActiveTab('bakery')}
              >
                Выпечка
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'bubbleTea' 
                    ? 'bg-rose-600 text-white' 
                    : 'text-rose-600 hover:bg-rose-200'
                }`}
                onClick={() => setActiveTab('bubbleTea')}
              >
                Bubble Tea
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 menu-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair font-semibold text-lg text-brown-800">{item.name}</h3>
                <p className="text-brown-600 text-sm mt-1 mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-rose-600 font-semibold">{item.price} ₽</span>
                  <button className="text-sm text-rose-600 hover:text-rose-800 font-medium">
                    В корзину
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/menu"
            className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
          >
            Полное меню
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
