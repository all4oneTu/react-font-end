import React from 'react'
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined'
import './PostBox.css'
function PostBox() {
  return (
    <div>
          <div className="post-box-container">
              <Avatar seed={"asdsadas" } />
              <input type="text"
                  placeholder="create a Post"
              />
              <InsertPhotoOutlined/>
          </div>
    </div>
  )
}

export default PostBox