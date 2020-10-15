import React, {useState} from 'react'

const Foot = () => {
    const [email, setEmail] = useState('')
    const handleChange = event => setEmail(event.target.value)
    return (
        <footer>
            <div>
                <a href='/#'><img src='#' alt='app store'></img></a>
                <a href='/#'><img src='#' alt='play store'></img></a>
            </div>
            <form onSubmit={(e)=> e.preventDefault()}>
                <input type='email' value={email} onChange={handleChange} placeholder='Join our mailing list for exlusive access and promotions'></input>
                <button type='submit'>Subscribe</button>
            </form>
            <div>
                <h5>Powered by</h5>
                <img src='#' alt='Venmo'></img>
            </div>
            <div>
                <p><a href='/#'>About</a> | <a href='/#'>Support</a> | <a href='/#'> Terms and Conditions</a></p>
                <p>Copyright 2020 SI Tickets | All Rights Reserved</p>
            </div>
            <div>
                <img src='#' alt='Twitter' />
                <img src='#' alt='Facebook' />
                <img src='#' alt='Instagram' />
            </div>
        </footer>
    )
}

export default Foot
