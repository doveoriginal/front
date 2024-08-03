export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
           
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Perguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Politica de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
