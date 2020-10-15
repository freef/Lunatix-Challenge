import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/fontawesome-free-solid'
import {Link} from 'react-router-dom'

const Head = () => (
    <header className='flex row justify-around align-center'> 
        <Link to='/'> <img className='nav-logo' src='/navLogo.png' alt='logo'></img></Link>
        <nav className='flex justify-between align-center'>
            <Link className='nav-link m-h' to='/NBA'>SPORTS</Link>
            <a className='nav-link m-h' href='/#'>CONCERTS</a>
            <a className='nav-link m-h' href='/#'>THEATER</a>
            <a className='nav-link m-h' href='/#'>MORE</a>
        </nav>
        <div className='flex align-center'>
            <Link className='nav-link m-h' to='/tickets'> MY TICKETS</Link>
            <FontAwesomeIcon className='nav-icon' icon='user-circle' />
        </div>
    </header>
)

export default Head
