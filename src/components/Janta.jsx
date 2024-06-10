import React, { useContext } from 'react'
import MyContex from './MyContext'

export default function Janta({yojna}) {
  const data=useContext(MyContex);
  return (
    <div>
      <h1>Janta</h1>
      <h2>Money : {yojna.money}</h2>
      <h2>rashan : {yojna.rashan ? "True":"False"}</h2>
      <h2>Pention : {yojna.pention}</h2>

      <h1>Janata Counter : {data.counter}</h1>
    </div>
  )
}
