import { StarIcon } from '@heroicons/react/24/solid';

export default function Reviews() {
  const reviews = [
    {
      name: 'Samantha R.',
      rating: 5,
      text: 'Absolutely beautiful property! The views were stunning and the home was spotless. We felt so welcome and comfortable during our stay. Highly recommend!'
    },
    {
      name: 'David M.',
      rating: 5,
      text: 'A perfect getaway in Port Antonio. The location is peaceful and the amenities are top-notch. We will definitely be back!'
    },
    {
      name: 'Alicia T.',
      rating: 4,
      text: 'Lovely home and great hosts. The only thing we missed was a pool, but the beaches nearby made up for it!'
    },
    {
      name: 'Marcus B.',
      rating: 5,
      text: 'The Norwich exceeded our expectations. Clean, modern, and close to everything we wanted to see. Thank you!'
    },
    {
      name: 'Priya S.',
      rating: 5,
      text: 'Wonderful experience from start to finish. The house is even better than the photos!'
    },
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Guest Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our guests have to say about their stay at The Norwich.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <span className="font-semibold text-primary">- {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 