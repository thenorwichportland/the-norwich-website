import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Listings from '../components/Listings';
import Gallery from '../components/Gallery';
import VideoTour from '../components/VideoTour';
import Location from '../components/Location';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Listings />
      <Gallery />
      <VideoTour />
      <Location />
      <Reviews />
    </Layout>
  );
} 