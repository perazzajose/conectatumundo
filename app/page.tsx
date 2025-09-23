import Link from "next/link"
import { ArrowRight, CheckCircle, Laptop, BookOpen, Briefcase, PenTool, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"


export default function Home() {
  return (
    <div className="pt-16 flex flex-col min-h-screen">
      {/* Hero Section con blur */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-blue">
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
                <Button asChild size="lg" className="bg-violet-400 hover:bg-violet-500 text-white backdrop-blur-md">
                  <Link href="/servicios">
                    Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-white/30">
                  <Link href="https://api.whatsapp.com/send/?phone=59895197314&text&type=phone_number&app_absent=0" target="_blank">Contactanos</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.7)]">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Conecta Tu Mundo"
                  className="object-cover w-full h-full"
                  style={{ animationIterationCount: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas y Soluciones */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
                ¿Te identificas con alguna de estas situaciones?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
                Sabemos exactamente lo que necesitas
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cada día ayudamos a personas como vos a resolver estos desafíos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Problema 1 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all hover-scale">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-orange-100 p-3 flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    ¿Quieres crear un emprendimiento y no sabes cómo?
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    Te acompañamos desde la idea inicial hasta el lanzamiento. Desarrollo web, marketing digital,
                    branding y todo lo que necesitas para empezar.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-500/50 hover:border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    <Link href="/servicios/desarrollo">
                      Ver cómo te ayudamos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Problema 2 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all hover-scale">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    ¿Quieres aprender algo rápido y no tienes tiempo?
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    Clases personalizadas y recursos educativos diseñados para que aprendas de forma eficiente.
                    Matemática, inglés, informática y más.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-500/50 hover:border-blue-500 text-blue-600 hover:bg-blue-50"
                  >
                    <Link href="/servicios/educacion">
                      Explorar recursos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Problema 3 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all hover-scale">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-green-100 p-3 flex-shrink-0">
                  <PenTool className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">¿No tienes recursos y quieres emprender?</h3>
                  <p className="text-zinc-600 mb-4">
                    Accede a nuestra biblioteca de recursos gratuitos, cursos, plantillas y herramientas. Todo lo que
                    necesitas sin costo inicial.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-500/50 hover:border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <Link href="/recursos">
                      Ver recursos gratuitos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Problema 4 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all hover-scale">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-purple-100 p-3 flex-shrink-0">
                  <Laptop className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    ¿Tienes un emprendimiento y quieres escalarlo?
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    Optimización de procesos, estrategias de marketing avanzadas, tecnología y herramientas para llevar
                    tu negocio al siguiente nivel.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-500/50 hover:border-purple-500 text-purple-600 hover:bg-purple-50"
                  >
                    <Link href="/servicios/marketing">
                      Escalar mi negocio <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Problema 5 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all hover-scale">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-red-100 p-3 flex-shrink-0">
                  <Wrench className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    ¿Te sientes abrumado por los desafíos tecnológicos?
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    Soluciones tecnológicas adaptadas a tus necesidades. Te ayudamos a superar cualquier obstáculo
                    digital para que puedas enfocarte en lo que realmente importa.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-red-500/50 hover:border-red-500 text-red-600 hover:bg-red-50"
                  >
                    <Link href="/servicios/tecnologia">
                      Soluciones tecnológicas <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Problema 6 */}
            <div className="flex flex-col p-6 bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all hover-scale">
              <div className="flex items-start gap-4 mb-4">
                <div className="rounded-full bg-yellow-100 p-3 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">¿Buscas trabajo y no sabes cómo destacarte?</h3>
                  <p className="text-zinc-600 mb-4">
                    CV profesional, preparación para entrevistas, optimización de LinkedIn y estrategias para conseguir
                    el trabajo que quieres.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-yellow-500/50 hover:border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  >
                    <Link href="/servicios/empleo">
                      Mejorar mi perfil <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Central */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿No encuentras tu situación específica?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Cada persona y cada proyecto es único. Contáctanos y te ayudamos a encontrar la solución perfecta para
                tu caso particular.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
                <Link href="/contacto">
                  Hablar con un especialista <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-indigo-700">
                Nuestros Servicios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-700">
                Todo lo que necesitas en un solo lugar
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos soluciones integrales para individuos y empresas en diversas áreas
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              icon={<PenTool className="h-10 w-10 text-blue-600" />}
              title="Marketing y Redes"
              description="Branding, gestión de redes sociales y estrategias para mejorar tu huella digital."
              link="/servicios/marketing"
            />
            <ServiceCard
              icon={<BookOpen className="h-10 w-10 text-blue-600" />}
              title="Educación"
              description="Clases personalizadas de matemática, inglés, informática y más para estudiantes."
              link="/servicios/educacion"
            />
            <ServiceCard
              icon={<Wrench className="h-10 w-10 text-blue-600" />}
              title="Tecnología"
              description="Reparación de PC, formateo, limpieza y optimización para gaming o trabajo."
              link="/servicios/tecnologia"
            />
            <ServiceCard
              icon={<Laptop className="h-10 w-10 text-blue-600" />}
              title="Desarrollo"
              description="Creación de sitios web, portfolios y tiendas online para emprendedores."
              link="/servicios/desarrollo"
            />
            <ServiceCard
              icon={<Briefcase className="h-10 w-10 text-blue-600" />}
              title="Empleo y Carrera"
              description="Armado de CV, preparación para entrevistas y optimización de LinkedIn."
              link="/servicios/empleo"
            />
            <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md transition-all">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <ArrowRight className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">¿Necesitas algo más?</h3>
              <p className="text-zinc-500 text-center mb-4">
                Contáctanos para soluciones personalizadas a tus necesidades específicas.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-indigo-700">
                Soluciones integrales para todas tus necesidades
              </h2>
              <p className="text-zinc-500 md:text-xl/relaxed">
                En Conecta Tu Mundo nos destacamos por ofrecer servicios de alta calidad adaptados a tus necesidades
                específicas.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Atención personalizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Profesionales especializados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Soluciones a medida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Precios accesibles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-zinc-700">Resultados garantizados</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Link href="/nosotros">Conoce más sobre nosotros</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Nuestro equipo"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para impulsar tu proyecto?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 border-0"
              >
                <Link href="/contacto">
                  Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
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
