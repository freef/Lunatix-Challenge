import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {library} from '@fortawesome/fontawesome-svg-core'


library.add(fab,faFacebook, faTwitter, faInstagram)

const Foot = () => {
    const [email, setEmail] = useState('')
    const handleChange = event => setEmail(event.target.value)
    return (
        <footer className='footer-container flex column justify-center'>
            <div className='flex row align-center justify-center'>
                <a className='footer-link' href='/#'><img className='store-icon' src='/appStore.jpg' alt='app store'></img></a>
                <a className='footer-link' href='/#'><img className='store-icon' src='/playStore.jpg' alt='play store'></img></a>
            </div>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input type='email' value={email} onChange={handleChange} placeholder='Join our mailing list for exlusive access and promotions'></input>
                <button type='submit'>Subscribe</button>
            </form>
            <div>
                <h5>Powered by</h5>
                <h3 className='italic bold'>venmo</h3>
            
            </div>
            <div className='flex column align-center justify-center'>
                <p className='m-h'><a className='footer-link' href='/#'>About</a> | <a className='footer-link' href='/#'>Support</a> | <a  className='footer-link'href='/#'> Terms and Conditions</a></p>
                <p className='m-h'>Copyright 2020 SI Tickets | All Rights Reserved</p>
            </div>
            <div>
                <FontAwesomeIcon className='footer-icon' icon={['fab','twitter']} />
                <FontAwesomeIcon className='footer-icon' icon={['fab','facebook']} />
                <FontAwesomeIcon className='footer-icon' icon={['fab','instagram']} />
            </div>
        </footer>
    )
}

export default Foot
