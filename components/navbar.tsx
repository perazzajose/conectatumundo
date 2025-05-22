"use client"
import Image from "next/image";
import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/40 bg-purple-300/50 backdrop-blur-md shadow-[0_0_5px_5px_rgba(127,0,255,0.2)] h-16">


      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
        <img
    src="/conecta-logo.png" // Asegurate de poner el nombre correcto
    alt="Conecta Tu Mundo"
    width={150} // ajustá el tamaño como prefieras
    height={150}
    
  />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-red-400 transition-colors">
            Inicio
          </Link>
          <Link href="/servicios" className="text-sm font-medium hover:text-orange-300 transition-colors">
            Servicios
          </Link>
          <Link href="/recursos" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Recursos
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:text-green-400 transition-colors">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button asChild variant="outline" className="border-purple-500/50 hover:border-purple-500">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
          <Button
  asChild
  className="border-0"
>
  <Link 
    href="/servicios" 
    className="bg-violet-400 hover:bg-violet-500 text-white py-2 px-4 rounded">
    Nuestros Servicios
  </Link>
</Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/35 backdrop-blur-md border-l border-border/50">
            <div className="flex flex-col gap-6 mt-8">
            
             <Link
                href="/inicio"
                className="text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
              Inicio
                 </Link>
                  <Link
                href="/comunidad"
                className="text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Comunidad
              </Link>
              <Link
                href="/servicios"
                className="text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/recursos"
                className="text-lg font-medium transition-colors relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 relative">
                  Recursos
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></span>
                </span>
              </Link>


              <Link
                href="/nosotros"
                className="text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-blue-700  border-0"
                >
                  <Link href="/servicios" onClick={() => setIsOpen(false)}>
                    Nuestros Servicios
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-gray-500/50 hover:border-gray-500">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    Contáctanos
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
