import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
    return (
        <article>
            <Book/>
            <Book/>
            <Book/>

        </article>
    )
}

const Book = () => {
    return (
        <div>
            <Title/>
            <Author/>
            <Image/>
        </div>
    );
}


const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR900,600_.jpg" alt="" srcSet=""/>
const Title = () => <h3>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h3>
const Author = () => <p> James Clear</p>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


