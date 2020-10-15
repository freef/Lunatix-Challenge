import React,  {useState} from 'react'
import {Link} from 'react-router-dom'

const Subscribe = (props) => {
    const [formData, setFormData] = useState({
        first: '', 
        last: '', 
        email: '', 
        user: '', 
        password: '', 
        confirmPw: '', 
        terms: false
    })
    const handleChange = (event) =>  setFormData({...formData, [event.target.name]: event.target.value})
    return (
        <div className='concert-bg'>
            <h3 className='subhead white'>Subscribe</h3>
            <div className='input-container'>
                <form className='subscribe-form' onSubmit={e=> e.preventDefault()}>
                    <span><input className='text-field' type='text' name='first' onChange={handleChange} value={formData.first} placeholder='First Name' required></input>
                        <input className='text-field' type='text' name='last' onChange={handleChange} value={formData.last} placeholder='Last Name' required></input></span>
                    <input className='text-field w-80' type='email' name='email' onChange={handleChange} value={formData.email} placeholder='Email' required></input>
                    <input className='text-field w-80' type='text' name='user' onChange={handleChange} value={formData.user} placeholder='User Name' required></input>
                    <input className='text-field w-80' type='password' name='password' onChange={handleChange} value={formData.password} placeholder='Password' required></input>
                    <input className='text-field w-80' type='password' name='confirmPw' onChange={handleChange} value={formData.confirmPw} placeholder='Repeat Password' required></input>
                    <span><input type='checkbox' name='terms' onChange={handleChange} value={formData.terms} required></input>
                        <label className='white' htmlFor='terms'>I agree to the <a className='plain-link white' href='/#'>Terms of Use</a> and <a className='plain-link white' href='/#'>Privacy Policy</a></label></span> 
                    <small> <Link to='/'> <button className='green-btn' type='submit'>Sign Up</button></Link></small>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
