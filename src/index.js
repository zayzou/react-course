import React, {createContext, useContext} from 'react'
import ReactDOM from 'react-dom/client'

const Greeting = () => {
    return <h1>Hello form React</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)


