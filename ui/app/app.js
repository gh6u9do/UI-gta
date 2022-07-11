import s from  '../styles/app.module.css'

import ReactDOM from 'react-dom'
import React from 'react'

import StatusBar from "./components/StatusBar/StatusBar"
import Authorization from './components/Authorization/Authorization'
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
        <Authorization />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);