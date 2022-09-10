import React, {useEffect, useState} from 'react'

const WindowTracker = () => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth)  

useEffect(()=> {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
}, [])

  return (
    <div className="wrapper flex">
    <h1> Your Window Width is </h1>
    <p>{windowWidth} px</p>
    </div>
  )
}

export default WindowTracker