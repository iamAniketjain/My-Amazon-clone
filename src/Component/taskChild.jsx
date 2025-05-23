import React from 'react'
 

export const TaskChild = ({data}) =>{


    return(<>
        <div key={data.id} style={{border : "1px solid black" , padding:"8", backgroundColor:"grey"}}>
            <p>{data.name}</p>
            <p>{data.userName}</p>
            <p>{data.email}</p>
            <pre>{data.address.city},{data.address.street}</pre>
        </div>
        </>
    )
}