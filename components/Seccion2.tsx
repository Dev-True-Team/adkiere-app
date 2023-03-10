import React from 'react'
import { SwiperSlide } from 'swiper/react'
import MySwiper from './MySwiper'
import Tarjeta from './Tarjeta'



const casas = [
  {
    id: 1,
    imageSrc: 'https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg',
    imageAlt: 'casa blanca',
    titulo: 'Casa Blanca',
    direccion: 'Lomas',
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo:'Renta',
  },
  {
    id: 2,
    imageSrc: 'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg',
    imageAlt: 'casa blanca',
    titulo: 'Casa Blanca',
    direccion: 'Lomas',
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo:'Venta',
  },
  {
    id: 3,
    imageSrc: 'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg',
    imageAlt: 'casa blanca',
    titulo: 'Casa Blanca',
    direccion: 'Lomas',
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo:'Venta',
  },
  {
    id: 4,
    imageSrc: 'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg',
    imageAlt: 'casa blanca',
    titulo: 'Casa Blanca',
    direccion: 'Lomas',
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo:'Venta',
  },
  {
    id: 5,
    imageSrc: 'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg',
    imageAlt: 'casa blanca',
    titulo: 'Casa Blanca',
    direccion: 'Lomas',
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo:'Venta',
  },
]

const Seccion2 = () => {
  return (
    <div>
      
        <div className="bg-triangulo bg-[length:100%_100%] bg-no-repeat shadow-2xl">
          {/* Contenedor swiper de casas en venta */}
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className=' md:mx-20 mx-2'>
              <div className='flex flex-row items-baseline gap-4'>
                  <h2 className="text-2xl font-bold tracking-tight text-azulPrimario">Casas en venta</h2>
                  <a className='text-azulAlerta text-xs underline' href="">Ver más</a>
              </div>
              <MySwiper>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              
                {casas.map((inmueble)=>(
                  <SwiperSlide key={inmueble.id}>
                    <Tarjeta  inmueble={inmueble}></Tarjeta>
                  </SwiperSlide>
                ))}
                
              </div>
              </MySwiper>

              {/* Contenedor swiper de casas en renta */}
              <div className='flex flex-row items-baseline gap-4'>
                  <h2 className="text-2xl font-bold tracking-tight text-azulPrimario">Casas en renta</h2>
                  <a className='text-azulAlerta text-xs underline' href="">Ver más</a>
              </div>
              <MySwiper>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              
                {casas.map((inmueble)=>(
                  <SwiperSlide key={inmueble.id}>
                    <Tarjeta  inmueble={inmueble}></Tarjeta>
                  </SwiperSlide>
                ))}
                
              </div>
              </MySwiper>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Seccion2;
