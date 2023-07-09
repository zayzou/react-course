import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};


const book1 = {
    author: "Atomic Habits",
    title: "James Clear",
    image: "./images/cover.jpg"
}

const book2 = {
    author: "The 48 Laws of Power",
    title: " Robert Greene",
    image: "./images/cover2.jpg"
}

const BookList = () => {
    return (
        <section className={'booklist'}>
            <Book author={book1.author} title={book1.title} img={book1.image}>
                <p>Lorem ipsum dolor sit.</p>
                <button>click me</button>
            </Book>
            <Book author={book2.author} title={book2.title} img={book2.image}/>

        </section>
    )

}

const Book = (props) => {
    console.log(props)
    const {author, title, img,children} = props
    return (
        <article className={'book'}>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4 style={inlineStyle}> {author}</h4>
            {children}
        </article>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


