import React from 'react'
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined'
import './PostBox.css'
function PostBox() {
  return (
    <div>
          <div className="post-box-container">
          <img src={`https://avatars.dicebear.com/api/open-peeps/${this.props.username}.svg`} /> 
              <input type="text"
                  placeholder="create a Post"
              />
              <InsertPhotoOutlined/>
          </div>
    </div>
  )
}

export default PostBox