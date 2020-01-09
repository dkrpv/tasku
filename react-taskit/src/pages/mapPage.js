import React from 'react'
import '../App.css'
import 'firebase/auth'
import 'firebase/firestore'
import './firebaseConfig'
import Map from './maps'
function App() {
    return (
        <div className="App">
            <Map />
        </div>
    )
}

export default App;