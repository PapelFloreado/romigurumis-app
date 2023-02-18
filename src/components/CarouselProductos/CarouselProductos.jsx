import { useState, useEffect } from "react"
import Spinner from "../Spinner/Spinner"


const CarouselProductos = (img_carousel) => {
    
    const [ imgIndex, setImgIndex ] = useState(0)
    const [ img, setImg ] = useState(img_carousel.img_carousel[0]) 
    

    const handleClick = (index, item)=>{
        setImgIndex(index)
        setImg(item)
    }

  return (
    <>
        <div className=" mx-20">
            <div className=" container mx-auto flex basis-1/3 justify-center ">
                <img className="rounded-xl shadow-2xl" src={img} alt="" />
            </div>
            <div className=" flex justify-center">
                <div className=" flex w-3/5 mt-6 ">
                    {
                        img_carousel.img_carousel.map((item, index)=>(
                          <div className="mx-2" key={index}>
                            <img onClick={()=>handleClick(index, item)} className='hover:cursor-pointer hover:opacity-50 ease-in-out duration-300 shadow-2xl rounded-2xl  ' src={item} alt={index} />
                          </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}


export default CarouselProductos 