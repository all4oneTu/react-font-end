import React, { Component } from 'react';
import * as constantClass from "../Constant/Constant"
class CommunityPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            dataIsLoad: false,
            community : localStorage.getItem('community')
        }
    }
    componentDidMount() {
        fetch(constantClass.localhost+"/post/getAllByCom?community="+ this.scommunity)
        .then(res => res.json())
        .then(data => {
            this.setState({
                postArray: data,
                dataIsLoad : true
            })
        })
    }
    render() { 
        return ( 
            <div>
                Hello
            </div>
         );
    }
}
 
export default CommunityPost;