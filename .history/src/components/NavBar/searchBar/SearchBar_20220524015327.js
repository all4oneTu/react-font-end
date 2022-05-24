import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import  { Redirect,Link, useHistory } from 'react-router-dom'
import "./SearchBar.css"

function SearchBar() {
  const [key, setKey] = useState("")
  let history = useHistory();
  // localStorage.setItem("community")
  if (key === "Enter") {
    history.push("/commentPost")
    var community = document.getElementById("searchbar").value
    localStorage.setItem("community", "")
  }
  return (
    <div className="searchbar">
    <label htmlFor="searchbar">
      <SearchIcon />
    </label>
      <input id="searchbar" placeholder="Search"  onKeyPress={(event)=>setKey(event.key) } />
  </div>
  )
}
export default SearchBar;
