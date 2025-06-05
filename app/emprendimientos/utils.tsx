import { Coffee, Utensils, Shirt, Palette, BookOpen, GraduationCap, ShoppingBag, Store, Briefcase } from "lucide-react"

// Mapeo de iconos
const iconMap = {
  Coffee,
  Utensils,
  Shirt,
  Palette,
  BookOpen,
  GraduationCap,
  ShoppingBag,
  Store,
  Briefcase,
}

// Función para obtener el icono correcto
export const getIcon = (iconName: string) => {
  if (!iconName || iconName === "") {
    // Asignar iconos por defecto según categoría
    return <Utensils className="h-4 w-4" />
  }

  const IconComponent = iconMap[iconName as keyof typeof iconMap]
  return IconComponent ? <IconComponent className="h-4 w-4" /> : <Store className="h-4 w-4" />
}

// Función para procesar los datos de emprendimientos
export function processEmprendimientosData(emprendimientos: any[]) {
  return emprendimientos.map((emprendimiento) => {
    // Asignar icono según categoría si no tiene uno definido
    let iconName = emprendimiento.icono
    if (!iconName || iconName === "") {
      switch (emprendimiento.categoria) {
        case "Gastronomía":
          iconName = "Utensils"
          break
        case "Moda":
          iconName = "Shirt"
          break
        case "Arte y Diseño":
          iconName = "Palette"
          break
        case "Educación":
          iconName = "GraduationCap"
          break
        case "Comercio":
          iconName = "ShoppingBag"
          break
        default:
          iconName = "Store"
      }
    }

    return {
      ...emprendimiento,
      icono: getIcon(iconName),
    }
  })
}
