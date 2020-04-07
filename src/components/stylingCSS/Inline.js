import React from 'react'

// 2- Inline styling
const heading = {
    fontsize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
