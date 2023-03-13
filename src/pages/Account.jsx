import React,{useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import { getAuth, sendEmailVerification } from "firebase/auth";


const Account = () => {

  const { user } = UserAuth()
  
  useEffect(() => {
    
    const verified = ()=>{
        if(user.emailVerified === false){
          const auth = getAuth();
          sendEmailVerification(auth.currentUser)
          return alert("enviamos un email de verificacion, verifica tu cuenta y vuelve a ingresar")
        }
    }
    verified()
    
  }, [])
  
  console.log(user)

  
  return (
    <div className='flex flex-col mt-16 uppercase font-bold container mx-auto min-h-[430px]'>
      <h2 className='text-center text-3xl'>hola {user && user.email}</h2>
      
    </div>
  )
}

export default Account  