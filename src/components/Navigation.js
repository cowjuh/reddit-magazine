import React from 'react'
import {FaArrowRight, FaArrowLeft, FaRedoAlt} from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'
import InputField from './InputField'

export default function Navigation(props) {
    const handlePageTurn = props.handlePageTurn
    const location = useLocation()
    const curPage = Number(location.pathname.substring(1))
    const numPages = 13
    var prev, next
    if(curPage === 1){
        prev = numPages
    } else {
        prev = curPage - 1
    }
    if(curPage === numPages){
        next = 1
    } else {
        next = curPage + 1
    }

    return(
        <div className='flex-row'>
            <Link exact to={`/${prev}`} onClick={() => handlePageTurn(prev)}>
                <FaArrowLeft color='black'/>
            </Link>
            <p>{curPage}</p>
            <Link exact to={`/${next}`} onClick={() => handlePageTurn(next)}>
                <FaArrowRight color='black'/>
            </Link>
            <Link exact to={`/1`} onClick={() => handlePageTurn(1)}>
                <FaRedoAlt color='black'/>
            </Link>
        </div>
    )
}