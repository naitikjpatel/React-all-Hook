import React from 'react'
import useFetch  from './useFetch'

export const Test = () => {
    console.log(useFetch('https://jsonplaceholder.typicode.com/todos'));
    const{data,loading,error}=useFetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <div>Test


       <h1> {loading && "Loading.."  } </h1>
        {error && "Error.."}
        {
            data.map((d)=>{
                return (
                    <>
                    <h1 style={{backgroundColor:'blue',color:'white',margin:'1rem',textAlign:'center'}}>{d.title}</h1>
                    </>
                )
            })
        }
    </div>
  )
}
