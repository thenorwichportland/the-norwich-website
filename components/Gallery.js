import { useState } from 'react';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  
  const galleryImages = [
    { src: "/images/ExteriorListing1.jpeg", alt: "Exterior view of The Norwich" },
    { src: "/images/livingRoomListting1.jpeg", alt: "Living room - Main Suite" },
    { src: "/images/bedRoomListing1.avif", alt: "Bedroom - Main Suite" },
    { src: "/images/BathroomListing1.jpeg", alt: "Bathroom - Main Suite" },
    { src: "/images/kitchenetteListing1.jpeg", alt: "Kitchenette - Main Suite" },
    { src: "/images/PatioListing1.jpeg", alt: "Patio area" },
    { src: "/images/livingRoomListing2.avif", alt: "Living room - Cozy Suite" },
    { src: "/images/bedRoomListing2.avif", alt: "Bedroom - Cozy Suite" },
    { src: "/images/bathroomListing2.avif", alt: "Bathroom - Cozy Suite" },
    { src: "/images/entrenceListing2.avif", alt: "Entrance - Cozy Suite" },
    { src: "/images/exterior2Listing1.avif", alt: "Another exterior view" }
  ];
  
  const openLightbox = (index) => {
    setActiveImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    if (activeImage === null) return;
    
    const nextIndex = (activeImage + direction + galleryImages.length) % galleryImages.length;
    setActiveImage(nextIndex);
  };
  
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our property and get a glimpse of what awaits you at The Norwich.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer relative hover-scale"
              onClick={() => openLightbox(index)}
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
                aria-label={image.alt}
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {activeImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            aria-label="Close gallery"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage(-1)}
            className="absolute left-4 text-white text-2xl focus:outline-none"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage(1)}
            className="absolute right-4 text-white text-2xl focus:outline-none"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="relative max-w-4xl max-h-full">
            <div
              className="w-full h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${galleryImages[activeImage].src})` }}
            />
            <p className="text-center text-white mt-2">{galleryImages[activeImage].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
} 