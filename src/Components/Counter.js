import React, { useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset,incrementByAmount,decrementByAmount } from "../App/Features/Counter/CounterSlice";



const Counter=()=>{
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();

    const [incrementAmount,setIncrementAmount]=useState(0);
    const addValue=Number(incrementAmount) ||0;

    const resetAll=()=>{
        setIncrementAmount(0);
        dispatch(reset());
    }

    console.log(incrementByAmount)
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())} >+</button>
        <button onClick={()=>dispatch(decrement())} >-</button>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}> Add All</button>
        <button onClick={()=>dispatch(decrementByAmount(addValue))}> Less All</button>

        <input type="number" value={incrementAmount} onChange={(e)=>(setIncrementAmount(e.target.value))}/>

        <button onClick={()=>resetAll()} >Reset</button>
        </>
    )
}

export default Counter;