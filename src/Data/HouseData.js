import oro from "../imagenes/oro.png"
import plata from "../imagenes/plata.png"
import bronce from "../imagenes/bronce.png"
import carru1 from "../imagenes/carru1.jpeg"
import carru2 from "../imagenes/carru2.jpeg"
import carru3 from "../imagenes/carru3.jpeg"
import carru4 from "../imagenes/carru4.jpeg"

export const HouseData = [
  { 
    id: 1, 
    image: carru4, // Imagen principal
    imagenes: [
      carru4,
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/591097399.jpg?k=86349e3dfcc48813177b617b82e4d8a99b3324953e19cf6ccbcc7d000f27b3dd&o=&hp=1", // Principal
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/516801533.jpg?k=60e3258c595b357498239b0ab9c42ca9555f21c6acc7465113f53eb1c856a112&o=&hp=1", // Segunda imagen
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/517031397.jpg?k=9ee06e07db182c43ab7b0a7171592fd8d311cfa65941686c1f2cff0db9508e15&o=&hp=1", // Tercera imagen
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/516802267.jpg?k=365683039022934b64da7da4ba1fbe839cf4152f8124f9f5b7b49f09761e18fa&o=&hp=1", // Cuarta imagen
      "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/516800852.jpg?k=58769d394fa7a526fd05c901c4332cfe789e6edaba72514777a011937c22dec8&o=&hp=1", // Quinta imagen
    ], 

    medalla: oro ,
    location: "Grecia", 
    description: "Casa tradicional en Grecia, con vistas al mar Egeo, perfecta para unas vacaciones veraniegas.", 
    nombre:"Casa 3 departamentos en el Centro de Grecia",
    propietario: {
      nombre: "Juan Pérez",
      foto: "https://i.pravatar.cc/150?img=10",
      creado:"10/02/2020",
      hospedados:100
    }
  },
  { 
    id: 2, 
    image: carru2, // Imagen principal
    imagenes: [
      "https://images.unsplash.com/photo-1487751247633-2e6b12a6e88b", // Principal
      "https://images.unsplash.com/photo-1472522031744-cc01b4ae1793", // Segunda imagen
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Tercera imagen
      "https://images.unsplash.com/photo-1515464011988-29c6cfbe3f73", // Cuarta imagen
      "https://images.unsplash.com/photo-1555150823-efecb65d0c3f", // Quinta imagen
    ], 
    location: "Toscana, Italia", 
    description: "Villa en el campo toscano, rodeada de viñedos y perfecta para el descanso veraniego.", 
    descripcionExtendida: "Relájate y disfruta del sol griego. Con un ambiente acogedor y auténtico, la casa cuenta con espacios luminosos y bien ventilados, ideales para disfrutar de las suaves brisas marinas. Desde tu balcón privado, podrás contemplar atardeceres inolvidables y el esplendor del paisaje circundante. Perfecta para aquellos que buscan un intercambio de casas, esta propiedad te permitirá vivir la auténtica cultura griega mientras compartes tu hogar con otros viajeros. ¡Ven y experimenta la belleza de Grecia en este idílico paraíso!",
    medalla: "plata" 
  },
  { 
    id: 3, 
    image: carru3, // Imagen principal
    imagenes: [
      "https://images.unsplash.com/photo-1565571340-1b7eebdce1dc", // Principal
      "https://images.unsplash.com/photo-1589302030636-7bcae80e4f69", // Segunda imagen
      "https://images.unsplash.com/photo-1579153080603-045b9f1cf202", // Tercera imagen
      "https://images.unsplash.com/photo-1600727981761-167c2f3271a2", // Cuarta imagen
      "https://images.unsplash.com/photo-1515464011988-29c6cfbe3f73", // Quinta imagen
    ], 
    location: "Kyoto, Japón", 
    description: "Casa tradicional en Kyoto con jardín zen, ideal para relajarse en verano.", 
    medalla: "bronce" 
  },
  { 
    id: 4, 
    image: carru4, // Imagen principal
    imagenes: [
      "https://images.unsplash.com/photo-1565571047-f9f529c1f1c0", // Principal
      "https://images.unsplash.com/photo-1596433271715-585b5d69c001", // Segunda imagen
      "https://images.unsplash.com/photo-1528746264301-9d63490e8a1b", // Tercera imagen
      "https://images.unsplash.com/photo-1580669475051-f4a9a7eaa7d7", // Cuarta imagen
      "https://images.unsplash.com/photo-1572014741681-17c51e74d708", // Quinta imagen
    ], 

  }
];
