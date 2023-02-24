import React from 'react'

const Seccion1 = () => {
  return (
    <div className='flex bg-edificioHome bg-no-repeat max-w-full h-auto bg-cover'>
      <div className='bg-trapezio bg-[length:100%_100%] bg-no-repeat  '>
        <div className='flex flex-col py-20 pr-20 pl-4 md:py-52 md:pl-40 md:pr-60'>
            <h1 className='text-blanco text-3xl font-bold italic mr-20'>Bienvenido a</h1>
            <h1 className='text-blanco text-3xl font-bold italic mr-20'>Adkiere Bienes Raices</h1>
            <p className='text-blanco font-thin my-4 mr-20'>Encontraras la casa perfecta para ti, que llamaras hogar.</p>
            <button className='callToActionBtn m-auto'>¡Busca ahora!</button>
        </div>
      </div>
    </div>    
  )
}

export default Seccion1
