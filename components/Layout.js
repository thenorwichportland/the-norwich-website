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
        
        {/* Favicon - Multiple sizes for better browser support */}
        <link rel="icon" type="image/jpeg" href="/images/logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/images/logo.jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="The Norwich - Luxury Vacation Rental in Port Antonio, Jamaica" />
        <meta property="og:description" content="Experience the beauty of Port Antonio, Jamaica at The Norwich, a stunning vacation rental with two luxurious accommodations. Book your paradise getaway today!" />
        <meta property="og:image" content="/images/logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Norwich Logo" />
        <meta property="og:url" content="https://thenorwich.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Norwich" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Norwich - Luxury Vacation Rental in Port Antonio, Jamaica" />
        <meta name="twitter:description" content="Experience the beauty of Port Antonio, Jamaica at The Norwich, a stunning vacation rental with two luxurious accommodations. Book your paradise getaway today!" />
        <meta name="twitter:image" content="/images/logo.jpg" />
        <meta name="twitter:image:alt" content="The Norwich Logo" />
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