import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/fontawesome-free-solid'

const Banner = (props) => {
    const style={backgroundImage:'url(' + props.image + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'}
    return (
    <section className='flex column justify-center align-center banner-area mt-1' style={style}>
        <h1 className='main-title'>{props.title}</h1>
        <form className='flex row' onSubmit={e => e.preventDefault()}>
            <input type='search' className='search-bar'></input>
            <button className='search-button' type='submit'><FontAwesomeIcon style={{display:'inline'}} icon='map-marker-alt' /> {props.location}</button>
        </form>
    </section>
)}

export default Banner
