"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  MapPin,
  MessageCircle,
  Filter,
  Plus,
  Star,
  BookOpen,
  Code,
  Briefcase,
  PenTool,
  Laptop,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Importar datos de tutores
import tutoresData from "./tutores-data.json"

// Mapeo de iconos
const iconMap = {
  Code: Code,
  PenTool: PenTool,
  BookOpen: BookOpen,
  Laptop: Laptop,
  Briefcase: Briefcase,
}

export default function ComunidadPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [areaFilter, setAreaFilter] = useState("todas")
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Usar datos del JSON
  const tutores = tutoresData.tutores

  // Filtrar tutores según búsqueda y filtro de área
  const tutoresFiltrados = tutores.filter((tutor) => {
    const matchesSearch =
      tutor.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.especialidad.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.ubicacion.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesArea = areaFilter === "todas" || tutor.area === areaFilter

    return matchesSearch && matchesArea
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // La búsqueda ya se aplica en tiempo real con el estado
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Aquí iría la lógica para enviar los datos del formulario
  }

  // Función para obtener el componente de icono
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? <IconComponent className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comunidad de Tutores</h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Conecta con tutores especializados o comparte tus conocimientos convirtiéndote en tutor
              </p>
            </div>
            <form onSubmit={handleSearch} className="w-full max-w-md flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por nombre, especialidad o ubicación..."
                  className="w-full bg-white/10 backdrop-blur-sm border-white/20 pl-8 text-white placeholder:text-blue-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-white text-blue-700 hover:bg-white/90">
                Buscar
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Filtros y Tutores */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-blue-500" />
              <Select value={areaFilter} onValueChange={setAreaFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas las áreas</SelectItem>
                  <SelectItem value="Programación">Programación</SelectItem>
                  <SelectItem value="Diseño">Diseño</SelectItem>
                  <SelectItem value="Educación">Educación</SelectItem>
                  <SelectItem value="Tecnología">Tecnología</SelectItem>
                  <SelectItem value="Empleo">Empleo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                  <Plus className="mr-2 h-4 w-4" /> Postularme como tutor
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">¡Solicitud enviada!</h2>
                    <p className="text-muted-foreground mb-4">
                      Gracias por postularte como tutor. Revisaremos tu solicitud y te contactaremos pronto.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Cerrar</Button>
                  </div>
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle>Postularme como tutor</DialogTitle>
                      <DialogDescription>
                        Completa el formulario para unirte a nuestra comunidad de tutores. Revisaremos tu solicitud y te
                        contactaremos.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitForm} className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
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
                        <Label htmlFor="ubicacion">Ubicación</Label>
                        <Input id="ubicacion" placeholder="Ciudad, Departamento" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area">Área de especialidad</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un área" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="programacion">Programación</SelectItem>
                            <SelectItem value="diseno">Diseño</SelectItem>
                            <SelectItem value="educacion">Educación</SelectItem>
                            <SelectItem value="tecnologia">Tecnología</SelectItem>
                            <SelectItem value="empleo">Empleo</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="especialidad">Especialidad específica</Label>
                        <Input id="especialidad" placeholder="Ej: Desarrollo Web, Matemáticas, etc." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="descripcion">Breve descripción de tu experiencia</Label>
                        <Textarea
                          id="descripcion"
                          placeholder="Cuéntanos sobre tu experiencia, formación y por qué quieres ser tutor..."
                          className="min-h-[100px]"
                          required
                        />
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
                          Enviar solicitud
                        </Button>
                      </DialogFooter>
                    </form>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {tutoresFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron tutores con los criterios de búsqueda.</p>
              <p className="mt-2">Intenta con otros términos o elimina los filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tutoresFiltrados.map((tutor) => (
                <Card key={tutor.id} className="hover:shadow-md transition-all hover-scale">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Avatar className="h-16 w-16 border-2 border-blue-500/20">
                        <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.nombre} />
                        <AvatarFallback>{tutor.nombre.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" /> {tutor.valoracion}
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-xl font-bold">{tutor.nombre}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        <span>{tutor.ubicacion}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1 font-normal">
                        {getIcon(tutor.icono)}
                        {tutor.area}
                      </Badge>
                      <Badge variant="secondary" className="font-normal">
                        {tutor.especialidad}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{tutor.descripcion}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full gap-2">
                      <Link href={`/contacto?tutor=${tutor.nombre}`}>
                        <MessageCircle className="h-4 w-4" /> Contactar
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Información */}
      <section className="w-full py-12 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-blue-400">¿Por qué unirte como tutor?</h3>
              <p className="text-muted-foreground mb-4">
                Comparte tus conocimientos, genera ingresos adicionales y ayuda a otros a alcanzar sus metas. Ser tutor
                te permite crear tu propio horario y trabajar desde cualquier lugar.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700 dark:text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm">Flexibilidad de horarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700 dark:text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm">Ingresos adicionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700 dark:text-blue-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm">Crecimiento profesional</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Cómo funciona</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro proceso es simple y está diseñado para conectar a tutores con estudiantes de manera eficiente,
                asegurando una experiencia positiva para ambas partes.
              </p>
              <ol className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5 h-6 w-6 flex items-center justify-center text-xs font-medium text-blue-700 dark:text-blue-400">
                    1
                  </div>
                  <span className="text-sm">Postúlate completando el formulario</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5 h-6 w-6 flex items-center justify-center text-xs font-medium text-blue-700 dark:text-blue-400">
                    2
                  </div>
                  <span className="text-sm">Revisamos tu perfil y te contactamos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5 h-6 w-6 flex items-center justify-center text-xs font-medium text-blue-700 dark:text-blue-400">
                    3
                  </div>
                  <span className="text-sm">Comienzas a recibir solicitudes de estudiantes</span>
                </li>
              </ol>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">¿Necesito alguna certificación para ser tutor?</h4>
                  <p className="text-sm text-muted-foreground">
                    No es obligatorio, pero valoramos la experiencia y conocimientos demostrables en tu área.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">¿Cómo se establecen las tarifas?</h4>
                  <p className="text-sm text-muted-foreground">
                    Tú defines tus propias tarifas según tu experiencia y el mercado.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">¿Puedo dar clases online?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, puedes elegir entre modalidad presencial, online o ambas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Listo para compartir tus conocimientos?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Únete a nuestra comunidad de tutores y ayuda a otros a alcanzar sus metas mientras generas ingresos
                adicionales.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 border-0"
                >
                  Postularme ahora
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">¡Solicitud enviada!</h2>
                    <p className="text-muted-foreground mb-4">
                      Gracias por postularte como tutor. Revisaremos tu solicitud y te contactaremos pronto.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Cerrar</Button>
                  </div>
                ) : (
                  <>
                    <DialogHeader>
                      <DialogTitle>Postularme como tutor</DialogTitle>
                      <DialogDescription>
                        Completa el formulario para unirte a nuestra comunidad de tutores. Revisaremos tu solicitud y te
                        contactaremos.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitForm} className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre-cta">Nombre</Label>
                          <Input id="nombre-cta" placeholder="Tu nombre" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apellido-cta">Apellido</Label>
                          <Input id="apellido-cta" placeholder="Tu apellido" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-cta">Email</Label>
                        <Input id="email-cta" type="email" placeholder="tu@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ubicacion-cta">Ubicación</Label>
                        <Input id="ubicacion-cta" placeholder="Ciudad, Departamento" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area-cta">Área de especialidad</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un área" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="programacion">Programación</SelectItem>
                            <SelectItem value="diseno">Diseño</SelectItem>
                            <SelectItem value="educacion">Educación</SelectItem>
                            <SelectItem value="tecnologia">Tecnología</SelectItem>
                            <SelectItem value="empleo">Empleo</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="especialidad-cta">Especialidad específica</Label>
                        <Input id="especialidad-cta" placeholder="Ej: Desarrollo Web, Matemáticas, etc." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="descripcion-cta">Breve descripción de tu experiencia</Label>
                        <Textarea
                          id="descripcion-cta"
                          placeholder="Cuéntanos sobre tu experiencia, formación y por qué quieres ser tutor..."
                          className="min-h-[100px]"
                          required
                        />
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
                          Enviar solicitud
                        </Button>
                      </DialogFooter>
                    </form>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  )
}
