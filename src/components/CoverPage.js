import React from 'react'
import '../App.css'
import InputField from './InputField'

export default function CoverPage(props) {
    const {firstPost, value} = props
    const title = firstPost.title
    const author = firstPost.author
    const imgUrl = firstPost.url
    const permalink = firstPost.permalink
    const date = firstPost.created
    const subreddit = firstPost.subreddit

    console.log(firstPost)
    return(
        <div className='cover'>
            <div className='container coverpage'>
                <p className='small-text'>{date}</p>
                <InputField
                    fontSize={8}
                    fontWeight={700}
                    textTransform='uppercase'
                    placeholder={subreddit}
                    value={subreddit}
                    />
                <div className='subtitle'>
                    <a className='link normal' href={`https://www.reddit.com/user/${author}`}>{author}</a>
                </div>
                <img className='img' src={imgUrl}></img>
                <a className='normal' href={`https://www.reddit.com/${permalink}`}><p>{title}</p></a>
                </div>
        </div>
    )  
}