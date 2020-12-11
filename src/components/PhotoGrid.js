import React from 'react'
import '../App.css'

export default function PhotoGrid(props) {
    const {posts, num} = props
    const author = posts[num].data.author
    const title = posts[num].data.title
    const imgUrl = posts[num].data.url
    const votes = posts[num].data.ups
    return(
        <div className='cover page'>
            <div className='container col2'>
                {props.posts.map((post) => {
                    return(
                            <a href={post.data.permalink}>
                                <img className='img grid' key={post.data.id} src={post.data.url}></img>
                            </a>
                    )
                })}
            </div>
        </div>
    )

}