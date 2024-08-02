import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carros de A a Z",
  description: "Lista de Oportunidades para Revendedores de Carros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
