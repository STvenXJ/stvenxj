import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { Project } from "@/lib/types"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <Card className="group relative overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-indigo-500/20 opacity-0 blur-xl transition group-hover:opacity-100" />

      <CardContent className="relative p-6">
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>

        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-6 w-full gap-2"
          asChild
        >
          <a href={project.file} download>
            <Download className="h-4 w-4" />
            Download file
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
