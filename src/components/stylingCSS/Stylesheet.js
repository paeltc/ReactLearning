import React from 'react'
import './myStyle.css'

// 1 - CSS stylesheets

// function Stylesheet() {
//     return (
//         <div>
//             <h1 className='primary'>Stylesheet</h1>
//         </div>
//     )
// }

// passing as a props
// function Stylesheet(props) {
//     let className = props.primary ? 'primary' : ''
//     return (
//         <div>
//             <h1 className={className}>Stylesheet</h1>
//         </div>
//     )
// }

// Using templace literal 
function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
