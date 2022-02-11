import { React, useState, useEffect } from 'react'

export default function Index() {

    const [index, setIndex] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/index')
        .then(r => r.json())
        .then(setIndex)
    }, [])

    console.log(index)


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
