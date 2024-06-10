import React, { useMemo, useState } from 'react'


export const UseMemoHook = () => {
    //useCallback : memoize the function
    //useMemo : memoize the function return value/result
    const[inputValue,setInputValue]=useState("");

    const calculateResult=(input)=>{
        console.log("Calculating Result...");
        return input.length;
    }

    const memoizedResult=useMemo(()=>calculateResult(inputValue),[inputValue])
  return (
    <>
    <div>UseMemoHook</div>
    
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <h1>value :{inputValue}</h1>
        <h1>InputLength : {memoizedResult}</h1>
    </>
  )
}
