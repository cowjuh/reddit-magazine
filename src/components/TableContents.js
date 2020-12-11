import React from 'react'
import { get_url_extension } from '../utils/api';
import '../App.css'

export default class TableContents extends React.Component {
    state = {
        posts: this.props.posts
    }
    render() {
        return(
            <div className='cover page'>
                <h1>
                   Contents 
                </h1>
                <ul className='container toc'>
                    {this.state.posts.map((post, index) => {
                        const {data} = post
                        const title = data.title
                        const imgUrl = data.url
                        const extension = get_url_extension(imgUrl)
                        return(
                            <React.Fragment>
                                {(extension === 'jpg' || extension === 'png') &&
                                    <li className='item toc' key={imgUrl}>
                                        <a href={imgUrl} className='toc left normal'>{title}</a>
                                        <p className='toc right'>{index}</p>
                                    </li>
                                }
                            </React.Fragment>
                        )
                    })}
                </ul>
    
            </div>
        )
    }

}