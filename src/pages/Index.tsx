import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PopularItems from '../components/PopularItems';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Puff & Bubble - Пекарня и Bubble Tea</title>
        <meta name="description" content="Уникальное сочетание свежей выпечки и bubble tea в каждой чашке. Насладитесь нашими десертами и напитками в уютной атмосфере." />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <PopularItems />
        <Testimonials />
        <InstagramFeed />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
