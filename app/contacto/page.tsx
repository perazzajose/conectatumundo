"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setFormSubmitted(true)
  }

  return (
    <div className="pt-16 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24  gradient-bg-blue">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
              <p className="max-w-[700px] text-zinc-200 md:text-xl/relaxed">
                Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Información de Contacto */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-black-700">Información de Contacto</h2>
                <p className="text-zinc-500 md:text-xl/relaxed">
                  Puedes contactarnos a través de los siguientes medios o completando el formulario.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 p-2">
                    <MapPin className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Dirección</h3>
                    <p className="text-zinc-500">Salinas, Canelones 🇺🇾</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 p-2">
                    <Phone className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Teléfono</h3>
                    <p className="text-zinc-500">09X XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-purple-100 p-2">
                    <Mail className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Email</h3>
                    <p className="text-zinc-500">conectatumundo01@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-purple-700">Horario de Atención</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-semibold text-zinc-900">Lunes a Lunes</p>
                    <p className="text-zinc-500">24/7</p>
                  </div>
                 
                </div>
              </div>

              {/* Mapa (placeholder) */}
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/11/05/28/contact-6929779_640.jpg"
                  alt="Mapa de ubicación"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="space-y-6">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-green-700">¡Mensaje Enviado!</h3>
                  <p className="text-center text-zinc-700">
                    Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
                  </p>
                  <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                    <Link href="/">Volver al inicio</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter text-black-700">Envíanos un mensaje</h2>
                    <p className="text-zinc-500">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input id="apellido" placeholder="Tu apellido" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="Tu número de teléfono" />
                    </div>

                    <div className="space-y-2">
                      <Label>Área de interés</Label>
                      <RadioGroup defaultValue="marketing">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="marketing" id="marketing" />
                            <Label htmlFor="marketing">Marketing y Redes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="educacion" id="educacion" />
                            <Label htmlFor="educacion">Educación</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="tecnologia" id="tecnologia" />
                            <Label htmlFor="tecnologia">Tecnología</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="desarrollo" id="desarrollo" />
                            <Label htmlFor="desarrollo">Desarrollo</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="empleo" id="empleo" />
                            <Label htmlFor="empleo">Empleo y Carrera</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="otro" id="otro" />
                            <Label htmlFor="otro">Otro</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="informacion">Solicitud de información</SelectItem>
                          <SelectItem value="presupuesto">Solicitud de presupuesto</SelectItem>
                          <SelectItem value="servicio">Contratación de servicio</SelectItem>
                          <SelectItem value="consulta">Consulta general</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      Enviar mensaje <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Preguntas Frecuentes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black-700">Respuestas a tus dudas</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {/* Pregunta 1 */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black-700">¿Cuáles son los plazos de entrega para un sitio web?</h3>
              <p className="text-zinc-500">
                Los plazos varían según la complejidad del proyecto, pero generalmente un sitio web básico puede estar
                listo en 2-3 semanas, mientras que proyectos más complejos pueden tomar 1-2 meses.
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black-700">¿Cómo se desarrollan las clases particulares?</h3>
              <p className="text-zinc-500">
                Las clases se adaptan a las necesidades del estudiante. Pueden ser presenciales o virtuales, con una
                duración de 1-2 horas, y se establece un plan de estudio personalizado según los objetivos académicos.
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black-700">
                ¿Qué incluye el servicio de gestión de redes sociales?
              </h3>
              <p className="text-zinc-500">
                Incluye la creación de contenido, programación de publicaciones, interacción con la audiencia, análisis
                de métricas y estrategias para aumentar el engagement y alcance de tus perfiles.
              </p>
            </div>

            {/* Pregunta 4 */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black-700">¿Ofrecen garantía en los servicios técnicos?</h3>
              <p className="text-zinc-500">
                Sí, todos nuestros servicios técnicos tienen una garantía de 30 días. Si el problema persiste o aparece
                nuevamente durante ese período, lo solucionaremos sin costo adicional.
              </p>
            </div>

            {/* Pregunta 5 */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black-700">
                ¿Cuál es el proceso para la creación de un CV profesional?
              </h3>
              <p className="text-zinc-500">
                El proceso incluye una entrevista inicial para conocer tu experiencia y objetivos, redacción del
                contenido, diseño del CV según estándares actuales, y revisiones hasta obtener la versión final.
              </p>
            </div>

            {/* Pregunta 6 */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black-700">¿Trabajan con clientes fuera de la ciudad?</h3>
              <p className="text-zinc-500">
                Sí, ofrecemos servicios remotos para clientes de cualquier ubicación. Las reuniones pueden realizarse
                por videollamada y los servicios digitales se entregan online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
