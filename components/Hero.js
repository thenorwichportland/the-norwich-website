import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/ExteriorListing1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in">
            Welcome to The Norwich: your private, peaceful escape.
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              Escape and unwind in this charming studio apartment nestled just minutes from Port Antonio's bustling city center. Perfect location for exploring Portland's breathtaking waterfalls, refreshing rivers, world-famous iconic beaches, and mouthwatering local cuisine. The Norwich is a perfect launchpad for your Jamaican adventure! Welcome to The Norwich - your private, peaceful escape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 fade-in" style={{ animationDelay: '0.4s' }}>
              <Link href="https://www.airbnb.com/rooms/1404676063993154127" legacyBehavior>
                <a className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-medium">
                  Book Now
                </a>
              </Link>
              <Link href="#listings" legacyBehavior>
                <a className="px-8 py-3 bg-white text-dark rounded-lg hover:bg-opacity-90 transition-all font-medium">
                  View Listings
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
} 