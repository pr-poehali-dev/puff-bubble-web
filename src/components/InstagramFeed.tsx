import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const images = [
    'https://cdn.poehali.dev/files/ba8375f8-9a53-44c3-beda-a84e194cffde.jpg',
    'https://cdn.poehali.dev/files/73f43345-091f-4309-af06-661eb063723b.jpg',
    'https://cdn.poehali.dev/files/04d35c45-e218-436b-a9ea-b81a856a3ec7.jpg',
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1932&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1485265449635-ca623a55e95c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1887&auto=format&fit=crop'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-brown-800 mb-4">Instagram</h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Следите за нами в Instagram, чтобы быть в курсе новинок и специальных предложений
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`Instagram image ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-800/0 group-hover:bg-rose-800/70 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white/0 group-hover:text-white/100 transition-all duration-300 transform scale-0 group-hover:scale-100" size={32} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-rose-600 hover:text-rose-800 font-medium"
          >
            <Instagram size={18} className="mr-2" />
            @puffandbubble
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
