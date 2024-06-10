import React,{useState,useLayoutEffect, useEffect} from 'react'

// useLayoutEffect is running first then after useEffect execute
export default function UseLayoutEffectHook() {
  const [bgColor,setBgColor]=useState('yellow');

  useLayoutEffect(() => {
    console.log("UseLayoutEffect is Running");
    // document.body.style.backgroundColor=bgColor;
  }, [bgColor])

  useEffect(()=>{
    console.log("useEffect is running");
  },[])
  return (
    <div>
      <h1>This is UseLayoutEffectHook</h1>
      <button onClick={()=>setBgColor('red')}>Chnage Color</button>
    </div>
  )
}
