import React, {useState, useContext} from 'react'
import Alert from '../Alert/Alert'
import { GlobalContext } from '../../context/CartContext'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'


const FormCart = () => {

    const provincias = ["seleccione un provincia","Buenos Aires","Ciudad Autónoma de Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"]
    
    const { carrito, clear, deleteItem, precioFinal } = useContext(GlobalContext)

    
    const [ error, setError ] = useState("")
    const [ nombre, setNombre ] = useState("")
    const [ apellido, setApellido ] = useState("")
    const [ direccion, setDireccion ] = useState("")
    const [ altura, setAltura ] = useState("")
    const [ codigo, setCodigo ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ dni, setDni ] = useState("")
    const [ provincia, setProvincia ] = useState("")
    const [ localidades, setLocalidades ] = useState("")
    const [ localidad, setLocalidad ] = useState("")
    const [ tel, setTel ] = useState("")
    const [ prefijo, setPrefijo ] = useState("")
    const [ movil, setMovil ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    
    const handleMunicipio = async(provincia)=>{
        
        setProvincia(provincia)
        
        const urlMunicipios = `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&aplanar&campos=nombre&max=2000&orden=nombre`
        
        try {
           
            const urlMunicipio = await axios(urlMunicipios)
            setLocalidades(urlMunicipio.data.localidades)

        } catch (error) {
            console.log(error)
        }
    }

    const handleLocal = (e)=>{
        console.log(e)
        setLocalidad(e)
    }

    const handlePurchase = async(e)=>{
        e.preventDefault()
        if([nombre,apellido,direccion,altura,codigo,email,dni,provincia,localidad,prefijo,movil].includes("")){
            setError("Debes completar todos los campos")
            return setTimeout(() => {
                setError("")
              }, 3000);
            
        }
        try {
            setLoading(true)
            const call = await axios.post("http://localhost:3001/payment", carrito).then(res=>window.location.href = res.data.response.body.init_point)
            
        } catch (error) {
            console.log(error)
        }
    }

  

  return (
    <div>
        <h2 className='text-center text-3xl uppercase font-bold mt-16'>Completa tu datos para realizar la compra</h2>
        <div className='flex flex-col container mx-auto  justify-center w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
            <form className=' grid grid-cols-2 px-6 mt-10 justify-center w-full' action="">
                <label className='text-2xl' htmlFor="nombre">Nombre</label>
                <input onChange={e=>setNombre(e.target.value)} className='bg-white mb-6  text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Nombre' type="text" name="nombre" required/>
                <label className='text-2xl' htmlFor="apellido">Apellido</label>
                <input onChange={e=>setApellido(e.target.value)} className='bg-white  mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Apellido' type="text" name="apellido" required />
                <label className='text-2xl' htmlFor="email">Email</label>
                <input onChange={e=>setEmail(e.target.value)} className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Email' type="email" name="email" />
                <label className='text-2xl' htmlFor="dni">DNI</label>
                <input onChange={e=>setDni(e.target.value)} className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='DNI' type="number" name="dni" required />
                <label className='text-2xl' htmlFor="provincia">Provincia</label>
                <select onChange={(e)=>handleMunicipio(e.target.value)} className='bg-white  mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2'>
                    {
                        provincias.map((prov, index)=>        
                                <option key={index} value={prov} required>{prov}</option>
                        )
                    }
                </select>
            
                {
                    localidades && 
                    <>
                    
                            <label className='text-2xl' htmlFor="partido">Localidad</label>
                            <select onChange={e=>handleLocal(e.target.value)} className='bg-white  mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' name="" id="">

                            {
                                localidades === "" ? <option value="">selecciona</option> : localidades.map((el, index)=>
                                
                                <option  key={index} value={el.nombre}>{el.nombre}</option>
                                
                                )
                            }
                    
                            </select>
                    </>
                    
                }
                <label className='text-2xl' htmlFor="direccion">Dirección</label>
                <input onChange={e=>setDireccion(e.target.value)} className='bg-white  mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Dirección' type="text" name="direccion" required />
                <label className='text-2xl' htmlFor="numero">Número</label>
                <input onChange={e=>setAltura(e.target.value)} className='bg-white  mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Número' type="number" name="numero" required />
                <label className='text-2xl' htmlFor="codigo">Código Postal</label>
                <input onChange={e=>setCodigo(e.target.value)} className='bg-white  mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Código Postal' type="number" name="codigo" required />
                <label className='text-2xl' htmlFor="Prefijo">Prefijo</label>
                <input onChange={e=>setPrefijo(e.target.value)} className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Prefijo' type="number" name="prefijo" required />
                <label className='text-2xl' htmlFor="tel">Teléfono</label>
                <input onChange={e=>setTel(e.target.value)} className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2' placeholder='Teléfono' type="number" name="tel" required />
            </form>
            <div className='flex container mt-4 mx-auto mb-6'>
                {error && <Alert error={error}/>}
            </div>
            {
                loading === true ? <Spinner/> : <div className='hidden'></div>
            }
            <button onClick={handlePurchase} className='rounded-xl text-2xl m-6  text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8' >Terminar Compra</button>
        </div>
    </div>
  )
}

export default FormCart