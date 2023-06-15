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