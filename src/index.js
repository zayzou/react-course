import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};


const books = [
    {
        author: "Atomic Habits",
        title: "James Clear",
        image: "./images/cover.jpg"
    },
    {
        author: "The 48 Laws of Power",
        title: " Robert Greene",
        image: "./images/cover2.jpg"
    }
]
const booksList = books.map((book) => {
    return <article className={'book'}>
        <img src={book.image} alt={book.title}/>
        <h2>{book.title}</h2>
        <h4 style={inlineStyle}> {book.author}</h4>
    </article>

})

const BookList = () => {
    return (
        <section className={'booklist'}>{booksList}</section>
    )

}

const Book = (props) => {
    console.log(props)
    const {author, title, img, children} = props
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


