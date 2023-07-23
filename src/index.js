import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {books} from "./books";
import {Book} from "./Book";
import {Title} from "./Title";

const BookList = () => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        if (book !== undefined) {
            console.log(book.title)
        } else {
            console.log("Book not found")
        }
    }
    return <>
        <Title/>
        <section className={'booklist'}>
            {books.map((book, index) => {
                return <Book getBook={getBook} {...book} number={index} key={book.id}/>
            })}
        </section>
    </>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)