import { useState } from 'react'

import './App.css'
import WindowTracker from './components/WindowTracker'

const App = () => {
    const [show, setShow] = useState(false)

    const toggleHandler = () => {
        setShow(prevShow => !prevShow)
    }

  return (
    <main className="container flex">
        <div className="row flex">
        <h1>Hello There 😎</h1>
        <button className='btn' onClick={toggleHandler}>
            {show === false ? 'Show' : 'Hide'}
        </button>
        </div>
        {show === false ? '' : <WindowTracker/>}
    </main>
  )
}

export default App