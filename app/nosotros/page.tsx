import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24  gradient-bg-blue">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">Sobre Nosotros</h1>
              <p className="max-w-[700px] text-zinc-200 md:text-xl/relaxed">
                Conoce quiénes somos y cómo podemos ayudarte a alcanzar tus objetivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm px-3 py-1 text-sm ">
                Nuestra Historia
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-700">
                Conectando personas con soluciones
              </h2>
              <p className="text-zinc-500 md:text-xl/relaxed">
                Conecta Tu Mundo nació con la visión de ofrecer soluciones integrales en un mundo cada vez más digital y
                competitivo. Fundada por un equipo de apasionados por la tecnología y la educación,
                nuestro emprendimiento busca ayudarte a alcanzar tus metas, ya sea en el ámbito personal o profesional.
                </p>
                <p className="text-zinc-500 md:text-xl/relaxed">
                Desde nuestros inicios, nos hemos comprometido a brindar servicios de alta calidad, adaptados a las
                necesidades específicas de cada cliente, ya sea una pyme que busca mejorar su presencia digital, un
                estudiante que necesita apoyo académico o un profesional que quiere impulsar su carrera.
                </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJvZTRucHp0b2ZlMGdsNWNucWJ3c2xyNjFvM3Rvdmt4dGh2cTZ5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KDYB0cH4HW8xc3VIAx/giphy.gif "
                  alt="Nuestra Historia"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block rounded-lg bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm px-3 py-1 text-sm ">Nuestra Misión</div>
              <h2 className="text-2xl font-bold tracking-tighter text-purple-700">
                Impulsar el crecimiento de personas y empresas
              </h2>
              <p className="text-zinc-500">
                Nuestra misión es proporcionar soluciones digitales, educativas y laborales de alta calidad que permitan
                a nuestros clientes alcanzar sus objetivos y maximizar su potencial en un mundo cada vez más competitivo
                y tecnológico.
              </p>
              <ul className="grid gap-3 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Excelencia en el servicio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Soluciones personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Innovación constante</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block rounded-lg bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm px-3 py-1 text-sm ">Nuestra Visión</div>
              <h2 className="text-2xl font-bold tracking-tighter text-purple-700">
                Ser referentes en soluciones integrales
              </h2>
              <p className="text-zinc-500">
                Aspiramos a ser reconocidos como la emprendimiento líder en la provisión de soluciones integrales, creando un
                impacto positivo en la vida de nuestros clientes y contribuyendo al desarrollo de una sociedad más
                conectada, educada y preparada para los desafíos del futuro.
              </p>
              <ul className="grid gap-3 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Liderazgo en el sector</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Impacto social positivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Crecimiento sostenible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    

      {/* Valores */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm px-3 py-1 text-sm ">
                Nuestros Valores
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-700">
                Los principios que nos guían
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estos son los valores fundamentales que definen nuestra cultura y forma de trabajo
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Valor 1 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Excelencia</h3>
              <p className="text-zinc-500">
                Nos esforzamos por ofrecer servicios de la más alta calidad, superando las expectativas de nuestros
                clientes en cada proyecto.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Innovación</h3>
              <p className="text-zinc-500">
                Buscamos constantemente nuevas formas de mejorar nuestros servicios, incorporando las últimas tendencias
                y tecnologías.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Integridad</h3>
              <p className="text-zinc-500">
                Actuamos con honestidad y transparencia en todas nuestras interacciones, construyendo relaciones de
                confianza duraderas.
              </p>
            </div>

            {/* Valor  4 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Compromiso</h3>
              <p className="text-zinc-500">
                Nos dedicamos plenamente a cada proyecto, asumiendo la responsabilidad de entregar resultados que
                generen valor real.
              </p>
            </div>

            {/* Valor 5 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Colaboración</h3>
              <p className="text-zinc-500">
                Trabajamos en estrecha colaboración con nuestros clientes, entendiendo sus necesidades y construyendo
                soluciones conjuntas.
              </p>
            </div>

            {/* Valor 6 */}
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-purple-700 mb-3">Adaptabilidad</h3>
              <p className="text-zinc-500">
                Nos adaptamos rápidamente a los cambios y desafíos, ofreciendo soluciones flexibles que evolucionan con
                las necesidades del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 bg-purple-400 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Quieres formar parte de nuestra historia?
              </h2>
              <p className="max-w-[900px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-800 text-white">
                <Link href="/contacto">
                  Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
