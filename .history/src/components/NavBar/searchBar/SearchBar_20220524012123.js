import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent : "" 
    }
  }
  submitComments = (event) => {
    if (event.key == "Enter") {
      let community = event.currentTarget.value
      var data = {
        "community" : community
      }
      if (community != null || community != undefined) {
        localStorage.setItem("community")
      }
    }
  }
  render() { 
    return ( 
      <div className="searchbar">
        <label htmlFor="searchbar">
          <SearchIcon />
        </label>
        <input id="searchbar" placeholder="Search" onKeyPress={this.submitComments}/>
      </div>
     );
  }
}
 
export default SearchBar;
  

