import React from 'react'
import Janta from './Janta'

export default function Block({yojna}) {
  return (
    <div>
      <h1>Block</h1>
      <Janta yojna={yojna}/>
    </div>
  )
}
