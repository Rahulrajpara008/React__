import React from 'react'
 const Card = () => {
    let name = "Rahul"
    let age = 25
    let location = "Ahmedabad"

  return (
    <div id='main' >
        <div id='main2'>
        <h1  id='headd'>Card</h1>
        <h2 id='first'>Name :{name} </h2>
        <h2 id='second' >Age : {age}</h2>
        <h2 id='third'> Location : {location} </h2>
        </div>
    </div>
  )
}
export default Card