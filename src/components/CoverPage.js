import React from 'react'
import '../App.css'

export default function CoverPage({firstPost}) {
    const title = firstPost.title
    const author = firstPost.author
    const imgUrl = firstPost.url
    const permalink = firstPost.permalink
    const date = firstPost.created

    console.log(firstPost)
    return(
        <div className='cover'>
            <p className='small-text'>{date}</p>
            <h1>ANALOG</h1>
            <div class='subtitle'>
                <a className='link normal' href={`https://www.reddit.com/user/${author}`}>{author}</a>
            </div>
            <img className='img' src={imgUrl}></img>
            <a className='normal' href={`https://www.reddit.com/${permalink}`}><p>{title}</p></a>
        </div>
    )  
}