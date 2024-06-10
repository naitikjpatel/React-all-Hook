import React,{useEffect, useState} from 'react'

export default function UseEffectHook() {

    const [count,setCount]=useState(0);

    //useEffect use internally component Lifecycle
    /*
    useEffect(()=>{
        // data fetch no code ahi lakhyie chei
        console.log("UseEffect is Runnning");
        document.title=count;
    },[count])

    */
    // [] single time
    //[count] whenever count change useEffect is called


    // fetch APi
    useEffect(()=>{
        const fetchData=async()=>{
            const api=await fetch('https://jsonplaceholder.typicode.com/todos');
            const result=await api.json();
            // console.log(result);
            console.table(result);
        }
        fetchData()
    },[])
  return (
    <div>
      <h1>This is useEffectHook</h1>

      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
