import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className=' justify-center mx-auto items-center flex'>
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </div>
  )
}

export default Spinner