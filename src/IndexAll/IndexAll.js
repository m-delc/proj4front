import { React, useState, useEffect } from 'react'

export default function IndexAll() {

    // this was just for testing early on
    // this was just for testing early on
    // this was just for testing early on

    const [index, setIndex] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(setIndex)
    }, [])

    // console.log(index)

    return (
        
        <div>
            <ul>
                {/* {index.map(x => {
                    <li>{x.username}</li>
                })} */}
            </ul>
        </div>
    )

}
