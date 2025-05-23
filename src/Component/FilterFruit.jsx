import React,{useCallback,useContext,useState,useMemo} from 'react'
import { ParentChild1 } from './ParentChild1'

export const FilterFruit = () =>{
    const Fruit = ["apple" , "Mango" , "Papaya" , "Banana" , "Grapes"];
    const [Name , setName] = useState("")
    const [count , setcount] = useState(0)
    const filterfruits = useMemo(() =>{
        console.log("filtering fruit")
        return Fruit && Fruit.filter((el,index) => el.toLowerCase().includes(Name.toLowerCase()));
    },[Name])

    const handleCount = useCallback(() => {
        setcount(count+1)
    })

    return(
        <div style={{marginTop:30}}>
            <input type="text" value={Name} onChange={(ev) => setName(ev.target.value)} />
            <ol>
                {
                    filterfruits.map((el) => <li key={el}>{el}</li>)
                }
                <ParentChild1 counter={count} increment ={handleCount}     />
            </ol>
        </div>
    )
}