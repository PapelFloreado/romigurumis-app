import { useState, useEffect } from "react"
import Spinner from "../Spinner/Spinner"


const CarouselProductos = (img_carousel) => {
    
    const [ imgIndex, setImgIndex ] = useState(0)
    const [ img, setImg ] = useState(img_carousel[imgIndex])

    useEffect(() => {
      const call = ()=>{
        setImg(img_carousel[0])
      }
      call()
    
      return () => {
        
      }
    }, [img])
    
    

    const handleClick = (index, img)=>{
        setImgIndex(index)
        setImg(img)
    }
    console.log(img)

  return (
    <>
        <div className="flex-col">

            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="flex">
                

                {
                    img_carousel.img_carousel.map((img, index)=>(
                        
                            <img onClick={()=>handleClick(index, img)} className=' mx-4 hover:opacity-50 ease-in-out duration-300 rounded-2xl w-1/4' src={img} alt={index} />
                        
                        
                    ))
                }
        </div>
        </div>
    </>
  )
}


export default CarouselProductos 