import React from 'react'
import Avatar from './Avatar'
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined'

function PostBox() {
  return (
    <div>
          <div>
              <Avatar />
              <input type="text"
                  placeholder="create a Post"
              />
              <InsertPhotoOutlined/>
          </div>
    </div>
  )
}

export default PostBox