import React from 'react'
import Table from './Table'
/*
React fragment let you group a list of children 
element without adding extra node to the DOM
*/
function Fragments() {
    return (
        <React.Fragment>
            <h1>Fragments Demo</h1>
            <p>This describes the fragment Demo component</p>
            <Table></Table>
        </React.Fragment>
    )
}

export default Fragments

 