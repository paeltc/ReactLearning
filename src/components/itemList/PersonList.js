import React from 'react'
import Person from './Person'

function PersonList() {
   // const names = ['Bruce', 'Clark', 'Diane']
   // const nameList = names.map(names => <h2>{names}</h2>)
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Clark",
            age: 25,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Diane",
            age: 28,
            skill: "Vue"
        }
    ]

    // const personList = persons.map(person => <h2>I'm {person.name}, I'm {person.age} years old. I have experience in {person.skill} </h2>)
    const personList = persons.map(person => <Person person={person}></Person>)
    return (
        <div>
            {/* 
                <h2>{names[0]}</h2>
                <h2>{names[1]}</h2>
                <h2>{names[2]}</h2>
            */}

            {/* Map method- wrap with parenthese */}
            {/* {names.map(names => <h2>{names}</h2>)}   */}
            {/*{nameList}*/}

            {personList}

        </div>
    )
}

export default PersonList
