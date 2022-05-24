import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css"

export default function Searchbar() {
    return (
      <div className="searchbar">
        <label htmlFor="searchbar">
          <SearchIcon />
        </label>
        <input id="searchbar" placeholder="Search" />
      </div>
    );
}
  

{/* <div className="searchbar">
        <label htmlFor="searchbar">
          <SearchIcon />
        </label>
        <input id="searchbar" placeholder="Search" />
      </div> */}