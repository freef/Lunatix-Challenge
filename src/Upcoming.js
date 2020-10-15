import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Banner from './Banner.js'

const Upcoming = (props) => {
    const [games, setGames] = useState([])
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(20)

    const fetchData = async () => {
        const settings = {
            async: true,
            crossDomain: true,
            url: "https://free-nba.p.rapidapi.com/teams?page=0",
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "e5d8563997mshcfb030c802400d3p1ec262jsn6864acf2d34a"
            }
        }
        const response = await fetch(settings.url, settings)
        const responseData = await response.json()    
        setGames(responseData.data)
    }
    const rand = () => Math.floor(Math.random() * (Math.floor(500) - Math.ceil(50)) + Math.ceil(50))

    useEffect(()=>{
        fetchData()
    },[])

    const [distance, setDistance] = useState(100)
    return (
        <Fragment>
            <Banner image='/nbaBanner.jpg' title='NBA' location='New York, NY' />
            <main className='flex column w-100 align-center'>
                <div className='flex row center'>
                    <div>
                        <div className='flex row justify-around'>
                            <div className='flex row align-center'>
                            <button className='m-h sort-button' onClick={(e)=> setGames([...games.sort((a,b)=> a.name > b.name ? 1 : -1 )])}>
                                By Team</button>
                            <button className='m-h sort-button' onClick ={(e)=> setGames([...games.sort((a,b) => a.city > b.city? 1 : -1)])} >
                                By City</button>
                            </div>
                            <form>
                                <div className='flex row justify-between align-center'>
                                    <label htmlFor='distance'>Distance</label>
                                    <p>{distance}</p>
                                </div>
                                <span>0<input type='range' name='distance' value={distance} min='0' max='100' onChange={(e)=>setDistance(e.target.value)} step='2' />100</span>
                            </form>
                        </div>
                        <div className='flex-table'> 
                            {games.map((e,i) => (
                                (i>= min && i < max) &&
                                    <Link style={{textDecoration: 'none', color: '#000'}} to='/tickets' key={e.id}> 
                                        <div  className='table-row flex row justify-between'>
                                            <p>{e.full_name}</p><p>from <strong>${rand()}</strong></p>
                                        </div>
                                    </Link>
                            ))}
                        </div>
                        <div className='flex justify-around align-center m-h'>
                            <button className='sort-button' onClick={()=>{
                                setMin(min-20)
                                setMax(max-20)
                            }} disabled={min===0}>Previous</button>
                            <button className='sort-button' onClick={()=>{
                                setMin(min+20)
                                setMax(max+20)
                            }} disabled={max>=games.length}>Next</button>
                        </div>
                    </div>
                    <div className='ad flex align-center justify-center'>
                        <p className='ad-copy'>Placeholder for Promotional Messaging</p>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Upcoming 
