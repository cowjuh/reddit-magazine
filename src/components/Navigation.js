import React from 'react'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'

export default function Navigation() {
    const location = useLocation()
    const path = location.pathname
    var current = parseInt(path.slice(path.length - 1))
    var prev = current - 1
    var next = current + 1

    return(
        <div className='flex-row'>
            <Link exact to={`/${prev}`}>
                <FaArrowLeft color='black'/>
            </Link>
            <p>{current}</p>
            <Link exact to={`/${next}`}>
                <FaArrowRight color='black'/>
            </Link>
        </div>
    )
}