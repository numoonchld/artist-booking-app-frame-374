import React from "react";
import './Rating.css'

function Rating({ score }) {
  const ratingStarArray = Array(score)
    .fill(true)
    .concat(Array(5 - score).fill(false));
  console.log({ ratingStarArray });
  return (
    <div className="rating-stars-array">
      {ratingStarArray.map((star, index) =>
        star ? (
          <i key={index} class="fa-solid fa-star"></i>
        ) : (
          <i key={index} class="fa-regular fa-star"></i>
        )
      )}
    </div>
  );
}

export default Rating;
