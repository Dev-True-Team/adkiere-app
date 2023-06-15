import React from 'react'

const Seccion3 = () => {
  return (
    <div className=' bg-diagonales mt-10'>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=' md:mx-20 mx-2'>
        <div className="flex flex-row items-baseline gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-blanco">
            Terrenos destacados
          </h2>
          <a className="text-xs text-azulAlerta underline" href="">
            Ver más
          </a>
        </div>
        <div className='md:flex md:justify-center flex flex-col mt-5'>
        <div className='md:flex md:flex-row flex flex-col'>
          <div>
            <img src="https://cdn-3.expansion.mx/c2/fc/90e67e2e44d898e2958a7a8949bd/terreno.jpg" alt="" className=' w-auto h-80 object-cover'/>
          </div>
          <div className='bg-azulTerciario p-10 md:w-3/4 w-auto flex flex-col items-center gap-4 md:shadow-md md:ml-4'>
              <h1 className=' text-white text-xl font-bold italic'> Titulo propiedad</h1>
              <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum saepe nisi, possimus natus harum dolores itaque perferendis. Minima, deleniti sequi optio quibusdam facilis temporibus iure aspernatur tempora repellat suscipit?</p>
              <button className='bg-white m-auto p-2 btnTerrenos'> Ver mas</button>
           </div>
        </div>
        </div>

        {/* segundo terreno  */}

        <div className='md:flex md:justify-center flex flex-col mt-10'>
        <div className='md:flex md:flex-row flex flex-col'>
        <div className='md:hidden'>
            <img src="https://cdn-3.expansion.mx/c2/fc/90e67e2e44d898e2958a7a8949bd/terreno.jpg" alt="" className=' w-96 h-80 object-cover'/>
          </div>
          <div className='bg-azulTerciario p-10 md:w-3/4 w-auto flex flex-col items-center gap-4 md:shadow-md md:mr-4'>
              <h1 className=' text-white text-xl font-bold italic'> Titulo propiedad</h1>
              <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum saepe nisi, possimus natus harum dolores itaque perferendis. Minima, deleniti sequi optio quibusdam facilis temporibus iure aspernatur tempora repellat suscipit?</p>
              <button className='bg-white m-auto p-2 btnTerrenos'> Ver mas</button>
           </div>
           <div className='hidden md:contents'>
            <img src="https://cdn-3.expansion.mx/c2/fc/90e67e2e44d898e2958a7a8949bd/terreno.jpg" alt="" className=' w-96 h-80 object-cover'/>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion3
