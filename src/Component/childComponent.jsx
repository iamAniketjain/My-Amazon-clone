import React from 'react'
export const ChildComponent = ({counter , setCounter}) => {
    return(
        <div>
            <p>{counter}</p>
            <button onClick={setCounter}>Incerment</button>
        </div>
    )
}