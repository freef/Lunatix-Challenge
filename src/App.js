import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Head from './Head.js'
import Foot from './Foot.js'
import Home from './Home.js'
import Subscribe from './Subscribe.js'
import Upcoming from './Upcoming.js'
import Purchase from './Purchase.js'

function App() {
    return (
        <div className="App">
            <Router>
            <Head />
            <Route exact path='/' render={()=> <Home />} />
            <Route path='/subscribe' render={()=> <Subscribe />} />
            <Route path='/NBA' render={()=><Upcoming />} />
            <Route path='/tickets' render={()=> <Purchase />} />
            <Foot /> 
            </Router>
        </div>
    );
}

export default App;
