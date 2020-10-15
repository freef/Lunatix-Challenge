import React,  {useState} from 'react'

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
        <div>
            <h3>Subscribe</h3>
            <div>
                <form onSubmit={e=> e.preventDefault()}>
                    <input type='text' name='first' onChange={handleChange} value={formData.first} placeholder='First Name' required></input>
                    <input type='text' name='last' onChange={handleChange} value={formData.last} placeholder='Last Name' required></input>
                    <input type='email' name='email' onChange={handleChange} value={formData.email} placeholder='Email' required></input>
                    <input type='text' name='user' onChange={handleChange} value={formData.user} placeholder='User Name' required></input>
                    <input type='password' name='password' onChange={handleChange} value={formData.password} placeholder='Password' required></input>
                    <input type='password' name='confirmPw' onChange={handleChange} value={formData.confirmPw} placeholder='Repeat Password' required></input>
                    <input type='checkbox' name='terms' onChange={handleChange} value={formData.terms} required></input>
                    <label htmlFor='terms'>I agree to the <a href='/#'>Terms of Use</a> and <a href='/#'>Privacy Policy</a></label> 
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
