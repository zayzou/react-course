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
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
}


const Image = () => <img src="./images/cover.jpg"
                         alt="Atomic Habits" srcSet=""/>
const Title = () => <h2>Atomic Habits: An Easy &
    Proven Way to Build Good Habits & Break Bad Ones</h2>
const Author = () => {
    const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};
    return <h4 style={inlineStyle}> James Clear</h4>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


