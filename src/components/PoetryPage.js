import React from 'react'
import '../App.css'

export default function PoetryPage({post, poem}) {
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const htmlStyle = {
        color: 'black',
        maxWidth: '100%',
        textOverflow: "ellipsis"
    };

    console.log("hellllllloooo", poem)
    const poemTitle = poem.title
    const poemAuthor = poem.author
    const poemContent = decodeHtml(poem.selftext_html)
    const poemID = poem.id
    const imgTitle = post.title
    const imgUrl = post.url

    return(
        <div className='cover page'>
            <div className='container poetry'>
                <div className='container poetry-img'>
                    <img className='img poetry' src={imgUrl}/>
                    <p className='vertical'>{imgTitle}</p>
                </div>
                <h3>{poemTitle}</h3>
                <div className='html-container'>
                    <div style={htmlStyle} dangerouslySetInnerHTML={{__html: poemContent}}/>
                </div>
                <a href={`https://www.reddit.com/user/${poemAuthor}`}>
                    <p className='italic'>Written by {poemAuthor}</p>
                </a>
                
            </div>
        </div>
    )

}