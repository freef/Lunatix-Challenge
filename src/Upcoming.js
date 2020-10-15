import React, {useState, useEffect} from 'react'
import Banner from './Banner.js'

const Upcoming = (props) => {
    const [games, setGames] = useState([])

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
        console.log(responseData.data)
        setGames(responseData.data)
    }
    const rand = () => Math.floor(Math.random() * (Math.floor(500) - Math.ceil(50)) + Math.ceil(50))

    useEffect(()=>{
        fetchData()
    },[])

    const [distance, setDistance] = useState(100)
    return (
        <main>
            <Banner image='#' title='NBA' location='New York, NY' />
            <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'center'}}>
                <div>
                    <button onClick={(e)=> {
                        e.preventDefault()
                        setGames([...games.sort((a,b)=> a.name > b.name ? 1 : -1 )])
                    }
                        }
                    >
                        By Team</button>
                    <button onClick ={(e)=> {
                        e.preventDefault()
                        setGames([...games.sort((a,b) => a.city > b.city? 1 : -1)])
                    }
                        }
                    >
                        By Game</button>
                    <form>
                        <label htmlFor='distance'>Distance</label>
                        <p>{distance}</p>
                        <input type='range' name='distance' value={distance} min='0' max='100' onChange={(e)=>setDistance(e.target.value)} step='2' />
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((e,i) => (
                                <tr key={e.id}>
                                    <td>{e.full_name}</td>
                                    <td>from <strong>${rand()}</strong></td>
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div style={{width: '100px', height: '500px', backgroundColor: 'gray'}}>
                    <p style={{width: '100%'}}>Placeholder for Promotional Messaging</p>
                </div>
            </div>
        </main>
    )
}

export default Upcoming 
