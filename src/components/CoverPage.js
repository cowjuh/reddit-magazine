import React from 'react'
import '../App.css'
import InputField from './InputField'

export default function CoverPage(props) {
    const {num, posts, firstPost, handleSubmit} = props
    // const title = firstPost.title
    // const author = firstPost.author
    // const imgUrl = firstPost.url
    // const permalink = firstPost.permalink
    // const date = firstPost.created
    // const subreddit = firstPost.subreddit
    // const title = posts[num].data.title
    // const author = posts[num].data.author
    // const imgUrl = posts[num].data.url
    // const permalink = posts[num].data.permalink
    // const date = posts[num].data.created
    // const subreddit = posts[num].data.subreddit

    return(
        <div className='cover'>
            {!posts[0]
            ? <p>Loading...</p>
            : <div className='container coverpage'>
                <p className='small-text'>{posts[num].data.created}</p>
                <InputField
                    fontSize={300}
                    fontWeight={700}
                    textTransform='uppercase'
                    placeholder={posts[num].data.subreddit}
                    value={posts[num].data.subreddit}
                    type="imgSubreddit"
                    handleSubmit={handleSubmit}
                />
                <div className='subtitle'>
                    <a className='link normal' href={`https://www.reddit.com/user/${posts[num].data.author}`}>{posts[num].data.author}</a>
                </div>
                <img className='img' src={posts[num].data.url}></img>
                <a className='normal' href={`https://www.reddit.com/${posts[num].data.permalink}`}><p>{posts[num].data.title}</p></a>
            </div>
            }
        </div>
    )  
}