import React from 'react'
import StateG from './StateG'

export default function IndiaG() {
    const yojna={
        money:10000,
        rashan:true,
        pention:500
    }
  return (
    <div>
      <h1>IndiaG</h1>
      <StateG yojna={yojna}/>
    </div>
  )
}
