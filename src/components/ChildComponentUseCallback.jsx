import React, { useEffect } from 'react'

export const ChildComponentUseCallback = ({handleClick}) => {
    useEffect(()=>{
            console.log("Child Component useEffect is running");

    },[handleClick])
  return (
    <div>ChildComponentUseCallback</div>
  )
}
