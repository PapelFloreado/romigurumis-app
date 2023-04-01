import React, { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import Alert from '../components/Alert/Alert'
import Spinner from "../components/Spinner/Spinner"

const SignIn = () => {

    const { googleSingIn, user, signIn } = UserAuth()
    const [email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()

    const handleSignIn = async (e)=>{
        e.preventDefault()
        try {
          setLoading(true)
          await signIn(email, password)
          setLoading(false)
        } catch (error) {
          if (error.code == "auth/wrong-password") {
            setError("Contraseña incorrecta, intenta de nuevo");
            setLoading(false)
            setTimeout(() => {
              setError("")
            }, 4000);
          
          }else if (error.code == "auth/invalid-email"){
            setError("El email no es válido")
            setLoading(false)
            setTimeout(() => {
              setError("")
            },4000 );
            
          }else if (error.code == "auth/too-many-requests"){
            setError("La cuenta ha sido bloqueada temporalmente, reestablece tu contraseña")
            setLoading(false)
            setTimeout(() => {
              setError("")
            },4000 );
          }
        }

    }

    const handleGoogleSingIn = async()=>{
      try {
        await googleSingIn()
        
      } catch (error) {
        
      }
    }

    useEffect(()=>{
      if(user != null){
        navigate("/account")
      }
    },[user])


  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl uppercase font-bold mt-16'>Inicia Sesión</h2>
      <div className='flex flex-col container mx-auto  justify-center md:w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
        <form className=' flex flex-col mt-10 items-center mx-auto justify-center w-full' action="">
          <label className='text-xl md:text-2xl' htmlFor="user">Email</label>
          <input onChange={e=>setEmail(e.target.value)} className='bg-white mb-6 w-1/2 text-xl md:text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Email' type="text" name="email" required/>
          <label className='text-xl md:text-2xl' htmlFor="pass">Contraseña</label>
          <input onChange={e=>setPassword(e.target.value)} className='bg-white w-2/4 mb-6 text-xl md:text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Contraseña' type="password" name="pass" required />
          <button onClick={handleSignIn} className='text-2xl my-6 w-2/4 rounded-xl text-button-card  font-bold  hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Iniciar Sesión</button>
          <div className='flex container mx-auto mb-6 '>
              {error && <Alert error={error}/>}
          </div>
          {loading === true ? <Spinner className="min-h-[50px]"/> : <div></div>}
            <p className='text-lg md:text-xl text-center my-4'>¿Olvidaste tu contraseña? Haz <Link className='underline' to='/password-reset'>click aquí </Link> .</p>
        </form>
        <p className='text-lg md:text-xl text-center mt-10'>También puedes logguearte con:</p>
      <div className='flex container w-2/4 mx-auto justify-center mt-6'>
        <GoogleButton onClick={handleGoogleSingIn}/>
      </div>
          <p className='text-lg md:text-xl text-center my-16'>¿No tienes una cuenta? Crea una, haz <Link className='underline' to='/signup'>click aquí </Link> .</p>
      </div>
    </div>
  )
}

export default SignIn