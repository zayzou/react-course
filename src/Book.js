import React from "react";

const inlineStyle = {color: '#617d98', fontSize: "0.75rem", marginTop: "0.5rem"};

export const Book = (props) => {
    const {author, title, image, getBook, id, number} = props
    // console.log(props)
    return (<article className={'book'}>
        <div className={'challenge'}>#{number}</div>
        <img src={image} alt={title}/>
        <h2>{title}</h2>
        <button type="button" onClick={() => getBook(id)}>Display value</button>
        <h4 style={inlineStyle}> {author}</h4>
    </article>);
}