import { MapPinIcon, BuildingStorefrontIcon, BeakerIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function Location() {
  const attractions = [
    {
      name: "Blue Lagoon",
      distance: "10 min drive",
      description: "A stunning natural lagoon with crystal clear blue water, perfect for swimming and relaxation.",
      icon: <MapPinIcon className="w-6 h-6 text-primary" />
    },
    {
      name: "Boston Bay Beach",
      distance: "15 min drive",
      description: "Famous for its jerk cuisine and beautiful beach with great waves for surfing.",
      icon: <MapPinIcon className="w-6 h-6 text-primary" />
    },
    {
      name: "Local Markets",
      distance: "5 min walk",
      description: "Explore local markets offering fresh produce, crafts, and authentic Jamaican goods.",
      icon: <BuildingStorefrontIcon className="w-6 h-6 text-primary" />
    },
    {
      name: "Reach Falls",
      distance: "30 min drive",
      description: "A natural paradise with cascading waterfalls and lush greenery.",
      icon: <BeakerIcon className="w-6 h-6 text-primary" />
    },
    {
      name: "Port Antonio Marina",
      distance: "10 min walk",
      description: "Beautiful marina with yachts and boats, offering various water activities.",
      icon: <TruckIcon className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section id="location" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Location</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Port Antonio, Jamaica, The Norwich offers easy access to beautiful beaches, 
            natural attractions, and local culture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.4559329830565!2d-76.45677492392393!3d18.002793987713154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb2d0068a6a269%3A0xe081a5268bab6e8f!2sThe%20Norwich%2C%20Port%20Antonio%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1715815440763!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="The Norwich Location Map"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Find Us</h3>
              <p className="text-gray-600 mb-4">
                The Norwich is located in Port Antonio, Jamaica. Our property offers a perfect blend of 
                convenience and tranquility.
              </p>
              <div className="flex items-center text-gray-700">
                <MapPinIcon className="w-5 h-5 mr-2 text-primary" />
                <span>Port Antonio, Jamaica</span>
              </div>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Nearby Attractions</h3>
            <div className="space-y-6">
              {attractions.map((attraction, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {attraction.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{attraction.name}</h4>
                    <p className="text-sm text-secondary mb-1">{attraction.distance}</p>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Add More Top Attractions and Local Dining Favorites */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* More Top Attractions */}
          <div>
            <h3 className="text-2xl font-bold mb-4">More Top Attractions</h3>
            <ul className="space-y-2">
              {/* Somerset Falls - has website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                <a href="https://www.somersetfalls.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary cursor-pointer transition-colors">Somerset Falls</a>
              </li>
              {/* San Shy Beach - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                San Shy Beach
              </li>
              {/* Blue Lagoon - no official website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Blue Lagoon
              </li>
              {/* Frenchman's Cove - has website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                <a href="https://www.frenchmanscove.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary cursor-pointer transition-colors">Frenchman's Cove</a>
              </li>
              {/* Winnifred Beach - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Winnifred Beach
              </li>
              {/* Boston Bay Beach - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Boston Bay Beach
              </li>
              {/* San San Beach - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                San San Beach
              </li>
              {/* Rio Grande River (Bamboo water rafting) - no official website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Rio Grande River (Bamboo water rafting)
              </li>
              {/* Fellowship River - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Fellowship River
              </li>
            </ul>
          </div>
          {/* Local Dining Favorites */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Local Dining Favorites</h3>
            <ul className="space-y-2">
              {/* Roots 21 Restaurant - has website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <a href="https://roots21ja.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">Roots 21 Restaurant</a>
              </li>
              {/* Di Hip Strip Restaurant - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Di Hip Strip Restaurant
              </li>
              {/* La Aura Cafe and Lounge - has website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <a href="https://laauracafe.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">La Aura Cafe and Lounge</a>
              </li>
              {/* Jovi's Seafood Place - no website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Jovi's Seafood Place
              </li>
              {/* Boston Jerk Center - has website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <a href="https://bostonjerkcenter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">Boston Jerk Center</a>
              </li>
              {/* The Zaca Bar - has website */}
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <a href="https://zacabar.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">The Zaca Bar</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 