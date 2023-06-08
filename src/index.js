import React, {createContext, useContext} from 'react'
import ReactDOM from 'react-dom/client'

/*const Greeting = () => {
    return <h1>Hello form React</h1>
}*/


const Greeting = () => {
  return React.createElement("h1",{},"Hi my name is react")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)


