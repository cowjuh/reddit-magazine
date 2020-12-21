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
    return(
        <div className='cover page poetry'>
            <div className='container poetry'>
                {!posts[0] || !poems[0]
                ? <p>Loading...</p>
                : <React.Fragment>
                    <a className='container poetry-img' href={posts[num].data.url}>
                        <img className='img poetry' src={posts[num].data.url}/>
                        <p className='caption'>{posts[num].data.title}</p>
                    </a>
                    <h3>{poems[num].data.title}</h3>
                    <div className='html-container'>
                        <div style={htmlStyle} dangerouslySetInnerHTML={{__html: decodeHtml(poems[num].data.selftext_html)}}/>
                    </div>
                    <a href={`https://www.reddit.com/user/${poems[num].data.author}`}>
                        <p className='italic'>Written by {poems[num].data.author}</p>
                    </a>
                </React.Fragment>
                }
            </div>
        </div>
    )

}