"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowDown,
  BookOpen,
  FileText,
  Filter,
  HardDrive,
  Search,
  ShieldCheck,
  Tag,
  ArrowRight,
  AlertTriangle,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ResourceCard from "@/components/resource-card"

// Importar datos de recursos
import recursosData from "./recursos-data.json"

// Mapeo de iconos
const iconMap = {
  BookOpen: BookOpen,
  FileText: FileText,
}

export default function RecursosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Usar datos del JSON
  const recursos = recursosData.recursos
  const formaciones = recursosData.formacionesUruguay

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de búsqueda
  }

  // Función para obtener el componente de icono
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? (
      <IconComponent className="h-8 w-8 text-blue-400" />
    ) : (
      <BookOpen className="h-8 w-8 text-blue-400" />
    )
  }

  // Filtrar recursos por categoría
  const getRecursosPorCategoria = (categoria: string) => {
    if (categoria === "todos") return recursos
    return recursos.filter((recurso) => recurso.category === categoria)
  }

  return (
    <div className="pt-16 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 gradient-bg-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Centro de Recursos</h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Accede a cursos gratuitos, materiales educativos y recursos compartidos por nuestra comunidad
              </p>
            </div>
            <form onSubmit={handleSearch} className="w-full max-w-md flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar recursos..."
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

      {/* Aviso Legal */}
      <section className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <Alert className="border-orange-500/50 bg-orange-500/10">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <AlertTitle className="text-orange-500">Aviso importante</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Todos los recursos compartidos aquí son para fines educativos y de uso personal. Los enlaces provienen de
              fuentes públicas como X.com (Twitter) y otros sitios de acceso libre. No alojamos ningún contenido con
              derechos de autor en nuestros servidores.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Recursos */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/4 space-y-6">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-blue-400" /> Filtros
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <Tag className="h-4 w-4 text-muted-foreground" /> Categorías
                    </h4>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Todos
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Cursos
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Tutoriales
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        E-books
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Plantillas
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                      <HardDrive className="h-4 w-4 text-muted-foreground" /> Plataforma
                    </h4>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Google Drive
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Enlaces directos
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        YouTube
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" /> Seguridad
                </h3>
                <p className="text-sm text-muted-foreground">
                  Todos nuestros recursos son verificados y escaneados en{" "}
                  <a
                    href="https://www.virustotal.com"
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.virustotal.com
                  </a>{" "}
                  para garantizar tu seguridad. Solo compartimos enlaces de fuentes confiables.
                </p>
              </div>
            </div>
            <div className="md:w-3/4">
              <Tabs defaultValue="todos" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <TabsList className="bg-card/50">
                    <TabsTrigger value="todos">Todos</TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Ordenar por:</span>
                    <select className="bg-card border border-border rounded-md text-sm py-1 px-2">
                      <option>Más recientes</option>
                      <option>Más populares</option>
                      <option>Tamaño (menor a mayor)</option>
                      <option>Tamaño (mayor a menor)</option>
                    </select>
                  </div>
                </div>

                <TabsContent value="todos" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recursos.map((recurso) => (
                      <ResourceCard
                        key={recurso.id}
                        title={recurso.title}
                        description={recurso.description}
                        category={recurso.category}
                        size={recurso.size}
                        platform={recurso.platform}
                        downloadUrl={recurso.downloadUrl}
                        icon={getIcon(recurso.icon)}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="gap-2">
                  Cargar más recursos <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formaciones Gratuitas en Uruguay */}
      <section className="w-full py-12 md:py-16 bg-card/30 border-t border-b border-border/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Oportunidades Educativas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-700 dark:text-blue-400">
                Formaciones Gratuitas en Uruguay
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre programas de formación gratuitos que pueden impulsar tu carrera profesional
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formaciones.map((formacion) => (
              <div
                key={formacion.id}
                className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border"
              >
                <div className="h-40 mb-4 rounded-md overflow-hidden">
                  <img
                    src={formacion.image || "/placeholder.svg"}
                    alt={formacion.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">{formacion.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{formacion.description}</p>
                <div className="space-y-2 mb-4">
                  {formacion.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-1 mt-0.5">
                        <Check className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={formacion.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Estas son solo algunas de las opciones de formación gratuita disponibles en Uruguay. Contáctanos para
              recibir asesoramiento personalizado sobre cuál es la mejor opción para ti.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-violet-400 hover:bg-violet-500 text-white py-2 px-4 rounded"
            >
              Solicitar asesoramiento
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="w-full py-12 bg-card/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Sobre nuestros recursos</h3>
              <p className="text-muted-foreground">
                Todos los recursos compartidos en esta sección son recopilados de fuentes públicas como X.com (Twitter),
                foros educativos y sitios de compartición gratuita. Verificamos cada enlace para asegurar que sea seguro
                y esté disponible para uso educativo.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Uso responsable</h3>
              <p className="text-muted-foreground">
                Te invitamos a hacer un uso responsable de estos recursos. Están destinados exclusivamente para fines
                educativos y de aprendizaje personal. Si eres propietario de algún contenido y deseas que sea removido,
                contáctanos inmediatamente.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Comparte recursos</h3>
              <p className="text-muted-foreground">
                ¿Tienes recursos educativos gratuitos que quieras compartir con nuestra comunidad? Envíanos los enlaces
                a través de nuestro formulario de contacto y los revisaremos para incluirlos en nuestra biblioteca.
              </p>
              <Button asChild className="mt-4 w-full" variant="outline">
                <Link
                  href="https://api.whatsapp.com/send/?phone=59898104211&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  Compartir recursos
                </Link>
              </Button>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿No encuentras lo que buscas?</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contáctanos y te ayudaremos a encontrar recursos educativos gratuitos para tus necesidades específicas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-violet-400 hover:bg-violet-500 text-white py-2 px-4 rounded">
                <Link
                  href="https://api.whatsapp.com/send/?phone=59898104211&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  Solicitar recursos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
