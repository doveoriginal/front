"use client";

import Gallery from "./galleryCar";

const ItemCar = ({ data }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Gallery key={data.id} images={data.acf.photos} id={data.id} />
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

export default ItemCar;
