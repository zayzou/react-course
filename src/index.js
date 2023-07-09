import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};
let title = "✅Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones";
let author = <>James Clear</>;
let image = "./images/cover.jpg"
const BookList = () => {
    return (
        <section className={'booklist'}>
            <Book author={author} title={title} img={image}/>
            <Book author={author} title={title} img={image}/>
            <Book author={author} title={title} img={image}/>
        </section>
    )

}

const fun = (par1, para2) => {
    console.log(par1, para2)
}

fun("software", "developer")
const Book = (props) => {
    console.log(props)
    return (
        <article className={'book'}>
            <img src={props.img} alt={props.title}/>
            <h2>{props.title}</h2>
            <h4 style={inlineStyle}> {props.author}</h4>
        </article>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


