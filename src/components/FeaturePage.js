import React from 'react'
import '../App.css'

export default function FeaturePage(props) {
    const {posts, num} = props
    const author = posts[num].data.author
    const title = posts[num].data.title
    const imgUrl = posts[num].data.url
    const votes = posts[num].data.ups
    return(
        <div className='cover page'>
            <div className='container feature'>
                <img className='img feature' src={imgUrl}></img>
                <p>{title} | {votes} Upvotes</p>
                <a className='normal' href={`https://www.reddit.com/user/${author}`}>by {author}</a>
            </div>
        </div>
    )

}