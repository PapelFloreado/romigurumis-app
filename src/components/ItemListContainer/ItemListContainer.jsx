import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import db from "../../services"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    
    useEffect(() => {
        const getColData = async()=>{
            try {
                const data = collection(db, "Productos")
                const col = await getDocs(data)
                const res = col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
                setItems(res)
                console.log(items)
                
            } catch (error) {
                console.log(error)
            }
        }
        getColData()
    
      return () => {
        
      }
    }, [])
    


  return (
    <>
        {
            items.length === 0 ? <p>cargando</p> : <ItemList items={items}/>
        }
    </>
        
  )
}

export default ItemListContainer