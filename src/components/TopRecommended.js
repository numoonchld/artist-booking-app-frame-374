import React from "react";
import "./TopRecommended.css";
import ArtistCard from "./ArtistCard";

const artists = [
  {
    id: 1,
    image: "./assets/martin-garrix.png",
    name: "Martin Garrix",
    body: "Martin Garrix - the name that belongs to one of the youngest and most successful DJ’s/producers..",
    nationality: "Dutch",
    available: true,
    rating: 4,
    time: "10 - 15 Min.",
  },
  {
    id: 2,
    image: "./assets/chain-smokers.png",
    name: "Chainsmokers",
    body: "Denver-based producer ILLENIUM is one of the most successful crossover electronic artists today, ",
    nationality: "Dutch",
    available: true,
    rating: 3,
    time: "10 - 15 Min.",
  },
];

function TopRecommended() {
  return (
    <>
      <section className="top-recommended-container">
        <div className="top-text-area">
          <span className="title">Top Recommended</span>
          <span className="view-all-cta">View All</span>
        </div>
        <div className="artists-area">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} info={artist} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TopRecommended;
