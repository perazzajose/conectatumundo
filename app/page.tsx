import Link from "next/link"
import { ArrowRight, CheckCircle, Laptop, BookOpen, Briefcase, PenTool, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import Head from 'next/head';

<Head>
  <link rel="icon" href="/favicon.png" />
  <title>Conecta Tu Mundo</title>
</Head>

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section con blur */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Impulsamos tu pyme, educamos tu futuro
              </h1>
              <p className="max-w-[600px] text-purple-100 md:text-xl">
                Soluciones digitales, educativas y laborales para vos. Todo lo que necesitas en un solo lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-md">
                  <Link href="/servicios">
                    Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-white/30">
                  <Link href="/contacto">Contactanos</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.7)]">

                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFjeHB6MzlydWNibGk1czhwcm5vcndrdndlaGJhcXlxYjFzOWkxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4FkC2VqpeNRHjTDQ5/giphy.gif"
                  alt="Conecta Tu Mundo"
                  className="object-cover w-full h-full"
                  style={{ animationIterationCount: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 backdrop-blur-sm">
                Nuestros Servicios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Todo lo que necesitas en un solo lugar
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos soluciones integrales para individuos y empresas en diversas áreas
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              icon={<PenTool className="h-10 w-10 text-purple-600" />}
              title="Marketing y Redes"
              description="Branding, gestión de redes sociales y estrategias para mejorar tu huella digital."
              link="/servicios/marketing"
            />
            <ServiceCard
              icon={<BookOpen className="h-10 w-10 text-purple-600" />}
              title="Educación"
              description="Clases personalizadas de matemática, inglés, informática y más para estudiantes."
              link="/servicios/educacion"
            />
            <ServiceCard
              icon={<Wrench className="h-10 w-10 text-purple-600" />}
              title="Tecnología"
              description="Reparación de PC, formateo, limpieza y optimización para gaming o trabajo."
              link="/servicios/tecnologia"
            />
            <ServiceCard
              icon={<Laptop className="h-10 w-10 text-purple-600" />}
              title="Desarrollo"
              description="Creación de sitios web, portfolios y tiendas online para emprendedores."
              link="/servicios/desarrollo"
            />
            <ServiceCard
              icon={<Briefcase className="h-10 w-10 text-purple-600" />}
              title="Empleo y Carrera"
              description="Armado de CV, preparación para entrevistas y optimización de LinkedIn."
              link="/servicios/empleo"
            />
            <div className="flex flex-col items-center justify-center p-6 bg-purple-50/80 rounded-lg border border-purple-100/50 hover:shadow-md transition-all backdrop-blur-sm">
              <div className="rounded-full bg-purple-100/80 p-3 mb-4 backdrop-blur-sm">
                <ArrowRight className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Necesitas algo más?</h3>
              <p className="text-gray-600 text-center mb-4">
                Contáctanos para soluciones personalizadas a tus necesidades específicas.
              </p>
              <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50/50">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features con blur */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50/60 backdrop-blur-xs">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-sm">
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Soluciones integrales para todas tus necesidades
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">
                En Conecta Tu Mundo nos destacamos por ofrecer servicios de alta calidad adaptados a tus necesidades
                específicas.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Atención personalizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Sin intermediarios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Soluciones a medida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Precios accesibles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Acompañamiento constante</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm">
                  <Link href="/nosotros">Conoce más sobre nosotros</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGg4d3B4MWd6eXo2Z2Z3cWEyZXMwMnlkYWhxNnVmbXBrbGFqZ3FtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XyJPNKBskIDWR3Md8K/giphy.gif"
                  alt="Nuestro equipo"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-sm">
                Testimonios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre por qué nuestros clientes confían en nosotros para sus necesidades digitales y educativas
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TestimonialCard
              quote=" - - - "
              author=" - - - "
              role=" - - - "
            />
            <TestimonialCard
              quote=" - - - "
              author=" - - - "
              role=" - - - "
            />
            <TestimonialCard
              quote=" - - - "
              author=" - - - "
              role=" - - - "
            />
          </div>
        </div>
      </section>

      {/* CTA con blur */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-800/90 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                ¿Listo para impulsar tu proyecto?
              </h2>
              <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-md">
                <Link href="/contacto">
                  Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              >
                <Link href="/servicios">Ver todos los servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}