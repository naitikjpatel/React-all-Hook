import React, { useContext } from 'react'
import MyContex from './MyContext'

export default function People() {
    const data=useContext(MyContex);
    console.log("Data comming From Context");
    console.log(data);
  return (
    <div>
      <h1>Counter: {data.counter}</h1>
      <button onClick={()=>data.setCounter(data.counter+1)}>Increment</button>
      <button onClick={()=>data.setCounter(data.counter-1)}>Increment</button>
    </div>
  )
}
