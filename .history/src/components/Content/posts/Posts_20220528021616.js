import React, { Component } from 'react';

import Post from "./Post"
import * as constantClass from "../../Constant/Constant"
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            dataIsLoad: false,
        }
    }
    componentDidMount() {
        fetch(constantClass.localhost+"/post/getAll")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    postArray: data,
                    dataIsLoad : true
                })
            })
    }
    
    render() { 
        const { dataIsLoad, postArray } = this.state
        
        if (!dataIsLoad) {
            return <div>
            <h1> Pleses wait some time.... </h1> </div> 
        }
        if (postArray.length === 0) {
            return <div>No </div>
        }
        const Display = postArray.map(item => {
            return (
                <Post
                    key={item.id}
                    id={item.id}
                    userId = {item.idUser}
                    upvotes={item.upvotes}
                    subreddit_image_src={null}
                    community={item.community}
                    username={item.username}
                    title={item.title}
                    text={item.text}
                    image_src={item.image_src}
                    comments={item.comments}
                />
                )
        })
        return ( 
            <div className="posts-wrapper" >
                { Display}
            </div>
         );
    }
}
 
export default Posts;