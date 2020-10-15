import React, {useState} from 'react'
import Banner from './Banner.js'
import {categories, trending} from './data.js'


const Home = () => {
    const [allCat, setAllCat] = useState(false)
    const Category = (props) => (<div><p>{props.category}</p></div>)
    const Trending = (props) => (<div><p>{props.title}</p></div>)
        return (
            <div>
                <Banner image='#' title='Magnanimus Tour' location='New York, NY' />
                <section>
                    <div>
                        {categories.map((c,i) => (i < 6 || allCat) && <Category image={c.image} category={c.category} key={c.id} />)}
                    </div>
                    <hr />
                    <div>
                        <h4>TRENDING</h4>
                        <button onClick={(e)=> setAllCat(!allCat)}>{allCat ? 'Close' : 'View All'}</button>
                    </div>
                    <div>
                        {trending.map(e=> <Trending image={e.image} title={e.title} key={e.id} />)}
                    </div>
                </section>
                <section>
                    <video controls width='300'>
                        <source src='#' type='video/mov' />
                        <img src='#' />
                    </video>
                </section>
            </div>
        )
}

export default Home
