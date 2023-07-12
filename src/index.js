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
            <FormEvent/>
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
            <h4 style={inlineStyle}> {author}</h4>
        </article>
    );
}

const FormEvent = () => {
    const handleFormInput = (event) => {
        console.log("form form input",event.target.value)
    }
    const handleButtonClick = () => {
        alert("button clicked")
    }
    return <section>
        <form>
            <label htmlFor="username">username</label>
            <input onChange={handleFormInput} type="text" itemID='username'/>
            <button onClick={handleButtonClick}>Submit</button>
        </form>
    </section>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


