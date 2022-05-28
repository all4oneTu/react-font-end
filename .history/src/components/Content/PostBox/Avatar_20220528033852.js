import React from 'react'



function Avatar(seed) {
  return (
      <div>
          <img layout="fill"
              src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
              alt=""
          />
    </div>
  )
}

export default Avatar