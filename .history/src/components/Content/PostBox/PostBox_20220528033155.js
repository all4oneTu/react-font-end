import React from 'react'
import Avatar from './Avatar'
import PhotographIcon from '*.avif'

function PostBox() {
  return (
    <div>
          <div>
              <Avatar />
              <input type="text"
                  placeholder="create a Post"
              />
          </div>
    </div>
  )
}

export default PostBox