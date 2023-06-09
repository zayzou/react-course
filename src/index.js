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

const Book = () => {
    return (
        <article className={'book'}>
            <Title/>
            <Author/>
            <Image/>
        </article>
    );
}


const Image = () => <img src="./images/cover.jpg"
                         alt="Atomic Habits" srcSet=""/>
const Title = () => <h3>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h3>
const Author = () => <p> James Clear</p>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


