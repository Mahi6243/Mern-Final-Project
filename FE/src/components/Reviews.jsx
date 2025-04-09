import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { 
    name: 'John Doe', 
    rating: 5, 
    text: 'Amazing product! Highly recommend.', 
    image: 'https://randomuser.me/api/portraits/men/1.jpg' 
  },
  { 
    name: 'Jane Smith', 
    rating: 4, 
    text: 'Great quality, but took a bit long to arrive.', 
    image: 'https://randomuser.me/api/portraits/women/2.jpg' 
  },
  { 
    name: 'Mike Johnson', 
    rating: 3, 
    text: 'Good product, but could be improved.', 
    image: 'https://randomuser.me/api/portraits/men/3.jpg' 
  },
  { 
    name: 'Emily Davis', 
    rating: 5, 
    text: 'Loved it! Will buy again.', 
    image: 'https://randomuser.me/api/portraits/women/4.jpg' 
  },
  { 
    name: 'Samuel Green', 
    rating: 4, 
    text: 'Pretty good for the price.', 
    image: 'https://randomuser.me/api/portraits/men/5.jpg' 
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start gap-4">
            <img 
              src={review.image} 
              alt={review.name} 
              className="w-16 h-16 rounded-full object-cover" 
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-lg font-semibold">{review.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-yellow-400 ${i < review.rating ? '' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
