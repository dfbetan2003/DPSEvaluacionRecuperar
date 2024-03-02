import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <h3>{review.username}</h3>
      <p>{review.comment}</p>
      <p>Calificación: {review.rating}/5</p>
    </div>
  );
};

export default ReviewItem;
