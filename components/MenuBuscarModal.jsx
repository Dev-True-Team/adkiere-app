import React from 'react'

export default function MenuBuscarModal({visible, onClose}) {

    const handleOnClose=(e)=>{
        if (e.target.id === "contenedorMenu") onClose();
    }

    if(!visible) return null;

  return (
    <div id='contenedorMenu' onClick={handleOnClose} className='animate-lr flex justify-start flex-row-reverse fixed inset-0 bg-negro bg-opacity-30 backdrop-blur-sm '>
        <div className='flex flex-col align-items-stretch bg-azulSecundario  text-blanco p-10'>
            <form action="" className='flex flex-col gap-4'>
                <label className= 'flex flex-col'>
                    Ciudad
                    <select name="" id="" className='text-negro'>
                        <option value="">hue</option>
                    </select>
                </label>
                <label className= 'flex flex-col'>
                    Tipo
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                <label className= 'flex flex-col'>
                    Residencia o Colonia
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                <label className= 'flex flex-col'>
                    Tipo de inmueble
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                <div className='grid grid-cols-2 gap-2'>
                <label className= 'flex flex-col'>
                    Precio desde
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                <label className= 'flex flex-col'>
                    Precio hasta
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                <label className= 'flex flex-col'>
                    Habtiaciones
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                <label className= 'flex flex-col'>
                    Baños
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </label>
                </div>
            </form>
        </div>
    </div>
  )
}

