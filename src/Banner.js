import React from 'react'

const Banner = (props) => (
    <section style={{backgroundImage:props.image}}>
        <h1>{props.title}</h1>
        <form onSubmit={e => e.preventDefault()}>
            <input type='search'></input>
            <button type='submit'>{props.location}</button>
        </form>
    </section>
)

export default Banner
