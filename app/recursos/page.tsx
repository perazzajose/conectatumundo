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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ResourceCard from "@/components/resource-card"

export default function RecursosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de búsqueda
  }

  return (
    <div className="flex flex-col min-h-screen">
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
                Todos nuestros recursos son verificados y escaneados en <a href="https://www.virustotal.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">www.virustotal.com</a> para garantizar tu seguridad. Solo compartimos

                  enlaces de fuentes confiables.
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
                    <ResourceCard
                      title="Curso de Desarrollo Web de 'CodigoFacilito' "
                      description="Aprende desarrollo web. Recurso gratuito compartido por la comunidad."
                      category="Cursos"
                      size="0 MB"
                      platform="Google Drive"
                      downloadUrl="https://drive.google.com/drive/folders/119UfMSrcpw1OIld3nestpb73BxxlwPrD"
                      icon={<BookOpen className="h-8 w-8 text-blue-400" />}
                    />
                  <ResourceCard
  title=" Tutorial de Fotografía"
  description="Aprende los fundamentos de la fotografía movil. Ideal para turistas."
  category="Tutoriales"
  size="0 MB"
  platform="Google Drive"
  downloadUrl="https://drive.google.com/drive/u/0/folders/1BAvyrc40XzhYo1o0pi7IcrC4SseU_dGV?fbclid=IwAR0Qhf9tseLV4Rvgp5hFWjt3xasqFRDml-2iUTrb-hFyZuRGJ7XEGxH-ybc"
  icon={<FileText className="h-8 w-8 text-green-400" />}
/>
                    <ResourceCard
                      title="+600 Libros sobre Emprendimientos"
                      description="Compartido por la comunidad"
                      category="E-books"
                      size="0 MB"
                      platform="Enlaces directos"
                      downloadUrl="https://drive.google.com/drive/folders/1spBb8lkQibkedyH19s95IA5wLQKuSJEy"
                      icon={<FileText className="h-8 w-8 text-orange-400" />}
                    />
                    <ResourceCard
                      title="Curso de Inglés B1 - B2"
                      description="Inglés Intermedio con este curso gratuito compartido en X.com."
                      category="Cursos"
                      size="0 MB"
                      platform="Google Drive"
                      downloadUrl="https://drive.google.com/drive/u/0/folders/1-01_4gn3aLDX-1IYxcVi3bJ5NuMFTpWM?fbclid=IwAR1V5iNhfkKIvxZ1DGFiE1vYyt2bScKrZOAy5QN47Ob6td7GFOWeyjAJxRE"
                      icon={<BookOpen className="h-8 w-8 text-blue-400" />}
                    />
                 {/* 
<ResourceCard
  title="[EJEMPLO] Plantillas de CV"
  description="Colección de plantillas gratuitas para crear tu currículum profesional."
  category="Plantillas"
  size="25 MB"
  platform="Google Drive"
  downloadUrl="#"
  icon={<FileText className="h-8 w-8 text-purple-400" />} 
/>
*/}
                    <ResourceCard
                      title="Excel, Powerpoint, Word"
                      description="Aprende a usar el paquete office desde lo básico hasta funciones avanzadas. Recurso gratuito."
                      category="Tutoriales"
                      size="0 MB"
                      platform="Google Drive"
                      downloadUrl="https://drive.google.com/drive/folders/15eup-30YZD-aeMVJTnhqd4VqU8atgT0L"
                      icon={<FileText className="h-8 w-8 text-green-400" />}
                    />
                    <ResourceCard
                      title="Recursos C y C++ "
                      description="Recursos gratuitos para aprender C y C++ desde cero. Compartido."
                      category="E-books"
                      size="0 MB"
                      platform="Enlaces directos"
                      downloadUrl="https://drive.google.com/drive/folders/1VOxHDWiNZZAF4JXYbog3yKQwMISJ8Rfv"
                      icon={<FileText className="h-8 w-8 text-orange-400" />}
                    />
                    <ResourceCard
                      title="Diseño"
                      description="Aprende los fundamentos del diseño con estos e-books."
                      category="E-Books"
                      size="0 GB"
                      platform="Google Drive"
                      downloadUrl="https://drive.google.com/drive/folders/1kxxvYom0Iye3CZ7RyYqCna6lvmzfrC1M"
                      icon={<BookOpen className="h-8 w-8 text-blue-400" />}
                    />
                    <ResourceCard
                      title=" Plantillas de Excel"
                      description="Control de gastos, planificación, TODO!"
                      category="Plantillas"
                      size="0 MB"
                      platform="Google Drive"
                      downloadUrl="https://drive.google.com/drive/u/0/folders/1CGRxpPpZPOJ1uqjRg6eodb-o2fX2P1o2?fbclid=IwAR06bhcQcFPtENFBtpORoVIrMuwY58lq47QQh8Dj9GkCxlYtfcBQTXFLMHE"
                      icon={<FileText className="h-8 w-8 text-purple-400" />}
                    />
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
                <Link href="/contacto">Compartir recursos</Link>
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
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-yellow-500  border-0"
              >
                <Link href="/contacto">
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
