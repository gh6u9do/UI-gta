import s from  '../styles/app.module.css'

import ReactDOM from 'react-dom'
import React from 'react'

import StatusBar from "./components/StatusBar/StatusBar"
import Avtorization from './layouts/avtorization/avtorization'
import {EventManager} from './bridge'

function App() {
    const [showStatusBar, setStatusBar] = React.useState(true)
    React.useEffect(() => {
        EventManager.addHandler("toggleStatusBarView", toggleStatusBarView);
        return () => {
            EventManager.removeHandler("toggleStatusBarView", toggleStatusBarView);
        }
    }, [])
    
    function toggleStatusBarView (flag) {
        setStatusBar(flag);
    }
    return <div className='App'>
        {showStatusBar && <StatusBar />}
        <Avtorization />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);