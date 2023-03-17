import React,{useEffect} from 'react'
import { createContext, useState } from 'react'

export const GlobalContext = createContext() 


const CartContext = ({children}) => {


    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito"))||[])
    



    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    

    const addItem = (item, quantity)=>{

        
        
        if(isInCart(item.id)){
            
            let aux = carrito
            let itemIndex = aux.findIndex(element=> element.id === item.id)
            aux[itemIndex]["quantity"] += quantity 
            setCarrito([...aux])
            
    
        }else{
            const nuevoItem = {...item, quantity}
            setCarrito([...carrito , nuevoItem])
        }
    }

    

    const isInCart = (itemId)=> carrito.find(el=> el.id === itemId)


    const clear = ()=>{
        setCarrito([]) 
    }

    const deleteItem = (itemId)=>{setCarrito(carrito.filter(el=>el.id !== itemId))

    } 

    let precioFinal =  carrito.reduce((acc,item)=>acc + item.price * item.quantity,0)
        
    let carritoCount = carrito.length

    return (
        <GlobalContext.Provider value={{
            carrito,
            precioFinal,
            carritoCount,
            isInCart,
            addItem,
            clear,
            deleteItem,
            
            

        }}>{children}</GlobalContext.Provider>
    )
}

export default CartContext