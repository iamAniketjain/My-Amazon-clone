import React, { useState } from 'react'
import { ChildComponent } from './childComponent'

export const BindingChildCompo = () => {
    const [count , setCount] = useState(0)
    return (
        <div>
            <p>parent to child</p>
            <ChildComponent counter={count} setCounter={()=> setCount(count+1)}/>
        </div>
    )
}