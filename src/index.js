import React from 'react'
import ReactDOM from 'react-dom/client'

// JSX Rules
// return single element always !!!
// use <React.Fragment> ... </React.Fragment/> or <>...</>
// camelCase for naming attributes and properties
// no class attribute but className 
// must close every element  </>
const Greeting = () => {
    return <React.Fragment>
        <h1 className={"sas"}>Spring is awesom e</h1>
        <input type="text"/>
        <h1>Hello form React</h1>
    </React.Fragment>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)


