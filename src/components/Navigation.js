import React from 'react'
import {FaArrowRight, FaArrowLeft, FaRedoAlt} from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'

export default function Navigation() {
    const location = useLocation()
    const path = location.pathname
    var current = parseInt(path.slice(path.length - 1))
    var prev
    var next
    current === 1? prev = 1: prev = current - 1
    current === 9? next = 1: next = current + 1

    return(
        <div className='flex-row'>
            <Link exact to={`/${prev}`}>
                <FaArrowLeft color='black'/>
            </Link>
            <p>{current}</p>
            <Link exact to={`/${next}`}>
                <FaArrowRight color='black'/>
            </Link>
            <Link exact to={`/1`}>
                <FaRedoAlt color='black'/>
            </Link>
        </div>
    )
}