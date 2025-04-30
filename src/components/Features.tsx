import { Coffee, Cake, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cake className="h-10 w-10 text-rose-500" />,
      title: 'Свежая выпечка',
      description: 'Каждое утро мы готовим ароматную выпечку из лучших ингредиентов'
    },
    {
      icon: <Coffee className="h-10 w-10 text-rose-500" />,
      title: 'Bubble Tea',
      description: 'Уникальные сочетания пузырькового чая с натуральными добавками'
    },
    {
      icon: <Clock className="h-10 w-10 text-rose-500" />,
      title: 'Быстрое обслуживание',
      description: 'Мы ценим ваше время и готовим заказы максимально быстро'
    },
    {
      icon: <Award className="h-10 w-10 text-rose-500" />,
      title: 'Качество',
      description: 'Только натуральные ингредиенты и уникальные рецепты'
    }
  ];

  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-brown-800 mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            В Puff & Bubble мы сочетаем традиции и инновации, чтобы создать для вас неповторимый опыт
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brown-800 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-brown-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
