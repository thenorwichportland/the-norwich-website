import Link from 'next/link';
import Slider from 'react-slick';
import { useState } from 'react';

export default function Listings() {
  const listings = [
    {
      id: 1,
      title: "The Norwich - Main Suite",
      description: "A stunning accommodation with modern amenities, perfect for couples or small families. Enjoy the spacious bedroom, elegant bathroom, and fully equipped kitchenette.",
      price: "Check pricing on Airbnb",
      capacity: "2-3 guests",
      amenities: ["Full Bathroom", "Kitchenette", "Living Area", "Patio Access"],
      images: [
        "/images/livingRoomListting1.jpeg",
        "/images/bedRoomListing1.avif",
        "/images/BathroomListing1.jpeg",
        "/images/kitchenetteListing1.jpeg",
        "/images/PatioListing1.jpeg"
      ],
      airbnbLink: "https://www.airbnb.com/rooms/1404676063993154127"
    },
    {
      id: 2,
      title: "The Norwich - Cozy Suite",
      description: "A comfortable and elegantly designed suite perfect for your Jamaican getaway. This suite features modern amenities and a relaxing atmosphere.",
      price: "Check pricing on Airbnb",
      capacity: "2 guests",
      amenities: ["Private Bathroom", "Bedroom Area", "Living Space", "Shared Outdoor Space"],
      images: [
        "/images/entrenceListing2.avif", 
        "/images/livingRoomListing2.avif",
        "/images/bedRoomListing2.avif",
        "/images/bathroomListing2.avif"
      ],
      airbnbLink: "https://www.airbnb.com/rooms/1414762820535404586"
    }
  ];
  
  return (
    <section id="listings" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Accommodations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our two beautiful listings, each offering a unique experience with top-notch amenities and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ListingCard({ listing }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image Slider */}
      <div className="relative h-80">
        <Slider {...sliderSettings}>
          {listing.images.map((image, index) => (
            <div key={index} className="h-80">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium">
          {currentSlide + 1}/{listing.images.length}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{listing.title}</h3>
        <p className="text-gray-600 mb-4">{listing.description}</p>
        
        {/* Details */}
        <div className="mb-4">
          <p className="text-secondary font-medium mb-1">{listing.price}</p>
          <p className="text-gray-600 mb-3">Capacity: {listing.capacity}</p>
          
          <h4 className="font-medium text-lg mb-2">Amenities:</h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {listing.amenities.map((amenity, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <Link href={listing.airbnbLink} legacyBehavior>
          <a 
            className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on Airbnb
          </a>
        </Link>
      </div>
    </div>
  );
} 