import { HomeIcon, MapPinIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Norwich</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate luxury getaway in Port Antonio, Jamaica. Our property offers
            two distinct accommodations, each designed to provide a memorable stay with stunning views
            and convenient amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <FeatureCard 
            icon={<HomeIcon className="w-8 h-8 text-primary" />}
            title="Luxury Accommodation"
            description="Two beautifully designed spaces with modern amenities and comfortable furnishings for your ultimate relaxation."
          />
          
          {/* Feature 2 */}
          <FeatureCard 
            icon={<MapPinIcon className="w-8 h-8 text-primary" />}
            title="Prime Location"
            description="Located in the heart of Port Antonio, with easy access to beaches, attractions, and local restaurants."
          />
          
          {/* Feature 3 */}
          <FeatureCard 
            icon={<ShieldCheckIcon className="w-8 h-8 text-primary" />}
            title="Safe & Secure"
            description="We prioritize your safety with secure entry systems, 24/7 support, and stringent cleaning protocols."
          />
          
          {/* Feature 4 */}
          <FeatureCard 
            icon={<SparklesIcon className="w-8 h-8 text-primary" />}
            title="Personalized Experience"
            description="Enjoy a personalized stay with local recommendations and attentive service to make your visit special."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 