import React from 'react'
import '../App.css'

export default function FeaturePage(props) {
    const {posts, num} = props
    return(
        <div className='cover page'>
            {!posts[0]
                ? <p>Loading...</p>
                : <div className='container feature'>
                <img className='img feature' src={posts[num].data.url}></img>
                <p>{posts[num].data.title} | {posts[num].data.ups} Upvotes</p>
                <a className='normal' href={`https://www.reddit.com/user/${posts[num].data.author}`}>by {posts[num].data.author}</a>
                </div>
            }
        </div>
    )

}