import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <div className='App'>
            <Router>
                <NavBar />
            </Router>
        </div>
    )
}

export default App