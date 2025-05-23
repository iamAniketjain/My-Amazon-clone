import React,{useEffect} from "react";

export const ParentChild1 = React.memo(({counter , increment}) =>{
    useEffect(() =>{
        console.log('render child')
    })
return(
    <div>
        <p>child</p>
        <p>{counter}</p>
        <button onClick={increment}>increment</button>
    </div>
)
})