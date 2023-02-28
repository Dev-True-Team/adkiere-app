import React from "react";

const Seccion1 = () => {
  return (
    <div className="flex h-auto max-w-full bg-edificioHome bg-cover bg-no-repeat  mb-8">
      <div className="bg-trapezio bg-[length:100%_100%] bg-no-repeat ">
        <div className="flex flex-col py-20 pr-20 pl-4 md:py-52 md:pl-40 md:pr-60">
          <h1 className="mr-20 text-3xl font-bold italic text-blanco">
            Bienvenido a
          </h1>
          <h1 className="mr-20 text-3xl font-bold italic text-blanco">
            Adkiere Bienes Raices
          </h1>
          <p className="my-4 mr-20 font-thin text-blanco">
            Encontraras la casa perfecta para ti, que llamaras hogar.
          </p>
          <button className="callToActionBtn m-auto">¡Busca ahora!</button>
        </div>
      </div>
    </div>
  );
};

export default Seccion1;
