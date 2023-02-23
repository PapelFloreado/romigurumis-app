import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = () => {

    const { googleSingIn, user } = UserAuth()

    const navigate = useNavigate()

    const handleGoogleSingIn = async()=>{
        await googleSingIn()
      try {
        
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(()=>{
      if(user != null){
        navigate("/account")
      }
    },[user])


  return (
    <div>
      <h2 className='text-center text-3xl uppercase font-bold mt-16'>Inicia Sesión</h2>
      <div className='flex flex-col container mx-auto  justify-center w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
        <form className=' flex flex-col mt-10 items-center mx-auto justify-center w-full' action="">
          <label className='text-2xl' htmlFor="user">Usuario</label>
          <input className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' type="text" name="user" id="" />
          <label className='text-2xl' htmlFor="pass">Contraseña</label>
          <input className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' type="password" name="pass" id="" />
          <button className='text-2xl my-6 w-2/4 rounded-xl text-button-card  font-bold  hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Iniciar Sesión</button>
        </form>
        <p className='text-xl text-center mt-10'>También puedes logguearte con:</p>
      <div className='flex container w-2/4 mx-auto justify-center mt-6'>
        <GoogleButton onClick={handleGoogleSingIn}/>
      </div>
      <p className='text-xl text-center my-16'>¿No tienes una cuenta? Crea una, haz <Link className='underline' to='/signup'>click aquí </Link> .</p>
      </div>
    </div>
  )
}

export default SignIn