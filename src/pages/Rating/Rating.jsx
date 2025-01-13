import { useState } from "react";
import "./Rating.css";
import activeStar from "../../assets/promotion/active-star.png"; // Yellow star image
import inactiveStar from "../../assets/promotion/inactive-stars.png"; // Grey star image

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  // Function to update the rating when clicked
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-container">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <img
            key={index}
            src={starValue <= rating ? activeStar : inactiveStar}
            alt={`${starValue} star`}
            className="star"
            onClick={() => handleRating(starValue)}
          />
        );
      })}
      
    </div>
  );
};

export default Rating;
