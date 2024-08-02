// {
//     id: 23,
//     acf: {
//       brand: "BMW",
//       price: "200000",
//       hero_image: {
//         sizes: {
//           medium:
//             "https://stockcar-f61453.ingress-earth.ewp.live/wp-content/uploads/2024/08/Captura-de-Tela-2024-07-19-as-23.44.49-300x245.png",
//         },
//       },
//     },
//   },

export default function Item({ data }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={data.acf.hero_image.sizes.medium} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.acf.brand}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Preço: {data.acf.price}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>

    // <article
    //   key={data.id}
    //   className="flex max-w-xl flex-col items-start justify-between"
    // >
    //   <div className="flex items-center gap-x-4 text-xs">
    //     <time dateTime={data.datetime} className="text-gray-500">
    //       {data.date}
    //     </time>
    //     <a
    //       href={data.category.href}
    //       className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
    //     >
    //       {data.category.title}
    //     </a>
    //   </div>
    //   <div className="group relative">
    //     <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
    //       <a href={data.href}>
    //         <span className="absolute inset-0" />
    //         {data.title}
    //       </a>
    //     </h3>
    //     <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
    //       {data.description}
    //     </p>
    //   </div>
    //   <div className="relative mt-8 flex items-center gap-x-4">
    //     <img
    //       alt=""
    //       src={data.author.imageUrl}
    //       className="h-10 w-10 rounded-full bg-gray-50"
    //     />
    //     <div className="text-sm leading-6">
    //       <p className="font-semibold text-gray-900">
    //         <a href={data.author.href}>
    //           <span className="absolute inset-0" />
    //           {data.author.name}
    //         </a>
    //       </p>
    //       <p className="text-gray-600">{data.author.role}</p>
    //     </div>
    //   </div>
    // </article>
  );
}
