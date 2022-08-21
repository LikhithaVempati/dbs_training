import react,{useState} from 'react';
function Counter()
{
    const [count,setCount]=useState(0);
    const increment=()=>{
        return setCount(count+1)
    }
    const decrement=()=>{
        return setCount(count-1)
    }

    return(
    <>
    <h3 id="e1">Counter:{count}</h3>
   

    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
    );

}
export default Counter;