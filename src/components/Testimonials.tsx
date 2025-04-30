import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  review: string;
  rating: number;
  date: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Екатерина',
      review: 'Обожаю их клубничные пуфы! Всегда свежие и невероятно вкусные. Bubble tea тоже на высоте, особенно с личи.',
      rating: 5,
      date: '15 апреля 2025'
    },
    {
      id: 2,
      name: 'Александр',
      review: 'Отличное место для встреч с друзьями. Вкусный чай, уютная атмосфера и потрясающие десерты!',
      rating: 5,
      date: '3 апреля 2025'
    },
    {
      id: 3,
      name: 'Мария',
      review: 'Стараюсь заходить сюда пару раз в неделю. Их тайский молочный чай с тапиокой просто невероятный!',
      rating: 4,
      date: '28 марта 2025'
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-brown-800 mb-4">Отзывы наших гостей</h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Что говорят о нас постоянные посетители
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-brown-700 mb-4">"{testimonial.review}"</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-brown-800">{testimonial.name}</span>
                <span className="text-sm text-brown-500">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
