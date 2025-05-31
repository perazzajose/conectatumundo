// Utilidades adicionales para manejo de imágenes

// Función para generar rutas de placeholder más específicas
export function getPlaceholderImage(width = 400, height = 300, text?: string): string {
  const baseUrl = `/placeholder.svg?height=${height}&width=${width}`
  return text ? `${baseUrl}&text=${encodeURIComponent(text)}` : baseUrl
}

// Función para validar si una imagen existe (opcional, para desarrollo)
export function validateImagePath(path: string): boolean {
  // En desarrollo, podrías implementar una validación
  // En producción, esto no es necesario
  return path.length > 0
}

// Función para obtener la ruta optimizada de imagen
export function getOptimizedImagePath(
  originalPath: string,
  options?: {
    width?: number
    height?: number
    quality?: number
  },
): string {
  // Si usas un servicio de optimización de imágenes como Cloudinary
  // puedes procesar la URL aquí

  if (originalPath.startsWith("/placeholder.svg")) {
    return originalPath
  }

  // Para imágenes reales, podrías agregar parámetros de optimización
  const { width, height, quality } = options || {}
  let optimizedPath = originalPath

  if (width || height || quality) {
    const params = new URLSearchParams()
    if (width) params.set("w", width.toString())
    if (height) params.set("h", height.toString())
    if (quality) params.set("q", quality.toString())

    const separator = originalPath.includes("?") ? "&" : "?"
    optimizedPath = `${originalPath}${separator}${params.toString()}`
  }

  return optimizedPath
}
