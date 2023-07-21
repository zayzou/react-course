import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {books} from "./books";
const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};




const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        if (book !== undefined) {
            console.log(book.title)
        } else {
            console.log("Book not found")
        }
    }

    return (<section className={'booklist'}>
        {books.map((book) => {
            return <Book getBook={getBook} {...book} key={book.id}/>
        })}
    </section>)

}

const Book = (props) => {
    const {author, title, image, getBook, id} = props



    // console.log(props)
    return (<article className={'book'}>
        <img src={image} alt={title}/>
        <h2>{title}</h2>
        <button type="button" onClick={() => getBook(id)}>Display value</button>
        <h4 style={inlineStyle}> {author}</h4>
    </article>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


