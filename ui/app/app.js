import '../styles/app.css'

import ReactDOM from 'react-dom'
import React from 'react'

import StatusBar from "./components/StatusBar/StatusBar"

function App() {
    return <div className='App'>
        <StatusBar />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);