import type React from "react"

// Tipos para los datos del JSON (antes de procesar)
export interface TestimonioData {
  texto: string
  autor: string
  cargo: string
}

export interface DetallesEmprendimientoData {
  historia: string
  desafio: string
  solucion: string
  resultados: string[]
  testimonio: TestimonioData
  galeria: string[]
}

export interface EmprendimientoData {
  id: number
  nombre: string
  descripcion: string
  categoria: string
  ubicacion: string
  servicios: string[]
  imagen: string
  logo: string
  icono: string // En el JSON es string, se convierte a ReactNode después
  valoracion: number
  destacado: boolean
  sitioWeb: string
  instagram: string
  detalles: DetallesEmprendimientoData
}

// Tipos para los datos procesados (con iconos como ReactNode)
export interface Testimonio {
  texto: string
  autor: string
  cargo: string
}

export interface DetallesEmprendimiento {
  historia: string
  desafio: string
  solucion: string
  resultados: string[]
  testimonio: Testimonio
  galeria: string[]
}

export interface Emprendimiento {
  id: number
  nombre: string
  descripcion: string
  categoria: string
  ubicacion: string
  servicios: string[]
  imagen: string
  logo: string
  icono: React.ReactNode
  valoracion: number
  destacado: boolean
  sitioWeb: string
  instagram: string
  detalles: DetallesEmprendimiento
}

// Tipo para la estructura completa del JSON
export interface EmprendimientosDataFile {
  categorias: string[]
  emprendimientos: EmprendimientoData[]
}
