import React, { useState } from 'react'

 const Counter = () => {
  // let counter= 0
 let [counter, setcounter] = useState(1)
  let addValue = ()=>{
      // counter =counter + 1   
      setcounter(counter + 1)
      // console.log(counter);
        
  }
  let removeValue = ()=>{
    // counter=counter-1
    setcounter(counter -1)
    // console.log(counter);

  }
  return (
  <div className='App'>
    <div id='main'>
        <h3 id='first_h3'>Rahul Aur Code </h3>
        <h3 id='second_h3'>Counter a Number</h3>
        <h3 id='fourth_h3'>Counter : {counter}</h3>
        <button id='btn_1' onClick={addValue}>Add Value {counter}</button>
        <button  id='btn_2' onClick={removeValue}>Remove Value {counter}</button>
    </div>
  </div>
  )
}
export default Counter