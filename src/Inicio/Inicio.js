
import img from "../imagenes/descarga.jpg"
import img1 from "../imagenes/descarga1.jpeg"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Hero} from "../Assets/Inicio/Hero.js"
import {Navbar} from "../Assets/Navbar.js"
import {BotonCasa} from "../Assets/Inicio/Casas.js"
import {HouseData} from "../Data/HouseData.js"
import { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import { Estadistica } from "../Assets/Inicio/Estadistica.js";
import { Tarjeta } from "../Assets/Inicio/Tarjeta.js";
import { Informacion } from "../Assets/Inicio/Informacion.js";


export const Inicio=()=>{
  const [currentSection, setCurrentSection] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentSection < 5) {
        // Scroll down
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection((prev) => prev - 1);
        
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentSection]);

  useEffect(() => {
    scroll.scrollTo(currentSection * window.innerHeight, {
      duration: 1200,
      smooth: "easeInOutQuint",
    });
  }, [currentSection]);

  useEffect(() => {
    if (currentSection === 1) {
      // Reset visibleCards when entering section 2
      const timeouts = [];
      for (let i = 0; i < 5; i++) {
        timeouts.push(
          setTimeout(() => {
            setVisibleCards((prev) => [...prev, i]);
          }, i * 300)
        );
      }

      // Clear timeouts on component unmount
      return () => timeouts.forEach((timeout) => clearTimeout(timeout));
    } else {
      // Reset visibleCards when leaving section 2
      setVisibleCards([]);
    }
  }, [currentSection]);


  
  return (
    <div className="min-h-screen text-black font-sans">

    <Navbar currentSection={currentSection}/>

      <Element name="section1" className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('${img1}')` }}>
        <Hero/>
      </Element>


      <Element name="section2" className="container min-h-screen flex flex-col justify-center text-black rounded-lg p-6 h-[100vh]">
      <Informacion visibleCards={visibleCards}/>
      </Element>

      <Element name="section3" className="py-10 px-6 h-screen bg-gray-100 flex flex-col justify-center items-center h-[100vh]">

      <section className="py-10 px-6  bg-gray-100 flex flex-col justify-content-center items-center">
    <div className="d-flex justify-content-center h-[20vh]">
<h2 className="text-3xl font-bold text-yellow-700 mb-6">
Casas disponibles
</h2>
    </div>
<div className="carousel w-full flex justify-evenly">

{HouseData.map((house, index) => (
<div key={index} className="flex-none mx-2 relative">
<div className="w-[22rem] h-[38rem] bg-white text-black rounded-lg overflow-hidden shadow-lg border border-yellow-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
{/* Imagen de usuario */}
{/* <img 
  src={house.medalla} 
  alt={`Imagen del usuario que publica esta casa en ${house.location}`} 
  className="absolute top-4 left-4 w-12 h-12 rounded-full border-2 border-yellow-500 object-cover shadow-md"
/> */}

<img 
  src={house.image} 
  alt={`Imagen de una casa ubicada en ${house.location}`} 
  className="w-full h-[60%] object-cover"
  loading="lazy"
/>

<div className="p-4 h-[15vh]">
  <h3 className="text-2xl font-semibold mb-2 text-yellow-500 line-clamp-1">{house.location}</h3>
  <p className="text-md text-gray-700 line-clamp-3">{house.description}</p>
</div>

<div className="flex justify-between items-center p-4 border-t border-yellow-300">
<BotonCasa house={house}/>
  {house.medalla &&
  <div className="absolute bottom-4 right-4 flex space-x-2">
    <span key={index} className=" border border-yellow-600  rounded-full p-2 shadow-md">
      <img src={house.medalla} alt={house.medalla} className="w-10 h-10" />
    </span>
</div>
  }
</div>


</div>
</div>
))}


</div>
</section>

      </Element>
      <Element name="section4" className="py-10 px-6 bg-yellow-700 flex flex-col items-center h-screen">
  <Estadistica/>
</Element>

<Element name="section4" className="h-[100vh]">
<div  className="py-10 px-6 bg-gray-200 flex flex-col items-center  h-[100vh]">

     <Tarjeta/>
</div>




  </Element>


    </div>
      
    )
}


