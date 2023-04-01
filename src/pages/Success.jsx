import React from 'react'
import { useParams } from 'react-router-dom'

const Success = () => {
    
    const {collection_id} = useParams
    
    console.log(collection_id)
    return (


    <div>Success</div>
  )
}

export default Success