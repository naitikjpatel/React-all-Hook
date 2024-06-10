import React,{useRef} from 'react'

export default function UseRefHook() {
    const myRef=useRef(null);
    console.log(myRef);

    //useRef thi apre html element ne lai shakiye chei
    //like getElementById jevu
    //useRef thi apre html element ne access kari shakiye chei
    const focusInput=()=>{
        myRef.current.focus();
    }
  return (
    <div>
        {/* documentbyiD thi dom object value leva mate */}
        {/* badhi value fill na kare and submit kare tyre missing input par te focus kare che */}

      <h1>This is useRef Hook</h1>
      <input type="text" ref={myRef} />
      {/* <h1 ref={myRef}>hello</h1> console par h1 print karshe*/} 
      <button onClick={focusInput} >Focus</button>
    </div>
  )
}
