"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, Search, Filter, Star, ArrowRight, Palette, Globe, MessageSquare, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

// Importar datos y tipos
import emprendimientosDataFile from "./emprendimientos-data.json"
import type { Emprendimiento, EmprendimientosDataFile } from "./types"
import { processEmprendimientosData } from "./utils"

export default function EmprendimientosPage() {
  // Tipar el archivo JSON importado
  const data = emprendimientosDataFile as EmprendimientosDataFile

  // Procesar los datos del JSON para convertir iconos de string a componentes React
  const emprendimientos = processEmprendimientosData(data.emprendimientos)
  const categorias = data.categorias

  const [searchQuery, setSearchQuery] = useState("")
  const [categoriaActiva, setCategoriaActiva] = useState("Todas")
  const [emprendimientoSeleccionado, setEmprendimientoSeleccionado] = useState<Emprendimiento | null>(null)
  const [imagenError, setImagenError] = useState<Record<string, boolean>>({})

  // Filtrar emprendimientos según búsqueda y categoría
  const emprendimientosFiltrados = emprendimientos.filter((emp: Emprendimiento) => {
    const matchesSearch =
      emp.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.categoria.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategoria = categoriaActiva === "Todas" || emp.categoria === categoriaActiva

    return matchesSearch && matchesCategoria
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // La búsqueda ya se aplica en tiempo real con el estado
  }

  // Función para manejar errores de carga de imágenes
  const handleImageError = (imageUrl: string) => {
    setImagenError((prev) => ({
      ...prev,
      [imageUrl]: true,
    }))
  }

  // Función para obtener una URL de imagen segura (con fallback a placeholder)
  const getSafeImageUrl = (imageUrl: string, fallbackText?: string) => {
    if (imagenError[imageUrl]) {
      // Si hubo un error cargando esta imagen, usar un placeholder
      const width = 400
      const height = 300
      const text = fallbackText || "Imagen no disponible"
      return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
    }
    return imageUrl
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Briefcase className="h-12 w-12 text-orange-400" />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Emprendimientos Destacados
                </h1>
              </div>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Conoce los proyectos con los que colaboramos y cómo les ayudamos a crecer y destacarse en el mercado
                digital.
              </p>
            </div>
            <form onSubmit={handleSearch} className="w-full max-w-md flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar emprendimientos..."
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

      {/* Filtros y Emprendimientos */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Filtros por categoría */}
          <div className="mb-8">
            <Tabs defaultValue="Todas" value={categoriaActiva} onValueChange={setCategoriaActiva} className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList className="bg-card/50">
                  {categorias.map((categoria: string) => (
                    <TabsTrigger key={categoria} value={categoria}>
                      {categoria}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Mostrando {emprendimientosFiltrados.length} emprendimientos
                  </span>
                </div>
              </div>
            </Tabs>
          </div>

          {/* Emprendimientos destacados */}
          {categoriaActiva === "Todas" && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-blue-700">Emprendimientos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emprendimientos
                  .filter((emp: Emprendimiento) => emp.destacado)
                  .map((emprendimiento: Emprendimiento) => (
                    <Card
                      key={emprendimiento.id}
                      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
                      onClick={() => setEmprendimientoSeleccionado(emprendimiento)}
                    >
                      <div className="relative h-48">
                        <Image
                          src={getSafeImageUrl(emprendimiento.imagen, emprendimiento.nombre) || "/placeholder.svg"}
                          alt={emprendimiento.nombre}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(emprendimiento.imagen)}
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-orange-500 text-white">Destacado</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-blue-100 p-2">{emprendimiento.icono}</div>
                            <div>
                              <CardTitle>{emprendimiento.nombre}</CardTitle>
                              <CardDescription className="text-sm">{emprendimiento.categoria}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {emprendimiento.valoracion}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-2">{emprendimiento.descripcion}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {emprendimiento.servicios.map((servicio: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {servicio}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button
                          variant="ghost"
                          className="w-full justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          Ver detalles
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {/* Todos los emprendimientos */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              {categoriaActiva === "Todas" ? "Todos los Emprendimientos" : `Emprendimientos: ${categoriaActiva}`}
            </h2>

            {emprendimientosFiltrados.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No se encontraron emprendimientos con los criterios de búsqueda.
                </p>
                <p className="mt-2">Intenta con otros términos o elimina los filtros.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {emprendimientosFiltrados.map((emprendimiento: Emprendimiento) => (
                  <Card
                    key={emprendimiento.id}
                    className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
                    onClick={() => setEmprendimientoSeleccionado(emprendimiento)}
                  >
                    <div className="relative h-40">
                      <Image
                        src={getSafeImageUrl(emprendimiento.imagen, emprendimiento.nombre) || "/placeholder.svg"}
                        alt={emprendimiento.nombre}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(emprendimiento.imagen)}
                      />
                      {emprendimiento.destacado && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-orange-500 text-white">Destacado</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <span className="rounded-full bg-blue-100 p-1">{emprendimiento.icono}</span>
                            {emprendimiento.nombre}
                          </CardTitle>
                          <CardDescription className="text-sm">{emprendimiento.categoria}</CardDescription>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {emprendimiento.valoracion}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2">{emprendimiento.descripcion}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {emprendimiento.servicios.slice(0, 2).map((servicio: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {servicio}
                          </Badge>
                        ))}
                        {emprendimiento.servicios.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{emprendimiento.servicios.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        Ver detalles
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cómo Colaboramos */}
      <section className="w-full py-12 md:py-24 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-blue-700">Cómo Colaboramos</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              Ofrecemos soluciones integrales para emprendedores que buscan destacarse en el mercado digital y hacer
              crecer su negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <div className="rounded-full bg-blue-100 p-3 w-fit">
                  <Palette className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Identidad y Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Diseño de logo e identidad visual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Estrategia de marca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Materiales de comunicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Fotografía profesional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="rounded-full bg-blue-100 p-3 w-fit">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Presencia Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Desarrollo web y e-commerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Optimización para buscadores (SEO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Integración de pasarelas de pago</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Automatización de procesos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <div className="rounded-full bg-blue-100 p-3 w-fit">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Marketing y Comunicación</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Gestión de redes sociales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Estrategia de contenidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Campañas publicitarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Email marketing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800">
              <Link href="/contacto">
                ¿Quieres impulsar tu emprendimiento? <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
                ¿Listo para llevar tu emprendimiento al siguiente nivel?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos para una consultoría gratuita y descubre cómo podemos ayudarte a crecer en el mundo digital.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 border-0"
              >
                <Link href="/contacto">
                  Solicitar consultoría gratuita <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/servicios">Ver nuestros servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diálogo de Detalle de Emprendimiento */}
      <Dialog open={!!emprendimientoSeleccionado} onOpenChange={() => setEmprendimientoSeleccionado(null)}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
          {emprendimientoSeleccionado && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2">{emprendimientoSeleccionado.icono}</div>
                  <DialogTitle className="text-2xl">{emprendimientoSeleccionado.nombre}</DialogTitle>
                </div>
                <DialogDescription className="flex items-center gap-2">
                  <Badge>{emprendimientoSeleccionado.categoria}</Badge>
                  <span className="text-muted-foreground">{emprendimientoSeleccionado.ubicacion}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={
                      getSafeImageUrl(emprendimientoSeleccionado.imagen, emprendimientoSeleccionado.nombre) ||
                      "/placeholder.svg"
                    }
                    alt={emprendimientoSeleccionado.nombre}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-md mb-4"
                    onError={() => handleImageError(emprendimientoSeleccionado.imagen)}
                  />
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Sobre el emprendimiento</h3>
                      <p className="text-muted-foreground">{emprendimientoSeleccionado.detalles.historia}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Servicios implementados</h3>
                      <div className="flex flex-wrap gap-2">
                        {emprendimientoSeleccionado.servicios.map((servicio: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {servicio}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {emprendimientoSeleccionado.sitioWeb && (
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a
                            href={emprendimientoSeleccionado.sitioWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Globe className="h-4 w-4" /> Sitio web
                          </a>
                        </Button>
                      )}
                      {emprendimientoSeleccionado.instagram && (
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a
                            href={`https://instagram.com/${emprendimientoSeleccionado.instagram.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Instagram className="h-4 w-4" /> {emprendimientoSeleccionado.instagram}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">El desafío</h3>
                    <p className="text-muted-foreground">{emprendimientoSeleccionado.detalles.desafio}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nuestra solución</h3>
                    <p className="text-muted-foreground">{emprendimientoSeleccionado.detalles.solucion}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Resultados</h3>
                    <ul className="space-y-2">
                      {emprendimientoSeleccionado.detalles.resultados.map((resultado: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{resultado}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {emprendimientoSeleccionado.detalles.testimonio && (
                    <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                      <h3 className="text-lg font-semibold mb-2 text-blue-700">Testimonio</h3>
                      <blockquote className="border-l-4 border-blue-300 pl-4 italic text-muted-foreground">
                        "{emprendimientoSeleccionado.detalles.testimonio.texto}"
                      </blockquote>
                      <div className="mt-2 text-sm">
                        <p className="font-medium">{emprendimientoSeleccionado.detalles.testimonio.autor}</p>
                        <p className="text-muted-foreground">{emprendimientoSeleccionado.detalles.testimonio.cargo}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {emprendimientoSeleccionado.detalles.galeria && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Galería</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {emprendimientoSeleccionado.detalles.galeria.map((imagen: string, index: number) => (
                      <Image
                        key={index}
                        src={getSafeImageUrl(
                          imagen,
                          `${emprendimientoSeleccionado.nombre || "/placeholder.svg"} - Imagen ${index + 1}`,
                        )}
                        alt={`${emprendimientoSeleccionado.nombre} - Imagen ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-32 object-cover rounded-md"
                        onError={() => handleImageError(imagen)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <DialogFooter className="flex justify-between items-center">
                <Button variant="outline" onClick={() => setEmprendimientoSeleccionado(null)} className="gap-2">
                  Cerrar
                </Button>
                <Button asChild className="gap-2 bg-gradient-to-r from-blue-600 to-blue-800">
                  <Link href="/contacto">
                    <MessageSquare className="h-4 w-4" /> Contactar para un proyecto similar
                  </Link>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
