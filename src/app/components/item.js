"use client"

import Gallery from "./gallery";

export default function Item({ data }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <Gallery key={data.id} thumbnail={data.acf.hero_image.sizes.medium} fullImage={data.acf.hero_image.sizes.large} />


      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.acf.brand}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Preço: {data.acf.price}
        </p>
      </div>


    </div>
  );
}
