import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background/40 backdrop-blur-sm rounded-lg border border-border/50 hover:shadow-md transition-all hover-scale gradient-border">

      <div className="rounded-full bg-blue-900/30 p-3 mb-4 animate-pulse-slow">{icon}</div>
      <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    
    </div>
  )
}
