import React from 'react';
import UseTitle from '../../UseTitle';

export default function Reviews() {
  UseTitle('Reviews')
  const reviews = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
    },
    {
      id: 2,
      text: 'Nulla nec purus feugiat, molestie ipsum et, varius justo.',
      author: 'Jane Smith',
    },
    {
      id: 3,
      text: 'Varius justo consectetur adipiscing elit.',
      author: 'Mike Johnson',
    },
  ];

  return (
    <div className="reviews text-center mt-5">
      <h1 className="reviews-title text-danger">Reviews</h1>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card card mt-4 p-3">
            <h3 className="review-text mt-5">{review.text}</h3>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
