import type React from "react"
import {
  Coffee,
  Leaf,
  Code,
  Utensils,
  Palette,
  BookOpen,
  ShoppingBag,
  Store,
  Briefcase,
  Heart,
  Laptop,
  Camera,
  Music,
  Car,
  Home,
  Scissors,
  Dumbbell,
  Baby,
  PenTool,
  Shirt,
} from "lucide-react"
import type { Emprendimiento } from "./types"

// Mapeo de iconos de string a componentes React
const iconMap: Record<string, React.ComponentType<any>> = {
  Coffee,
  Leaf,
  Code,
  Utensils,
  Palette,
  BookOpen,
  ShoppingBag,
  Store,
  Briefcase,
  Heart,
  Laptop,
  Camera,
  Music,
  Car,
  Home,
  Scissors,
  Dumbbell,
  Baby,
  PenTool,
  Shirt,
}

// Función para convertir string de icono a componente React
export function getIconComponent(iconName: string): React.ReactNode {
  const IconComponent = iconMap[iconName]
  if (IconComponent) {
    return <IconComponent className="h-4 w-4" />
  }
  // Icono por defecto si no se encuentra
  return <Store className="h-4 w-4" />
}

// Función para procesar los datos de emprendimientos y convertir iconos
export function processEmprendimientosData(emprendimientos: any[]): Emprendimiento[] {
  return emprendimientos.map((emprendimiento) => ({
    ...emprendimiento,
    icono: getIconComponent(emprendimiento.icono), // Convertir string a componente React
  }))
}
