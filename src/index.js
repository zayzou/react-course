import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};


const books = [
    {
        id: 1,
        author: "Atomic Habits",
        title: "James Clear",
        image: "./images/cover.jpg"
    },
    {
        id: 2,
        author: "The 48 Laws of Power",
        title: " Robert Greene",
        image: "./images/cover2.jpg"
    }
]


const BookList = () => {
    return (
        <section className={'booklist'}>
            {
                books.map((book) => {
                    const {id, image, author, title} = book;
                    return <Book key={id} img={image} author={author} title={title}/>
                })
            }
        </section>
    )

}

const Book = (props) => {
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


