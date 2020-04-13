import React from 'react'

function tvBrand({brandname}) {
    if(brandname === 'Samsung'){
        throw new Error('Not a tv brand!')
    }
    return (
        <div>
            {brandname}
        </div>
    )
}

export default tvBrand
