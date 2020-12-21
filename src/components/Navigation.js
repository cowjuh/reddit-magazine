import React from 'react'
import {FaArrowRight, FaArrowLeft, FaRedoAlt} from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'
import InputField from './InputField'

export default function Navigation(props) {
    const curPage = props.curPage
    const handlePageTurn = props.handlePageTurn
    const location = useLocation()
    const path = location.pathname
    var prev, next
    if(curPage === 1){
        prev = 20
    } else {
        prev = curPage - 1
    }
    if(curPage === 20){
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