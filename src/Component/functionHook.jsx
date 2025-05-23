import React from "react";
import { useEffect,useState } from "react";
function FunctionalCounter(){
    const [count,setCount] = useState(0);

    //runs oncd on mount
    useEffect(() =>{
    console.log("mounted")
    return ()=>{
        console.log("unmounted")
    }
},[])

// runs on  everttime it update
useEffect (()=>{
    console.log('update:' ,count);
},[count]);

useEffect(()=>{
    console.log("3one");
})
return(
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
);
}

export default FunctionalCounter;
