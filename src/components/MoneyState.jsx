import MyContex from "./MyContext";

import React, { useState } from 'react'

export const MoneyState = (props) => {
    const yojna={
        money:10000,
        rashan:true,
        pention:500
    };

    const [counter,setCounter]=useState(0);

  return (
    <MyContex.Provider value={{yojna,counter,setCounter}}>{props.children}</MyContex.Provider>
  )
}
export default MoneyState;
