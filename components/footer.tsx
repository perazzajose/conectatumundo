import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full gradient-bg-dark text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Conecta Tu Mundo
            </h3>
            <p className="text-blue-200 mb-4">
              Soluciones digitales, educativas y laborales para vos. Todo lo que necesitas en un solo lugar.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/marketing"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Marketing y Redes
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/educacion"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Educación
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/tecnologia"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Tecnología
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/desarrollo"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Desarrollo
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/empleo"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Empleo y Carrera
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-blue-200">Salinas, Canelones</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-blue-200">098 104 211</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-blue-200">conectatumundo01@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-900/50 mt-12 pt-6 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Conecta Tu Mundo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
