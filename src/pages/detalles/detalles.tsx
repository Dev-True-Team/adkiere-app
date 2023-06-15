import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";
import MySwiper from "../../../components/MySwiper";
import { SwiperSlide } from "swiper/react";
import Tarjeta from "../../../components/Tarjeta";
import MySwiperDetails from "../../../components/MySwiperDetails";

const detalleCasas = [
  {
    id: 1,
    imageSrc: [
      "https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      "https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501",
      "https://cdn.theatlantic.com/media/img/photo/2015/06/unusual-homes-around-the-world/h01_RTXZWGT/main_1500.jpg",
    ],
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
];

const casas = [
  {
    id: 1,
    imageSrc: "https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg",
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
];

const detalles = () => {
  const imageSrcArray = detalleCasas[0]?.imageSrc;

  const [selectedImage, setSelectedImage] = useState(detalleCasas[0]?.imageSrc[0]);

  const [selectedIndex, setSelectedIndex] = useState(-1);


  const handleThumbnailClick = (src:any, idx:any) => {
    setSelectedImage(src);
    setSelectedIndex(idx);
  };



  return (
    <div>
      <Navbar></Navbar>

      <div className="mx-12 md:mx-20 md:mt-10 md:mb-3">
        <div className="my-2 flex flex-row gap-4">
          <h2 className=" text-sm font-thin tracking-tight text-grisClaro">
            Inicio
          </h2>
          <ChevronRightIcon className="h-auto w-5 text-azulPrimario"></ChevronRightIcon>
          <h2 className=" text-sm font-thin tracking-tight text-grisClaro">
            Casas en venta
          </h2>
          <ChevronRightIcon className="h-auto w-5 text-azulPrimario"></ChevronRightIcon>
          <h2 className=" text-sm font-thin tracking-tight text-grisClaro">
            Detalle de casa
          </h2>
        </div>
      </div>

      <section className=" pb-6 shadow-md">
        <div className=" px-12 md:px-20">
          <div className="relative mx-auto flex max-w-screen-xl flex-col gap-4 bg-azulPrimario px-4 py-8 md:flex-row">
            <ul className="mt-4 hidden w-3/12 flex-col gap-1 md:flex">
              {detalleCasas.map((item, index) => (
                <li key={index}>
                  {item.imageSrc.map((src, idx) => (
                    <img
                      key={idx}
                      alt="Tee"
                      src={src}
                      className={`mt-1 h-16 w-16 rounded-md object-cover ${
                        selectedImage === src ? "border-blue-500 border-2" : ""
                      }`}
                      onClick={() => handleThumbnailClick(src,idx) }
                    />
                  ))}
                </li>
              ))}
            </ul>

            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <MySwiperDetails>
                  {imageSrcArray?.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        alt="Tee"
                        src={src}
                        className="h-72 w-full rounded-xl object-cover md:h-full lg:h-[540px] "
                      />
                    </SwiperSlide>
                  ))}
                </MySwiperDetails>
              </div>
            </div>

            <div className=" mt-4 flex w-auto md:w-11/12">
              <div className="prose max-w-none">
                <div className="flex flex-row items-baseline gap-4">
                  <h2 className=" text-sm tracking-tight text-blanco underline decoration-azulAlerta">
                    Casas en venta
                  </h2>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blanco lg:text-3xl">
                    Titulo de la casa
                  </h1>

                  <p className="my-2 text-base text-blanco md:text-sm">
                    Descripcion de la casa
                  </p>
                </div>
                <p className="text-sm text-blanco md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  totam eos iusto repellat blanditiis voluptate aspernatur, quae
                  nemo exercitationem cum debitis! Sint consectetur laborum
                  tempora repellat odit. Impedit quasi reprehenderit harum illum
                  sequi provident soluta cum quisquam odit possimus? Officia
                  illum saepe magnam nostrum, officiis placeat iure itaque
                  cumque voluptate?
                </p>
                <div className="mt-4 flex flex-col items-center gap-1">
                  <h2 className=" text-xl font-semibold italic tracking-tight text-blanco">
                    Precio de venta
                  </h2>
                  <h2 className=" text-xl font-semibold italic tracking-tight text-blanco">
                    L. 100,000
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor swiper de casas en venta */}
      <div className="mx-auto py-16 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" mx-2 md:mx-20">
          <div className="mb-5 flex flex-row items-baseline gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-azulPrimario ">
              Casas relacionadas
            </h2>
            <a className="text-xs text-azulAlerta underline" href="">
              Ver más
            </a>
          </div>
          <MySwiper>
            <div className="mt-6 grid grid-cols-1 justify-items-center gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {casas.map((inmueble) => (
                <SwiperSlide key={inmueble.id}>
                  <Tarjeta inmueble={inmueble}></Tarjeta>
                </SwiperSlide>
              ))}
            </div>
          </MySwiper>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default detalles;
