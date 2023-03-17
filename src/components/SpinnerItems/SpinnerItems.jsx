import React from 'react'
import "./SpinnerItems.css"

const SpinnerItems = () => {
  return (
    <div className='min-h-[500px] justify-center mx-auto items-center flex'>
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

export default SpinnerItems