"use client";

// URL da API
// https://stockcar-f61453.ingress-earth.ewp.live/wp-json/wp/v2/cars?acf_format=standard&_fields=id,acf.brand,acf.price,acf.hero_image.sizes.medium

import { Alert } from "flowbite-react";
import Item from "./components/item";

const posts = [
  {
    id: 23,
    acf: {
      brand: "BMW",
      price: "200000",
      hero_image: {
        sizes: {
          medium:
            "https://stockcar-f61453.ingress-earth.ewp.live/wp-content/uploads/2024/08/Captura-de-Tela-2024-07-19-as-23.44.49-300x245.png",
        },
      },
    },
  },
  {
    id: 22,
    acf: {
      brand: "FIAT",
      price: "100000",
      hero_image: {
        sizes: {
          medium:
            "https://stockcar-f61453.ingress-earth.ewp.live/wp-content/uploads/2024/08/b-300x157.webp",
        },
      },
    },
  },
];

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-24 lg:px-8">
      <Alert color="info">
        <span className="font-medium">{process.env.NEXT_PUBLIC_API_URL}</span>{" "}
        Change a few things up and try submitting again.
      </Alert>

      <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <Item data={post} id={post.id} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
