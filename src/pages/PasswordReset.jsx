import React, {useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import Alert from '../components/Alert/Alert'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'

const PasswordReset = () => {

    const [ email, setEmail ] = useState("")
    const [ error, setError ] = useState("")
    const [ success, setSuccess ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    const { passwordReset } = UserAuth()

    const handleReset = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            await passwordReset(email)
            setSuccess("Enviamos un link a tu email para reestablecer tu contraseña")
            setLoading(false)
            setTimeout(()=>{
                setSuccess("")
                navigate("/signin")
            },3500)

        } catch (error) {
            if (error.code == "auth/user-not-found") {
                setError("No encontramos un usuario registrado con este email.");
                setTimeout(() => {
                  setError("")
                }, 4000);
              
              } 
            
        }
    }
  return (
    <div className='min-h-[470px]'>
        <h2 className='text-center text-2xl md:text-3xl uppercase font-bold mt-16'>Reestablece tu contraseña</h2>
        <div className='flex flex-col container mx-auto  justify-center  md:w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
        <form className=' flex flex-col mt-10 items-center mx-auto justify-center w-full' action="">
            <label className='text-xl md:text-2xl' htmlFor="user">Email</label>
            <input onChange={e=>setEmail(e.target.value)} className='bg-white mb-6 w-1/2 text-xl md:text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Email' type="text" name="email" id="" />
            <button onClick={handleReset} className='text-xl md:text-2xl my-6 w-2/4 rounded-xl text-button-card  font-bold  hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Resetear Password</button>  
            <div className='flex container mx-auto mb-6 '>
            {loading === true ? <Spinner className="min-h-[50px]"/> : <div></div>}
                {success && 
                    <div className='flex container justify-center mx-auto '>
                        <h2 className='text-center bg-green-600 text-button-card w-2/4 text-xl p-4 rounded-xl'>
                            {success}
                        </h2>
                    </div>}
            </div>
            <div className='flex container mx-auto mb-6 '>
                {error && <Alert error={error}/>}
            </div>
        </form>
        </div>
    </div>
  )
}

export default PasswordReset