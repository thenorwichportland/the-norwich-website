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

        {/* Nearby Attractions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Nearby Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="flex bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  {attraction.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-1">{attraction.name}</h4>
                  <p className="text-sm text-secondary mb-2">{attraction.distance}</p>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add More Top Attractions and Local Dining Favorites */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* More Top Attractions */}
          <div>
            <h3 className="text-2xl font-bold mb-4">More Top Attractions</h3>
            <ul className="space-y-2">
              {/* Somerset Falls */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Somerset Falls
              </li>
              {/* San Shy Beach */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                San Shy Beach
              </li>
              {/* Blue Lagoon */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Blue Lagoon
              </li>
              {/* Frenchman's Cove */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Frenchman's Cove
              </li>
              {/* Winnifred Beach */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Winnifred Beach
              </li>
              {/* Boston Bay Beach */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Boston Bay Beach
              </li>
              {/* San San Beach */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                San San Beach
              </li>
              {/* Rio Grande River */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Rio Grande River (Bamboo water rafting)
              </li>
              {/* Fellowship River */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                Fellowship River
              </li>
            </ul>
          </div>
          {/* Local Dining Favorites */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Local Dining Favorites</h3>
            <ul className="space-y-2">
              {/* Roots 21 Restaurant */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Roots 21 Restaurant
              </li>
              {/* Di Hip Strip Restaurant */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Di Hip Strip Restaurant
              </li>
              {/* La Aura Cafe and Lounge */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                La Aura Cafe and Lounge
              </li>
              {/* Jovi's Seafood Place */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Jovi's Seafood Place
              </li>
              {/* Boston Jerk Center */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Boston Jerk Center
              </li>
              {/* The Zaca Bar */}
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                The Zaca Bar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 