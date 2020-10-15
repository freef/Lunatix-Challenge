import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/fontawesome-free-solid'

const Head = () => (
    <header className='flex row justify-around align-center'> 
        <img className='nav-logo' src='/navLogo.png' alt='logo'></img>
        <nav className='flex justify-between align-center'>
            <a className='nav-link m-h' href='/#'>SPORTS</a>
            <a className='nav-link m-h' href='/#'>CONCERTS</a>
            <a className='nav-link m-h' href='/#'>THEATER</a>
            <a className='nav-link m-h' href='/#'>MORE</a>
        </nav>
        <div className='flex align-center'>
            <a className='nav-link m-h' href='/#'>MY TICKETS</a>
            <FontAwesomeIcon className='nav-icon' icon='user-circle' />
        </div>
    </header>
)

export default Head
