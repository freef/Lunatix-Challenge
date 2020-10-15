import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Purchase = (props) => {
    const [quantity, setQuantity] = useState(1)
    const handleChange = (event) => setQuantity(event.target.value)

    return (
        <section className='concert-bg flex align-center justify-center'>
            <div className='input-container w-80'>
                <div className='flex justify-around align-center'>
                    <h4 className='m-h'>My Cart</h4>
                    <Link to='/NBA'> <button className='close-button'>x</button></Link>
                </div>
                <div>
                    <form onSubmit={event=> event.preventDefault()}>
                        <div className='flex column align-start'>
                            <hr className='w-80 black-hr'></hr>
                            <h5>EVENT 1</h5>
                            <div className='flex row justify-around w-100'><p>Venue {props.venue? props.venue : ''}</p><p><strong>$1000</strong></p></div>
                            <p>Date {props.date? props.date : ''}</p>

                            <div>  <label className='m-h' htmlFor='quantity'>Quantity</label>
                                <select className='sort-button' name='quantity' value={quantity} onChange={handleChange}>
                                    <option value='0'>0</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select></div>
                        </div>
                        <hr className='w-80 black-hr'></hr>
                        <button className='green-btn' type='submit'>Continue Shopping</button>
                        <button className='green-btn' type='submit'>Checkout</button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Purchase
