import React from 'react'

function Sort() {
    localStorage.setItem("sortBy","time")
    return (
        <div>
            Sort By
            <span>Time</span>
            <span>Vote</span>
        </div>
    )
}

export default Sort