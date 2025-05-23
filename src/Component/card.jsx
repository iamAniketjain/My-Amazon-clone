import React from 'react'
export const Card = ({el}) => {
    return(
        <div key={el.id} style={{border : "1px solid black" , padding:"8"}}  className='Wrapper'>
            <h4>{el.name}</h4>
            <p>{el.userName}</p>
            <p>{el.email}</p>
            <pre>{el.address.city} , {el.address.street}</pre>
        </div>
    )
}