import React, { useState } from 'react'


export default function UseStateHook() {
    // useState is helpful for to create the variable in react
    //when we want to change the varible as well as ui part then we use the useStateHook for the create a varible
    let [counter,setCounter]=useState(0);
    const increment=()=>{
        setCounter(++counter);
        console.log(counter);
    }
    const decrement=()=>{
        setCounter(--counter);
        console.log(counter);
    }
  return (
    <div>
      <h1>This is UseStateHook</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
    </div>
  )
}
