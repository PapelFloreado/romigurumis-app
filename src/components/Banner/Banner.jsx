import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/img/Img 1 - carousel.jpg"

const Banner = () => {

  return (

    <div className=''>
        <div className='flex container mx-auto p-6  justify-center  mt-16'>
            <div className='bg-banner-color  shadow-banner-color shadow-2xl p-10 rounded-2xl flex justify-center  basis-3/4 '>
                <img className='w-2/4' src={img1} alt="" />
                <div className=' m-10'>
                    <h1 className='text-text-color text-4xl font-bold'>Romigurumis</h1>
                    <p className=' text-text-color text-xl mt-6'>Prodoctos artesanales hechos con el corazón.</p>
                    <p className=' text-text-color text-xl'>Si queres saber más de que se trata ingresa aquí.</p>
                    <Link to="/about">
                        <button className='bg-button-card mt-6 font-bold uppercase'>SABER MÁS</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
    

  )
}

export default Banner