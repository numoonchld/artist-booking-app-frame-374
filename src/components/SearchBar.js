import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="search-bar-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input className="search-bar-input-field" placeholder="Search Here" />
      </div>
    </>
  );
}

export default SearchBar;
