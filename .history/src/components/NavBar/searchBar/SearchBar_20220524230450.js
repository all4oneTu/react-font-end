
import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from 'react'
import "./SearchBar.css"

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect : false
    }
  }
  submitComments = (event) => {
    if (event.key === "Enter") { 
      let community = event.currentTarget.value
      if (community != null || community != undefined) { 
        localStorage.setItem("community", community)
        this.setState({
          redirect: true
        })
      }
      
    }
  }
  render() { 
    if (this.state.redirect) {
      return <
    }
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






