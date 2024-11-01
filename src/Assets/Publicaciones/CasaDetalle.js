import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Estilo.css"

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Navbar } from "../Navbar";
import { reviews } from "../../Data/Review.js";
import { HouseData } from "../../Data/HouseData.js";

export const CasaDetalle = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const {id}=useParams()
  const [casa,setCasa]=useState()

  useEffect(()=>{
setCasa(HouseData.find(el => el.id === parseInt(id)))
  },[])
  const settings = {
    customPaging: function (i) {
      return (
        <a className="w-12">
          <img src={`${HouseData.find(el => el.id === casa.id).imagenes[i]}`} alt={`Thumbnail ${i + 1}`} className="my-4  "/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb ",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextReview = () => {
    setReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className=" bg-yellow-50 text-gray-800 p-8 h-[100vh]">
      <Navbar navbarNatural={true} />
{casa && 

      <div className="p-32 mx-auto py-10 flex flex-col md:flex-row gap-6 ">
        {/* Sección izquierda: Detalles de la casa */}
        <div className="md:flex-1 space-y-4 bg-white p-6 rounded-lg shadow-lg h-[80vh]">
          <Link to="/" className="text-gray-500 hover:text-gray-700 transition">
            &#8592; Volver
          </Link>
          <h1 className="text-3xl font-bold text-yellow-600">{casa.nombre}</h1>
          <p className="text-lg text-gray-800">{casa.descripcion}</p>

          <div className="container"> 
          <Slider {...settings} className=" container">
  {casa.imagenes.map((imgSrc, index) => (
    <div className="mx-2  d-flex justify-content-center" key={index}>
      <img
        src={imgSrc}
        alt={`Imagen ${index + 1}`}
        className="w-96 h-96 object-cover rounded-lg shadow-md border border-yellow-600" // Cambié `w-96` a `w-full` para ajustar el ancho
      />
    </div>
  ))}
</Slider>



          </div>

        </div>

<div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-[45vh] relative">
  {/* Imagen de la medalla en la esquina superior derecha */}
  {casa.medalla && (
    <img
      src={casa.medalla} // Ajusta la ruta según la ubicación de la imagen
      alt={`Medalla ${casa.medalla}`}
      className="absolute top-4 right-4 w-10 h-10" // Tamaño de la medalla
    />
  )}
  <h2 className="text-xl font-semibold text-yellow-600">Propietario</h2>
  <div className="flex items-center space-x-4">
    <img src={casa?.propietario?.foto} alt={casa?.propietario?.nombre} className="w-20 h-20 rounded-full object-cover shadow-md" />
    <div>
      <p className="font-semibold">{casa?.propietario?.nombre}</p>
    </div>
  </div>

  <h3 className="text-lg font-semibold text-yellow-600 mt-4">Reseñas</h3>
  <div className="flex flex-col items-center mb-4 w-[15vw]">
    {reviews.length > 0 && (
      <>
        <p className="text-gray-600 text-center mb-4 italic h-[13vh]">{reviews[reviewIndex].body}</p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={prevReview}
            className={`bg-yellow-600 text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-yellow-500 transition ${reviewIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={reviewIndex === 0}
          >
            &#10094;
          </button>
          <button
            onClick={nextReview}
            className={`bg-yellow-600 text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-yellow-500 transition ${reviewIndex === reviews.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={reviewIndex === reviews.length - 1}
          >
            &#10095;
          </button>
        </div>
      </>
    )}
  </div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-[34vh] relative my-2">
<h2 className="text-xl font-semibold text-yellow-600">Ubicación</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12674.30270282293!2d25.323289802974983!3d37.423503179231865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2be5c9ccb7b37%3A0xd7e927fceaccb1d8!2sParalia%20Korfos!5e0!3m2!1ses-419!2sar!4v1730431082907!5m2!1ses-419!2sar" width="300" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

      </div>
      
      }
    </div>
  );
};
