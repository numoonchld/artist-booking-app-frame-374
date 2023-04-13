import React from "react";
import "./RecentSearch.css";

const searchTerm = ["DJing", "Dancing", "Singing"];

const SearchTermTag = ({ tagText }) => {
  return (
    <>
      <div className="search-term-tag-text">{tagText}</div>
    </>
  );
};

function RecentSearch() {
  return (
    <>
      <section className="recent-search-container">
        <div className="title">Recent Search</div>
        <div className="tags-area">
          {searchTerm.map((term) => (
            <SearchTermTag key={term} tagText={term} />
          ))}
        </div>
      </section>
    </>
  );
}

export default RecentSearch;
