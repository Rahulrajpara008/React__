import React from 'react'

 const Firstcomponent = () => {
    let para ="JSX is a syntax extension for JavaScript that allows you to write HTML-like structures within your JavaScript code. This makes it easier to define the UI structure of your React components."
  return (
    <div>
        <h1>"Welcome to JSX</h1>
        <p>{para}</p>
    </div>
  )
}
export default Firstcomponent