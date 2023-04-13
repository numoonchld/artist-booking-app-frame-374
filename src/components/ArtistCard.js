import React from "react";
import "./ArtistCard.css";
import Rating from "./Rating";

function ArtistCard({ info }) {
  console.log({ info });
  return (
    <article className="artist-card-container">
      <img src={info.image} />
      <section className="artist-detail-area">
        <div className="title-area">
          <span className="artist-name-and-type-icon">
            <span className="artist-name">{info.name}</span>
            <i class="fa-solid fa-record-vinyl"></i>
          </span>
          <span className="availability-status">
            {info.available ? "Available" : "Booked"}
          </span>
        </div>
        <div className="rating-and-info-area">
          <Rating score={info.rating} />
          <p className="artist-description">{info.body}</p>
          <div className="nationality-and-booking-time">
            <span className="nationality">
              <i class="fa-solid fa-location-dot"></i>
              {info.nationality}
            </span>
            <span className="booking-time">
              <i class="fa-solid fa-clock"></i>
              {info.time}
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ArtistCard;
