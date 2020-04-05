import React from 'react'
/*
  When to use index as a key
  1- The items in your list do not have a unique id
  2- The list is a static list and will not change
  3- The list will never be reordered or filtered
*/
function IndexAsKey() {
    const names =['bruce','Clark','Diana']
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default IndexAsKey
