import { reviews } from "../../Data/Review";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Tarjeta = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Activar el modo centrado
    centerPadding: '15%', // Ajusta el espaciado alrededor del slide central
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15%', // Mantener el espaciado en pantallas más pequeñas
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '15%', // Mantener el espaciado en pantallas más pequeñas
          dots: true,
        },
      },
    ],
  };
  

  return (
    <section className="py-4">
      <div className="w-[95vw] px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-500">
            ¿Queres conocer la opinion de nuestros usuarios?
          </h2>
          <p className="text-lg mb-6">
          Descubre lo que tienen para decir sobre su experiencia. ¡Sus opiniones cuentan!
          </p>
        </div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="py-4 "  key={review.id} >
            <div className="mx-2 px-4 py-10 rounded-md  bg-white " >
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                  key={i}
                  className={`w-6 h-6 ${i < review.rating ? 'text-yellow-300' : 'text-gray-300'}`}
                  fill={i < review.rating ? 'currentColor' : 'none'}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium leading-5 text-gray-500">{review.date}</p>
              <p className="mt-2 text-sm leading-5 text-gray-600 h-[10vh]">{review.body}</p>
              <div className="mt-4 flex items-center space-x-2">
                <img className="w-10 h-10 object-cover rounded-full border border-gray-200" src={review.photo} alt={review.name} />
                <span className="text-sm font-semibold text-gray-900">{review.name}</span>
              </div>
            </div>
                </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
