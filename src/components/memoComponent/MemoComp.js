import React from 'react'

function MemoComp({name}) {
    console.log(`Rendering memo component ${name}`)
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
