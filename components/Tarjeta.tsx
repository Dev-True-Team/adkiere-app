import React from "react";

interface Casas {
  id: number;
  imageSrc: string;
  imageAlt: string;
  titulo: string;
  direccion: string;
  habitaciones: number;
  baños: number;
  area: number;
  garaje: number;
  precio: number;
  tipo:string;
}

interface TarjetaProps {
  inmueble: Casas;
}

const Tarjeta: React.FC<TarjetaProps> = ({ inmueble }) => {
  return (
    <div className=" bg-hueso shadow-2xl flex flex-col w-max">
      <div key={inmueble.id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75 lg:h-80 hover:cursor-pointer">
          <img
            src={inmueble.imageSrc}
            alt={inmueble.imageAlt}
            className=" w-80 h-80 object-cover"
          />
        </div>
        <div className="flex flex-row p-2 bg-azulSecundario">
          <h3 className=" font-medium m-auto self-center text-blanco">
            {inmueble.titulo}
          </h3>
        </div>

        <div className="p-3">
        <div className="">
          <p className="font-light text-grisClaro">
          {inmueble.direccion}
          </p>
        </div>

          <div className="md:flex md:flex-row md:justify-between flex-col columns-2 items-center">
            <p className="mt-1 text-xs text-negro">
              <strong>{inmueble.habitaciones}</strong> Habitaciones
            </p>
            <p className="mt-1 text-xs text-negro">
              <strong>{inmueble.baños}</strong> Baños
            </p>
            <p className="mt-1 text-xs text-negro">
              <strong>{inmueble.area}</strong> M2
            </p>
            <p className="mt-1 text-xs text-negro">
              <strong>{inmueble.garaje}</strong> Garaje
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <h1 className=" font-bold text-grisClaro">{inmueble.tipo}</h1>
            <h2 className=" font-black text-negro text-2xl">{inmueble.precio}</h2>
          </div>
        </div>


      </div>
    </div>
    
  );
};

export default Tarjeta;
