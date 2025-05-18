import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'The Norwich - Luxury Vacation Rental in Port Antonio, Jamaica' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Experience the beauty of Port Antonio, Jamaica at The Norwich, a stunning vacation rental with two luxurious accommodations. Book your paradise getaway today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="The Norwich, Port Antonio, Jamaica, vacation rental, luxury accommodation, Airbnb, Jamaica vacation" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="The Norwich - Luxury Vacation Rental in Port Antonio, Jamaica" />
        <meta property="og:description" content="Experience the beauty of Port Antonio, Jamaica at The Norwich, a stunning vacation rental with two luxurious accommodations. Book your paradise getaway today!" />
        <meta property="og:image" content="/images/ExteriorListing1.jpeg" />
        <meta property="og:url" content="https://thenorwich.com" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
} 