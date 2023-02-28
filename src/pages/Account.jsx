import React,{useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import { getAuth, sendEmailVerification } from "firebase/auth";
import UserData from '../components/UserData/UserData';


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
  

  
  return (
    <div className='flex container mx-auto min-h-[430px]'>
      <h2>hola {user && user.email}</h2>
      <UserData />
      <button></button>

    </div>
  )
}

export default Account  