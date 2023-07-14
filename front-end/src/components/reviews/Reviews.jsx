import React, { useEffect, useState } from "react";
import client from "../../client";
import ReviewCard from "./ReviewCard";
import ReviewDetails from "./ReviewDetails";

const ProductReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "productReview"]{
        name, 
        email,
        title, 
        rating,
        date,
        review,
        wouldRecommend,
        product ->{
          title, 
          productImage,
          blurb,
          slug, 
          defaultProductVariant
        }
      }`
      )
      .then((reviews) => {
        setReviews(reviews);
      })
      .catch(console.error);
  }, []);

  const isSelected = (index) => selectedReviewIndex === index;

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-narrow">
          {reviews &&
            reviews.map((review, index) => (
              <ReviewCard
                key={review._id}
                review={review}
                index={index}
                onClick={() => {
                  setSelectedReview(review);
                  setSelectedReviewIndex(index);
                }}
                isSelected={isSelected(index)}
              />
            ))}
        </div>
        <div className="column">
          <div className="box" style={{ minHeight: "85vh" }}>
            <ReviewDetails selectedReview={selectedReview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
