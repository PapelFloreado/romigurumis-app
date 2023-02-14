import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import slider1 from "../../assets/img/Img 1 - carousel.jpg"
import slider2 from "../../assets/img/Img 2 - carousel.jpg"


const Carousel = () => {
    
    const [ slider, setSlider ] = useState(0)

    const imgCarousel = [slider1, slider2]
    
    const length = imgCarousel.length 

    const handleSlidePrev = ()=>{
        setSlider( slider === length - 1 ? 0 : slider + 1 )
    }

    const handleSlideNext = ()=>{
        setSlider( slider === 0 ? length - 1 : slider - 1)
    }

  return (
    <>
        <div className='mt-16 w-full justify-center items-center '>
            <button className='border-none' onClick={handleSlidePrev}>
                <BsFillArrowLeftCircleFill className="absolute top-[75%] text-black left-16 text-4xl cursor-pointer"/>
            </button>
            {
                imgCarousel.map((item, index)=>(
                    <div/*  className={index === slider  ? "opacity-100 ease-in-out duration-500" : "opacity-0 ease-in-out duration-500"} */ key={index}>
                        {
                            index === slider && (<img className=' w-full rounded-2xl ease-in-out  transition-opacity duration-500' src={item} alt="/" />)
                        }
                    </div>
                ))
            }
            <button className='border-none' onClick={handleSlideNext}>
                <BsFillArrowRightCircleFill className="absolute top-[75%] text-black right-16 text-4xl cursor-pointer "/>
            </button>
        </div>   
    </>
  )
}

export default Carousel