import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiciosPage() {
  return (
    <div className="pt-16 flex flex-col min-h-screen">
      {/* Hero Section con blur */}
      <section className="w-full py-12 md:py-24 gradient-bg-blue">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Nuestros Servicios</h1>
              <p className="max-w-[700px] text-purple-100 md:text-xl/relaxed">
                Soluciones integrales para individuos y empresas en diversas áreas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing y Redes */}
      <section id="marketing" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-xs">
                Marketing y Redes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Impulsa tu presencia digital
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">
                Desarrollamos estrategias de marketing digital personalizadas para aumentar la visibilidad de tu marca y
                conectar con la audiencia esperada.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Branding:</span>
                    <span className="text-gray-700"> Diseño de logo, identidad visual y estrategia de marca.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Gestión de redes sociales:</span>
                    <span className="text-gray-700">
                      {" "}
                      programación de contenido, automatización y análisis de métricas.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Publicidad digital:</span>
                    <span className="text-gray-700"> Campañas en Google Ads, Facebook Ads e Instagram Ads.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Email marketing:</span>
                    <span className="text-gray-700"> Diseño de newsletters y estrategias de fidelización.</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white backdrop-blur-sm">
                  <Link href="https://api.whatsapp.com/send/?phone=59898104211&text&type=phone_number&app_absent=0" target="_blank">Solicitar información</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl backdrop-blur-xs">
                <img
src="https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"                  alt="Marketing Digital"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educación */}
      <section id="educacion" className="w-full py-12 md:py-24 bg-purple-50/60 backdrop-blur-xs">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl backdrop-blur-xs">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Educación"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-xs">Educación</div>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
  Aprendizaje personalizado
</h2>
<p className="text-gray-600 md:text-xl/relaxed">
  Ofrecemos clases particulares centradas en el desarrollo de habilidades de estudio adaptadas a cada estudiante.
</p>
<ul className="grid gap-3">
  <li className="flex items-start gap-2">
    <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
    <div>
      <span className="font-bold text-gray-900">Enfoque integral:</span>
      <span className="text-gray-700"> Técnicas y estrategias para estudiar cualquier materia de secundaria.</span>
    </div>
  </li>
  <li className="flex items-start gap-2">
    <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
    <div>
      <span className="font-bold text-gray-900">Organización:</span>
      <span className="text-gray-700"> Cómo planificar tiempos, priorizar tareas y mantener el enfoque.</span>
    </div>
  </li>
  <li className="flex items-start gap-2">
    <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
    <div>
      <span className="font-bold text-gray-900">Comprensión:</span>
      <span className="text-gray-700"> Lectura activa, toma de apuntes y elaboración de resúmenes efectivos.</span>
    </div>
  </li>
  <li className="flex items-start gap-2">
    <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
    <div>
      <span className="font-bold text-gray-900">Práctica:</span>
      <span className="text-gray-700"> Métodos de repaso, memorización y resolución de ejercicios.</span>
    </div>
  </li>
</ul>

             
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section id="tecnologia" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-xs">Tecnología</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Soluciones técnicas a tu medida
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">
                Mantenemos tus equipos funcionando de manera óptima con nuestros servicios de soporte técnico.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Reparación de PC:</span>
                    <span className="text-gray-700"> Diagnóstico y solución de problemas de hardware y software.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Formateo y reinstalación:</span>
                    <span className="text-gray-700"> Limpieza completa del sistema y configuración personalizada.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Optimización:</span>
                    <span className="text-gray-700"> Mejora del rendimiento para gaming o trabajo profesional.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Instalación de software:</span>
                    <span className="text-gray-700"> Programas específicos según tus necesidades.</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
              
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl backdrop-blur-xs">
                <img
                  src="https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Soporte Técnico"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desarrollo */}
      <section id="desarrollo" className="w-full py-12 md:py-24 bg-purple-50/60 backdrop-blur-xs">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl backdrop-blur-xs">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681702277226-9c8c96573760?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Desarrollo Web"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-xs">Desarrollo</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Tu presencia digital profesional
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">
                Creamos sitios web y aplicaciones a medida que representan tu marca y cumplen tus objetivos.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Sitios web:</span>
                    <span className="text-gray-700"> Diseño y desarrollo de páginas web responsivas y modernas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Tiendas online:</span>
                    <span className="text-gray-700"> E-commerce con pasarelas de pago y gestión de inventario.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Portfolios:</span>
                    <span className="text-gray-700"> Showcases profesionales para artistas y profesionales.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Mantenimiento:</span>
                    <span className="text-gray-700"> Actualización y soporte continuo para tu sitio web.</span>
                  </div>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </section>

      {/* Empleo y Carrera */}
      <section id="empleo" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100/80 px-3 py-1 text-sm text-purple-700 backdrop-blur-xs">
                Empleo y Carrera
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Impulsa tu carrera profesional
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">
                Te ayudamos a destacar en el mercado laboral con herramientas y estrategias efectivas.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Armado de CV:</span>
                    <span className="text-gray-700"> Diseño profesional y redacción efectiva de currículum.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">LinkedIn:</span>
                    <span className="text-gray-700"> Optimización de perfil y estrategia de networking.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Entrevistas:</span>
                    <span className="text-gray-700"> Preparación y simulación de entrevistas laborales.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Asesoría laboral:</span>
                    <span className="text-gray-700">
                      {" "}
                      Orientación para la búsqueda de empleo y desarrollo profesional.
                    </span>
                  </div>
                </li>
              </ul>
              
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl backdrop-blur-xs">
                <img
                  src="https://images.unsplash.com/photo-1614213951697-a45781262acf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Empleo y Carrera"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA con blur */}
      <section className="w-full py-12 md:py-24 gradient-bg-blue ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">¿Listo para comenzar?</h2>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-violet-400 hover:bg-violet-500 text-white py-2 px-4 rounded">
                <Link href="https://api.whatsapp.com/send/?phone=59898104211&text&type=phone_number&app_absent=0" target="_blank">
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