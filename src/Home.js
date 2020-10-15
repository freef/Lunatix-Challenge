import React, {useState} from 'react'
import Banner from './Banner.js'
import {categories, trending} from './data.js'


const Home = () => {
    const [allCat, setAllCat] = useState(false)
    const Category = (props) => (<div className='category-box'><p>{props.category}</p></div>)
    const Trending = (props) => (<div className='trending-box'><p>{props.title}</p></div>)
    return (
        <div>
            <Banner image='/concertBanner.jpg' title='Magnanimus Tour' location='New York, NY' />
            <section className='big-padding'>
                <div className='flex row justify-center'>
                    {categories.map((c,i) => (i < 6 || allCat) && <Category image={c.image} category={c.category} key={c.id} />)}
                </div>
                <hr />
                <div className='m-h flex row justify-around align-center'>
                    <h4>TRENDING</h4>
                    <button className='green-btn' onClick={(e)=> setAllCat(!allCat)}>{allCat ? 'Close' : 'View All'}</button>
                </div>
                <div className='flex row justify-center'>
                    {trending.map(e=> <Trending image={e.image} title={e.title} key={e.id} />)}
                </div>
            </section>
            <section className='big-padding light-gray-bg flex align-center justify-center'>
                <video controls className='video-player'>
                    <source src='/movie.mov' type='video/mov' />
                    <img src='/movieStill.png' />
                </video>
            </section>
        </div>
    )
}

export default Home
