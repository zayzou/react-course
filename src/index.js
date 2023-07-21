import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {books} from "./books";




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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


