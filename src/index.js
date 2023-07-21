import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};


const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        image: "./images/cover.jpg"
    },
    {
        id: 2,
        title: "The 48 Laws of Power",
        author: " Robert Greene",
        image: "./images/cover2.jpg"
    }
]


const BookList = () => {
    return (
        <section className={'booklist'}>

            {
                books.map((book) => {
                    return <Book {...book} key={book.id}/>
                })
            }
        </section>
    )

}

const Book = (props) => {
    const {author, title, image} = props
    console.log(props)


    return (
        <article className={'book'}>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <button type="button" onClick={() => {
                alert(title)
            }}>Display title
            </button>
            <h4 style={inlineStyle}> {author}</h4>
        </article>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


