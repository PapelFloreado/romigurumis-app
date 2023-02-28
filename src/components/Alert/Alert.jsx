import React from 'react'

const Alert = ({error}) => {
    console.log(error)
  return (
    <div className='flex container justify-center mx-auto '>
        <h2 className='text-center bg-red-600 text-button-card w-2/4 text-xl p-4 rounded-xl'>
            {error}
        
        </h2>
    </div>
  )
}

export default Alert