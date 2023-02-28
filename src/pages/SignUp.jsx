import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert/Alert'
import { UserAuth } from '../context/AuthContext'


const SignUp = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")
    const navigate = useNavigate()
    const { createUser } = UserAuth()
    

    const handleSubmit = async (e)=>{

        e.preventDefault()
        setError("")
        try {
          await createUser(email, password)
          
          navigate("/account")
          
        } catch (error) {
          if (error.code == "auth/wrong-password") {
            setError("Este email ya se encuentra en uso");
            setTimeout(() => {
              setError("")
            }, 4000);
          
          } else if (error.code == "auth/invalid-email") {
            setError("Esta dirección de correo no es válida.");
            setTimeout(() => {
              setError("")
            }, 4000);
             
          } else if (error.code == "auth/operation-not-allowed") {
            setError("Operación no permitida.");
            setTimeout(() => {
              setError("")
            }, 4000);
          } else if (error.code == "auth/weak-password") {
            setError("La contraseña es demasiado debil, use 6 o más carácteres.");
            setTimeout(() => {
              setError("")
            }, 4000);
          }
        }

    }

  return (
    <div>
      <h2 className='text-center text-2xl uppercase  font-bold mt-16'>Crea tu cuenta para comenzar a comprar</h2>
      <div className='flex flex-col container mx-auto  justify-center w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
        <form onSubmit={handleSubmit} className=' flex flex-col mt-10 items-center mx-auto justify-center w-full' action="">
          <label className='text-2xl' htmlFor="userSingUp">Email</label>
          <input onChange={e=>setEmail(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' type="text" name="userSingUp" />
          <label className='text-2xl' htmlFor="passSingUp">Contraseña</label>
          <input onChange={e=>setPassword(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' type="password" name="passSingUp"  />
          <button className='text-2xl my-6 w-2/4 rounded-xl text-button-card  font-bold  hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Crear Cuenta</button>
        </form>
        <div className='flex container mx-auto mb-6 '>

          {error && <Alert error={error}/>}
        </div>
        </div>
    </div>
  )
}

export default SignUp