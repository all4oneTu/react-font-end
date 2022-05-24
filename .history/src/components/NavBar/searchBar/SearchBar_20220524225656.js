
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from 'react'
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div className="searchbar">
      <label htmlFor="searchbar">
        <SearchIcon />
      </label>
        <input id="searchbar" placeholder="Search"  onKeyPress={(event)=>setKey(event.key) } />
      </div>

     );
  }
}
 
export default SearchBar;






