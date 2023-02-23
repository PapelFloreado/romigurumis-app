import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h2 className='text-center text-2xl uppercase  font-bold mt-16'>Crea tu cuenta para comenzar a comprar</h2>
      <div className='flex flex-col container mx-auto  justify-center w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
        <form className=' flex flex-col mt-10 items-center mx-auto justify-center w-full' action="">
          <label className='text-2xl' htmlFor="userSingUp">Usuario</label>
          <input className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' type="text" name="userSingUp" />
          <label className='text-2xl' htmlFor="passSingUp">Contraseña</label>
          <input className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' type="password" name="passSingUp"  />
          <button className='text-2xl my-6 w-2/4 rounded-xl text-button-card  font-bold  hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Iniciar Sesión</button>
        </form>
        </div>
    </div>
  )
}

export default SignUp