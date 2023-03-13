import { async } from '@firebase/util'
import React, {useState} from 'react'
import Alert from '../Alert/Alert'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

const FormCart = () => {

    /* const urlProvincias = `https://apis.datos.gob.ar/georef/api/provincias?nombre=${provincia}` */
    const provincias = ["seleccione un provincia","Buenos Aires","Ciudad Autónoma de Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"]
    
    
    const [ error, setError ] = useState("")
    const [ nombre, setNombre ] = useState("")
    const [ apellido, setApellido ] = useState("")
    const [ direccion, setDireccion ] = useState("")
    const [ altura, setAltura ] = useState("")
    const [ codigo, setCodigo ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ dni, setDni ] = useState("")
    const [ provincia, setProvincia ] = useState("")
    const [ localidad, setLocalidad ] = useState("")
    const [ partido, setPartido ] = useState("")

    
    const handlePartido = async(provincia)=>{
        setProvincia(provincia)
        console.log(provincia)
        
        const urlMunicipios = `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&aplanar&campos=nombre&max=2000&orden=nombre`
        
        try {
           
            const urlMunicipio = await axios(urlMunicipios)
            setLocalidad(urlMunicipio.data.localidades)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(localidad)

  return (
    <div>
        <h2 className='text-center text-3xl uppercase font-bold mt-16'>Completa tu datos para realizar la compra</h2>
        <div className='flex flex-col container mx-auto  justify-center w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
            <form className=' flex flex-col mt-10 items-center mx-auto justify-center w-full' action="">
            <label className='text-2xl' htmlFor="nombre">Nombre</label>
            <input onChange={e=>setNombre(e.target.value)} className='bg-white mb-6 w-1/2 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Nombre' type="text" name="nombre" required/>
            <label className='text-2xl' htmlFor="apellido">Apellido</label>
            <input onChange={e=>setApellido(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Apellido' type="text" name="apellido" required />
            <label className='text-2xl' htmlFor="email">Email</label>
            <input onChange={e=>setEmail(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Email' type="email" name="email" />
            <label className='text-2xl' htmlFor="direccion">Dirección</label>
            <input onChange={e=>setDireccion(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Dirección' type="text" name="direccion" required />
            <label className='text-2xl' htmlFor="numero">Número</label>
            <input onChange={e=>setAltura(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Número' type="number" name="numero" required />
            <label className='text-2xl' htmlFor="provincia">Provincia</label>
            <select onChange={(e)=>handlePartido(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2'>
                {
                    provincias.map((prov, index)=>        
                            <option key={index} value={prov} required>{prov}</option>
                    )
                }
            </select>
            <div>
            {
                localidad && 
                <>
                
                        <label className='text-2xl' htmlFor="partido">Localidad</label>
                        <select className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' name="" id="">

                        {
                            localidad === "" ? <option value="">selecciona</option> : localidad.map((el, index)=>
                                <option key={index} value={el.nombre}>{el.nombre}</option>
                            )
                        }
                
                        </select>
                </>
                
            }
            </div>
            
            
            
            <label className='text-2xl' htmlFor="codigo">Código Postal</label>
            <input onChange={e=>setCodigo(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Código Postal' type="number" name="codigo" required />
            <label className='text-2xl' htmlFor="dni">DNI</label>
            <input onChange={e=>setDni(e.target.value)} className='bg-white w-2/4 mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='DNI' type="number" name="dni" required />
            <div className='flex container mx-auto mb-6'>
                {error && <Alert error={error}/>}
            </div>
            </form>
        </div>
    </div>
  )
}

export default FormCart