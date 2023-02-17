import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [ item, setItem ] = useState({})


    useEffect(() => {
      const getColData = async () =>{
        try { 
          const data = collection(db, "Productos")
          const col = await getDocs(data)
          const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
          const resItem = res.find(el=>el.id === Number(id))
          setItem(resItem)
          
          
        } catch (error) {
          console.log(error)
        }
       
      }
      getColData()
      return () => {
        
      }
    }, [id])
    
  
  
    return (
      <>
      {

        item.length < 1 ? <Spinner/> : <ItemDetail item={item}/>
      }
      </>
      
    )
  }
  


export default ItemDetailContainer