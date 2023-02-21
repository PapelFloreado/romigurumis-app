import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            
            
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='flex flex-col container mx-auto mt-16'>
        <h2 className='text-center text-4xl uppercase font-bold'>Nos interesa tu opinión</h2>
        <div className='flex container mx-auto  justify-center w-1/3 mt-16 shadow-2xl shadow-banner-color rounded-xl'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-10' action="">
                <label className='text-2xl' htmlFor="name">Nombre</label>
                <input className='bg-white mb-6 text-2xl  border-solid  border-slate-700 border-2 rounded-xl p-2'  placeholder='Nombre' type="text" name="name" required/>
                <label className='text-2xl' htmlFor="lastName">Apellido</label>
                <input className='bg-white mb-6 text-2xl  border-solid border-slate-700 border-2 rounded-xl p-2'  placeholder='Apellido' type="text" name="lastName" required/>
                <label className='text-2xl' htmlFor="email">Email</label>
                <input className='bg-white mb-6 first-letter:text-2xl border-solid border-slate-700 border-2 rounded-xl p-2'  placeholder='Email' type="email" name="email" required/>
                <label className='text-2xl' htmlFor="message">Dejanos tu mensaje</label>
                <textarea className='bg-white mb-6 text-2xl  border-solid border-slate-700 border-2 rounded-xl p-2' name="message" id="message" placeholder='Escribe tu mensaje' cols="30" rows="10" required></textarea>
                <input type="submit" value="Envía tu mensaje" className='text-2xl my-6 py-5 rounded-xl text-button-card  font-bold  hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'/>
            </form>
        </div>
    </div>
  )
}

export default ContactForm