import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
    return (
        <section className={'booklist'}>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};
let title = "✅Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones";
let author = <>James Clear</>;

const fun = (par1, para2) => {
    console.log(par1, para2)
}

fun("software", "developer")
const Book = () => {
    return (
        <article className={'book'}>
            <img src="./images/cover.jpg" alt={title}/>
            <h2>{title}</h2>
            <h4 style={inlineStyle}> {author}</h4>
        </article>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


