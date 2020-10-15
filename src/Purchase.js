import React, {useState} from 'react'

const Purchase = (props) => {
    const [quantity, setQuantity] = useState(1)
    const handleChange = (event) => setQuantity(event.target.value)

    return (
        <section>
            <div>
                <div>
                    <h4>My Cart</h4>
                    <button>x</button>
                </div>
                <div>
                    <hr></hr>
                    <h5>EVENT 1</h5>
                    <p>Venue {props.venue? props.venue : ''}</p>
                    <p>Date {props.date? props.date : ''}</p>
                    <form onSubmit={event=> event.preventDefault()}>
                        <label htmlFor='quantity'><h5>Quantity</h5></label>
                        <select name='quantity' value={quantity} onChange={handleChange}>
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </select>
                        <button type='submit'>Continue Shopping</button>
                        <button type='submit'>Checkout</button>
                    </form>
                    <hr></hr>
                </div>
            </div>
        </section>
    )
}

export default Purchase
