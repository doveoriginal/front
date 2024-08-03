import ItemCar from "./components/itemCar";

const Home = async () => {
  const req = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/cars?acf_format=standard&_fields=id,slug,acf`,
    { cache: "no-cache" }
  );
  const cars = await req.json();

  return (
    <div>
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <section className="">
          <div className="py-0 px-4 mx-auto max-w-screen-xl lg:pt-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Bem-vindo à nossa plataforma para revendedores de veículos!
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Encontre uma seleção de carros disponíveis para recompra,
                verificados para garantir a melhor qualidade e preço. Aproveite
                essas oportunidades e expanda seu estoque com os melhores
                negócios do mercado!
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
