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
