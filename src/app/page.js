// URL da API
// https://stockcar-f61453.ingress-earth.ewp.live/wp-json/wp/v2/cars?acf_format=standard&_fields=id,acf

// {
//   "id": 46,
//   "acf": {
//     "brand": "VOLKSWAGEN",
//     "model": "GOL CITY (TREND)/TITAN 1.0 T. FLEX 8V 4P",
//     "year": "2012",
//     "gear": "Manual",
//     "info_premium": {
//       "info_1": "30.000 KM",
//       "info_2": "Manual e Chave reserva",
//       "info_3": "Sem detalhes"
//     },
//     "notes": "Carro já con vistoria cautelar aprovada!",
//     "fipe_price": "100000",
//     "final_price": "87000",
//     "active": true,
//     "photos": {
//       "hero": {
//         "ID": 55,
//         "id": 55,
//         "sizes": {
//           "medium": "https://stockcar-f61453.ingress-earth.ewp.live/wp-content/uploads/2024/08/5-300x258.jpg",
//           "medium_large": "https://stockcar-f61453.ingress-earth.ewp.live/wp-content/uploads/2024/08/5-768x660.jpg",
//           "large": "https://stockcar-f61453.ingress-earth.ewp.live/wp-content/uploads/2024/08/5-1024x880.jpg",
//         }
//       },
//       "hero_1": false,
//       "hero_5": false,
//       "hero_6": false,
//       "hero_7": false,
//       "hero_8": false,
//       "hero_9": false,
//       "hero_10": false
//     }
//   }
// }

import { Alert } from "flowbite-react";
import Item from "./components/item";

const ItemCar = ({ data }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a
        href="#"
        className="bg-cover bg-center w-auto h-64 block rouded-lg rounded-t"
        style={{ backgroundImage: `url(${data.acf.photos.hero.sizes.medium})` }}
      ></a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white my-3 uppercase">
          <span className="">{data.acf.brand} </span>
          <span className="">{data.acf.model} </span>
          <span className="">{data.acf.year} </span>
          <span className="">{data.acf.gear} </span>
        </h5>

        {data.acf.info_premium && (
          <ul
            role="list"
            className="space-y-4 text-gray-600 dark:text-gray-400"
          >
            {data.acf.info_premium.info_1 && (
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  {data.acf.info_premium.info_1}
                </span>
              </li>
            )}
            {data.acf.info_premium.info_1 && (
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  {data.acf.info_premium.info_2}
                </span>
              </li>
            )}
            {data.acf.info_premium.info_3 && (
              <li className="flex space-x-2 rtl:space-x-reverse items-center">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">
                  {data.acf.info_premium.info_3}
                </span>
              </li>
            )}
          </ul>
        )}

        {data.acf.notes && (
          <p className="pt-4 mt-5 text-sm border-t border-gray-200 font-normal text-gray-600 dark:text-gray-400">
            {data.acf.notes}
          </p>
        )}

        <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200">
          <ul
            role="list"
            className="max-w-sm divide-y divide-white dark:divide-gray-700"
          >
            <li className="py-1 sm:py-1">
              <div className="flex items-center space-x-3">
                <span className="w-8 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  FIPE
                </span>
                <span className="text-2xl font-bold text-gray-700">
                  R$ {data.acf.fipe_price}
                </span>
              </div>
            </li>
            <li className="py-1 sm:py-1">
              <div className="flex flex-row items-center space-x-3">
                <span className="w-8 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  FAZ
                </span>
                <span className="text-3xl font-bold text-green-800">
                  R$ {data.acf.final_price}
                </span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="pt-5 mt-5 border-t border-gray-200">
          <button
            type="button"
            className="text-gray-900 w-full bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Fale com o consultor
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = async () => {
  const req = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/cars?acf_format=standard&_fields=id,slug,acf`
  );
  const cars = await req.json();

  return (
    <div>
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <section className="">
          <div className="py-0 px-4 mx-auto max-w-screen-xl lg:pt-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                We invest in the world’s potential
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-screen-xl mx-auto p-4 md:py-0">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cars.map((car) => {
              return <ItemCar key={car.id} data={car} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
