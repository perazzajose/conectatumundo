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
        title="+200 Libros de Psicología"
        description="Colección completa de libros sobre psicología clínica, cognitiva y más."
        category="E-books"
        size="3.1 GB"
        platform="Google Drive"
        downloadUrl="https://drive.google.com/drive/u/0/folders/1TUE-CSoztg46csXyQGIvfS5rXuBfk-ZM"
        icon={<BookOpen className="h-8 w-8 text-orange-400" />}
      />

      {/* Dirección Publicitaria */}
      <ResourceCard
        title="Dirección Publicitaria"
        description="Recursos avanzados sobre marketing digital y estrategias publicitarias."
        category="Cursos"
        size="1.5 GB"
        platform="Google Drive"
        downloadUrl="https://drive.google.com/drive/u/0/folders/1WDMtrPw8MmGGhxdw-j1BN9uUn_vGVeaC"
        icon={<FileText className="h-8 w-8 text-blue-400" />}
      />

      {/* Photoshop */}
      <ResourceCard
        title="Photoshop Profesional"
        description="Tutoriales completos desde básico hasta edición profesional."
        category="Tutoriales"
        size="4.7 GB"
        platform="Google Drive"
        downloadUrl="https://drive.google.com/drive/u/0/folders/1qLegJ8UGUuPPBIVqBSfoHTK1uxokZhGs"
        icon={<FileText className="h-8 w-8 text-green-400" />}
      />

      {/* Biblioteca de Medicina */}
      <ResourceCard
        title="Biblioteca de Medicina"
        description="Libros especializados en anatomía, farmacología y cirugía."
        category="E-books"
        size="2.8 GB"
        platform="Google Drive"
        downloadUrl="https://drive.google.com/drive/u/0/folders/1hdHqaxQNi8tm-Fk86fpsHFZennA8roKH"
        icon={<FileText className="h-8 w-8 text-purple-400" />}
      />

      {/* Tutoriales Muebles de Madera */}
      <ResourceCard
        title="Tutoriales Carpintería"
        description="Guías prácticas para construir muebles de madera paso a paso."
        category="Tutoriales"
        size="1.2 GB"
        platform="Google Drive"
        downloadUrl="https://drive.google.com/drive/folders/1H9FScgUSAxD-iVN5xLYO5mmOMUNVjXVz"
        icon={<FileText className="h-8 w-8 text-yellow-400" />}
      />

      {/* Ejemplo original (se mantiene) */}
      <ResourceCard
        title="Excel, Powerpoint, Word"
        description="Aprende a usar el paquete office desde lo básico hasta funciones avanzadas."
        category="Tutoriales"
        size="0 MB"
        platform="Google Drive"
        downloadUrl="https://drive.google.com/drive/folders/15eup-30YZD-aeMVJTnhqd4VqU8atgT0L"
        icon={<FileText className="h-8 w-8 text-green-400" />}
      />
   




   <ResourceCard
        title="Curso Profesional de Reparación de Laptops"
        description="Aprende diagnóstico, soldadura y reparación hardware de portátiles."
        category="Cursos"
        size="2.5 GB"
        platform="MediaFire"
        downloadUrl="https://www.mediafire.com/folder/gc0y1wtjeaien/Curso+Profesional+en+Reparacion+de+Laptops"
        icon={<FileText className="h-8 w-8 text-blue-400" />}
      />

      {/* Contabilidad para no Contadores */}
      <ResourceCard
        title="Curso Básico de Contabilidad"
        description="Fundamentos contables para emprendedores y profesionales no especializados."
        category="Cursos"
        size="1.8 GB"
        platform="MediaFire"
        downloadUrl="https://www.mediafire.com/folder/msr883s9bxbk7/Curso+Básico+de+Contabilidad+para+no+Contadores"
        icon={<FileText className="h-8 w-8 text-purple-400" />}
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
                <Link href="https://api.whatsapp.com/send/?phone=59898104211&text&type=phone_number&app_absent=0" target="_blank">Compartir recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {
  /* 
  =====================================================================
  SECCIÓN DE FORMACIONES GRATUITAS EN URUGUAY - COPIAR DESDE AQUÍ
  =====================================================================
*/
}

{
  /* Formaciones Gratuitas en Uruguay */
}
;<section className="w-full py-12 md:py-16 bg-card/30 border-t border-b border-border/50">
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
      {/* Jóvenes a Programar */}
      <div className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
        <div className="h-40 mb-4 rounded-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4l553Om1PuYAonK8R07n1KrU4jXo1gDONmw&s"
            alt="Jóvenes a Programar"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Jóvenes a Programar (Ceibal)</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          Programa de formación en desarrollo web y testing que busca capacitar a jóvenes uruguayos en tecnologías de la
          información.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Formación gratuita en programación y testing</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Para jóvenes entre 18 y 30 años</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Posibilidad de inserción laboral</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Convocatorias anuales</span>
          </div>
        </div>
        <div className="mt-auto">
          <a
            href="https://jovenesaprogramar.edu.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Más información
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
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* INEFOP - COURSERA */}
      <div className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
        <div className="h-40 mb-4 rounded-md overflow-hidden">
          <img
            src="https://camtur.com.uy/wp-content/uploads/2021/05/slider-2.jpg"
            alt="INEFOP - COURSERA"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">INEFOP - COURSERA</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          Alianza entre INEFOP y Coursera que ofrece acceso gratuito a miles de cursos online de universidades y
          empresas de prestigio mundial.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Más de 4,000 cursos disponibles</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Certificaciones profesionales reconocidas</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Para residentes en Uruguay</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Modalidad 100% online</span>
          </div>
        </div>
        <div className="mt-auto">
          <a
            href="https://www.inefop.org.uy/Cursos-uc36"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Más información
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
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Fundación Telefónica Movistar */}
      <div className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
        <div className="h-40 mb-4 rounded-md overflow-hidden">
          <img
            src="https://voluntarios.telefonica.com/assets/img/logo-telefonica-latam-2.png"
            alt="Fundación Telefónica Movistar"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Fundación Telefónica Movistar</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          Ofrece cursos gratuitos en habilidades digitales, programación y nuevas tecnologías a través de su plataforma
          Conecta Empleo.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Cursos en tecnologías emergentes</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Formación en habilidades digitales</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Certificados al finalizar</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Acceso a comunidad de aprendizaje</span>
          </div>
        </div>
        <div className="mt-auto">
          <a
            href="https://www.fundaciontelefonica.com/empleabilidad/conecta-empleo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Más información
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
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* UTU - Cursos Gratuitos */}
      <div className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
        <div className="h-40 mb-4 rounded-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBGiaYi7-e4QwvymyQtpz19dV3I1u6lkbaVnzcZj4Wmr67V4lcsNA-2Z-BvsU9XSTUtM&usqp=CAU"
            alt="UTU - Cursos Gratuitos"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">UTU - Cursos Gratuitos</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          La Universidad del Trabajo del Uruguay ofrece una amplia variedad de cursos técnicos y profesionales gratuitos
          en todo el país.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Formación técnica profesional</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Múltiples sedes en todo el país</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Diversas áreas de formación</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Títulos oficiales reconocidos</span>
          </div>
        </div>
        <div className="mt-auto">
          <a
            href="https://www.utu.edu.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Más información
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
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Plan Ceibal - Cursos */}
      <div className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
        <div className="h-40 mb-4 rounded-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq-VWyL0oVHRrY55AjKwn84FzoBzp2Qs9DA&s"
            alt="Plan Ceibal - Cursos"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Plan Ceibal - Cursos</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          Plan Ceibal ofrece diversos cursos gratuitos en tecnología, programación y habilidades digitales para
          estudiantes y docentes.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Cursos de programación y robótica</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Formación para docentes</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Recursos educativos digitales</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Plataformas de aprendizaje adaptativo</span>
          </div>
        </div>
        <div className="mt-auto">
          <a
            href="https://www.ceibal.edu.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Más información
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
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Uruguay XXI - Capacitaciones */}
      <div className="flex flex-col p-6 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
        <div className="h-40 mb-4 rounded-md overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5x5cCPAkB87HI7vu5Q7nfjzNHJuo_TGIeQ&s"
            alt="Uruguay XXI - Capacitaciones"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Uruguay XXI - Capacitaciones</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          Uruguay XXI ofrece capacitaciones gratuitas para emprendedores y empresas que buscan internacionalizarse y
          mejorar su competitividad.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Formación en comercio exterior</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Talleres de exportación</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Programas de internacionalización</span>
          </div>
          <div className="flex items-start gap-2">
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
            <span className="text-sm">Asesoramiento para emprendedores</span>
          </div>
        </div>
        <div className="mt-auto">
          <a
            href="https://www.uruguayxxi.gub.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Más información
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
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center">
      <p className="text-muted-foreground mb-4">
        Estas son solo algunas de las opciones de formación gratuita disponibles en Uruguay. Contáctanos para recibir
        asesoramiento personalizado sobre cuál es la mejor opción para ti.
      </p>
      <a
        href="/contacto"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 h-10 px-6 py-2"
      >
        Solicitar asesoramiento
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
          className="ml-2"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>
</section>

{
  /* 
  =====================================================================
  FIN DE LA SECCIÓN DE FORMACIONES GRATUITAS - COPIAR HASTA AQUÍ
  =====================================================================
*/
}

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
                <Link href="https://api.whatsapp.com/send/?phone=59898104211&text&type=phone_number&app_absent=0" target="_blank">
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
