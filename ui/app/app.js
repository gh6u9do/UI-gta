import s from  '../styles/app.module.css'

import ReactDOM from 'react-dom'
import React from 'react'

import StatusBar from "./components/StatusBar/StatusBar"
import Avtorization from './layouts/avtorization/avtorization'

function App() {
    return <div className='App'>
        <StatusBar />
        <Avtorization />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);