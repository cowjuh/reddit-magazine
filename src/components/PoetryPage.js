import React from 'react'
import '../App.css'

export default function PoetryPage(props) {
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

    const {posts, poems, num} = props
    const poemTitle = poems[num].data.title
    const poemAuthor = poems[num].data.author
    const poemContent = decodeHtml(poems[num].data.selftext_html)
    const poemID = poems[num].data.id
    const imgTitle = posts[num].data.title
    const imgUrl = posts[num].data.url

    return(
        <div className='cover page poetry'>
            <div className='container poetry'>
                <a className='container poetry-img' href={imgUrl}>
                    <img className='img poetry' src={imgUrl}/>
                    <p className='caption'>{imgTitle}</p>
                </a>
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