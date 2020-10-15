import React, {useState} from 'react'
import Banner from './Banner.js'

const Upcoming = (props) => {
    const [games, setGames] = useState({
        Cardinals: 99,
        Falcons: 94,
        Ravens: 115,
        Bills: 80,
        Panters: 125,
        Bengals: 113,
        Bears: 110,
        Browns: 98
    })
    const [distance, setDistance] = useState(100)
   return (
       <main>
           <Banner image='#' title='NBA' location='New York, NY' />
           <div style={{display: 'flex', flexFlow: 'row'}}>
               <div>
                   <button>By Team</button>
                   <button>By Game</button>
                   <form>
                   <label htmlFor='distance'>Distance</label>
                   <p>{distance}</p>
                   <input type='range' name='distance' value={distance} min='0' max='100' onChange={(e)=>setDistance(e.target.value)} step='2' />
                   </form>
                   <table>
                       <thead>
                           <tr>
                               <th>Team</th>
                               <th>Price</th>
                           </tr>
                       </thead>
                       <tbody>
                           {Object.keys(games).map((key) => (
                               <tr key={key}>
                                   <td>{key}</td>
                                   <td>{games[key]}</td>
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
