
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from 'react'
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  submitComments = (event) => {
    if (event.key === "Enter") { 
      let community = event.currentTarget.value
      if (community != null || communi != undefined) { 

      }
    }
  }
  state = {  }
  render() { 
    return ( 
      <div className="searchbar">
      <label htmlFor="searchbar">
        <SearchIcon />
      </label>
        <input id="searchbar" placeholder="Search" onKeyPress={this.submitComments} />
      </div>
     );
  }
}
 
export default SearchBar;






