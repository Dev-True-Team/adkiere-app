import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Pagination from "../../../components/Pagination";
import Tarjeta from "../../../components/Tarjeta";
import { paginate } from "../../../helper/paginate";

import { ChevronRightIcon } from "@heroicons/react/20/solid";



const casas = [
  {
    id: 1,
    imageSrc:
      "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Renta",
  },
  {
    id: 2,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Venta",
  },
  {
    id: 3,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo: "Venta",
  },
  {
    id: 4,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 5,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 6,
    imageSrc:
      "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Renta",
  },
  {
    id: 7,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Venta",
  },
  {
    id: 8,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo: "Venta",
  },
  {
    id: 9,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 10,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 11,
    imageSrc:
      "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Renta",
  },
  {
    id: 12,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Venta",
  },
  {
    id: 13,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo: "Venta",
  },
  {
    id: 14,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 15,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 16,
    imageSrc:
      "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Renta",
  },
  {
    id: 17,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Venta",
  },
  {
    id: 18,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo: "Venta",
  },
  {
    id: 19,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 20,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 21,
    imageSrc:
      "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Renta",
  },
  {
    id: 22,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Venta",
  },
  {
    id: 23,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo: "Venta",
  },
  {
    id: 24,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 25,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 26,
    imageSrc:
      "https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Renta",
  },
  {
    id: 27,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 4,
    baños: 2,
    area: 3000,
    garaje: 1,
    precio: 77250,
    tipo: "Venta",
  },
  {
    id: 28,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 3,
    baños: 1,
    area: 3000,
    garaje: 1,
    precio: 721250,
    tipo: "Venta",
  },
  {
    id: 29,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
  {
    id: 30,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
    imageAlt: "casa blanca",
    titulo: "Casa Blanca",
    direccion: "Lomas",
    habitaciones: 2,
    baños: 1.5,
    area: 3000,
    garaje: 1,
    precio: 80000,
    tipo: "Venta",
  },
];



const ventas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const paginatedPosts = paginate(casas, currentPage, pageSize);

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='md:mx-20 md:my-10 m-2'>
      <div className='flex flex-row gap-4 my-2'>
                  <h2 className=" text-sm font-thin tracking-tight text-azulPrimario">Inicio</h2>
                  <ChevronRightIcon className="h-auto w-5 text-azulPrimario"></ChevronRightIcon>
                  <h2 className=" text-sm font-thin tracking-tight text-azulPrimario">Casas en venta</h2>
     </div>
      <div className='flex flex-row items-baseline gap-4'>
                  <h2 className="text-2xl font-bold tracking-tight text-azulPrimario">Casas en venta</h2>
              </div>

      
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 justify-items-center">
          {paginatedPosts.map((inmueble:any) => {
            return <Tarjeta key={inmueble.id} inmueble={inmueble}></Tarjeta>
            })}
        </div>
      </div>

      <Pagination
       items={casas.length} // 100
       currentPage={currentPage} // 1
       pageSize={pageSize} // 10
       onPageChange={onPageChange}></Pagination>

      <Footer></Footer>


    </div>
  );
};

export default ventas;
