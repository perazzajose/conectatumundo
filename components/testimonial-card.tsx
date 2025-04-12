import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="flex flex-col p-6 bg-background/40 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm hover-scale">
      <Quote className="h-8 w-8 text-blue-500/50 mb-4" />
      <p className="text-foreground mb-4 flex-grow">{quote}</p>
      <div className="mt-auto">
        <p className="font-bold text-blue-400">{author}</p>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </div>
  )
}
