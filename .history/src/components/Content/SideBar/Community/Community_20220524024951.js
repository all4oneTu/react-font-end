import React, {Componrn} from "react";
import {Link} from "react-router-dom"
import "./Community.css";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import Button from "./button/Button.tsx";
import communties from "../../../../Data/communties/communities.json"

class Community extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return (
      <div className="community-section">
        <div className="title">
          <span className="hoverable">Today's Top Growing Communities</span>
        </div>
        <div className="communities-wrapper">
          {communties.map((community, index) => (
            <div className="community hoverable">
              <span>{index + 1}</span>
              <ArrowDropUp />
              <img src={community.image_src} />
              <span className="name">r/{community.name}</span>
            </div>
          ))}
        </div>
        <div className="action-buttons">
          <Button primary label="VIEW ALL" />
          <Link to="/submitPost" className="btn-up-post">upPost</Link>
          <div className="secondary-buttons">
            <Button tertiary label="Sports" />
            <Button tertiary label="News" />
            <Button tertiary label="Gaming" />
            <Button tertiary label="Aww" />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Community;