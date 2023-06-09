import React from 'react'
import ReactDOM from 'react-dom/client'

// JSX Rules
// return single element always !!!
// use <React.Fragment> ... </React.Fragment/> or <>...</>
// camelCase for naming attributes and properties
// no class attribute but className 
// must close every element  </>
// nested component


const Greeting = () => {
  return (
      <>
          <Person></Person>
          <Message></Message>
          <i>I will keep you updated</i>
      </>
  )
}
const Person = () => <h2>Zayzou</h2>
const Message = () => <p>I am learning React</p>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)


