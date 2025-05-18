export default function VideoTour() {
  return (
    <section id="video-tour" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Take a Video Tour</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get a closer look at The Norwich with our comprehensive video tour. Experience the property as if you were there.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/WBM8_K0Hlmc?start=1560" 
              title="The Norwich Video Tour"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              This video tour starts at the 26-minute mark and showcases both of our beautiful accommodations at The Norwich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 