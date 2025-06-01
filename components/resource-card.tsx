import type React from "react"
import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ResourceCardProps {
  title: string
  description: string
  category: string
  size: string
  platform: string
  downloadUrl: string
  icon: React.ReactNode
}

export default function ResourceCard({
  title,
  description,
  category,
  size,
  platform,
  downloadUrl,
  icon,
}: ResourceCardProps) {
  // Función para determinar el color del badge según la categoría
  const getBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "cursos":
        return "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
      case "tutoriales":
        return "bg-green-500/20 text-green-400 hover:bg-green-500/30"
      case "e-books":
        return "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"
      case "plantillas":
        return "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
    }
  }

  // Función para determinar el color del badge según la plataforma
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "google drive":
        return "bg-blue-900/20 text-blue-300 hover:bg-blue-900/30"
      case "mega":
        return "bg-red-900/20 text-red-200 hover:bg-red-900/30" // Rojo similar al logo de MEGA
      case "mediafire":
        return "bg-orange-700/20 text-orange-300 hover:bg-orange-700/30" // Naranja como su branding
      case "enlaces directos":
        return "bg-green-900/20 text-green-300 hover:bg-green-900/30"
      case "youtube":
        return "bg-red-900/20 text-red-300 hover:bg-red-900/30"
      default:
        return "bg-gray-900/20 text-gray-300 hover:bg-gray-900/30"
    }
  }
  return (
    <div className="flex flex-col p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all hover-scale gradient-border">
      <div className="flex items-start gap-3 mb-3">
        <div className="rounded-full bg-blue-900/30 p-2">{icon}</div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge className={getBadgeColor(category)}>{category}</Badge>
            <Badge variant="outline" className="border-border/50">
              {size}
            </Badge>
            <Badge className={getPlatformColor(platform)}>{platform}</Badge>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
      <div className="mt-auto flex justify-between items-center">
        <Button asChild variant="outline" size="sm" className="gap-1 border-blue-500/30 hover:border-blue-500/60">
          <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" /> Ver
          </Link>
        </Button>
        <Button
          asChild
          size="sm"
          className="bg-violet-400 hover:bg-violet-500 text-white py-2 px-4 rounded"
        >
          <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" /> Acceder
          </Link>
        </Button>
      </div>
    </div>
  )
}
