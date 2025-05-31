import { Coffee, Leaf, Code, Utensils, Palette, Heart, BookOpen, ShoppingBag } from "lucide-react"
import type { EmprendimientoData, Emprendimiento } from "./types"

// Mapeo de iconos
const iconMap = {
  Coffee: <Coffee className="h-5 w-5" />,
  Leaf: <Leaf className="h-5 w-5" />,
  Code: <Code className="h-5 w-5" />,
  Utensils: <Utensils className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  Heart: <Heart className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5" />,
} as const

// Función para generar placeholders con dimensiones y texto personalizados
function getPlaceholder(width: number, height: number, text?: string): string {
  const baseUrl = `/placeholder.svg?height=${height}&width=${width}`
  return text ? `${baseUrl}&text=${encodeURIComponent(text)}` : baseUrl
}

// Función para procesar un emprendimiento individual
function processEmprendimiento(empData: EmprendimientoData): Emprendimiento {
  // Crear placeholders personalizados para cada emprendimiento
  const nombreCorto = empData.nombre.split(" ")[0].toLowerCase()
  const placeholderImagen = getPlaceholder(500, 300, `${empData.nombre}`)
  const placeholderLogo = getPlaceholder(100, 100, nombreCorto)
  const placeholderGaleria = getPlaceholder(300, 200, `Galería ${nombreCorto}`)

  return {
    ...empData,
    // Usar el icono del mapa o un icono por defecto
    icono: iconMap[empData.icono as keyof typeof iconMap] || <Coffee className="h-5 w-5" />,

    // Usar la imagen especificada o un placeholder
    imagen: empData.imagen || placeholderImagen,

    // Usar el logo especificado o un placeholder
    logo: empData.logo || placeholderLogo,

    detalles: {
      ...empData.detalles,
      // Procesar cada imagen de la galería o usar placeholders
      galeria: empData.detalles.galeria.map((img) => img || placeholderGaleria),
    },
  }
}

// Función principal para procesar todos los emprendimientos
export function processEmprendimientosData(emprendimientos: EmprendimientoData[]): Emprendimiento[] {
  return emprendimientos.map(processEmprendimiento)
}
