import React from 'react'
import "./comment.css"
import TimeAgo from 'timeago-react';
function Comment(props) {
    const time = "2022-05-27T19:25:20.971Z"
    return (
        
        <div className="post-comment-container">
            <div className="comment-header">
                <img className="comment-img" src={`https://avatars.dicebear.com/api/open-peeps/${props.username}.svg`} alt=""/> 
            </div>
            <div>
                <h5>{props.username}
                    <TimeAgo date/>
                </h5>
                <span>{ props.text}</span>
            </div>
        </div>
    )
}
export default Comment

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, sequi ex natus iste sunt fugiat? Expedita quasi tenetur iste dolor enim, commodi quibusdam obcaecati eligendi hic dicta quo cumque voluptate.