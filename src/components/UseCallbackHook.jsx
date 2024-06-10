import React, { useCallback, useState } from 'react'
import { ChildComponentUseCallback } from './ChildComponentUseCallback';


function UseCallbackHook() {
    //function ne save kare che 
    //optimize mate use thay che 
    //un-neccsary re-render ne stop kare che

    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);

    // const handleClick=()=>setCounter1(counter1+1);
    const handleClick= useCallback(()=>setCounter1(counter1+1),[counter1])  
    //counter1 ne dependency pass kari etle counter1 change thashe tyre function call thashe
  return (
    <div>
      <h1>This is UseCallbackHook</h1>
        <h1>Counter2 :{counter2}</h1>
        <ChildComponentUseCallback handleClick={handleClick}/>
        <button onClick={()=>setCounter2(counter2+1)}>Increase2</button>  
        {/* counter2 change thavathi childComponent pan re-render thay che */}
        {/* jyre state change thay che tyre function navu create thay che etle child component ma te function pass karyu che and aa function apre useEffect ma pass karyu che tethi e every time re-render thay che */}
    </div>
  )
}

export default UseCallbackHook
