import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "./project-card"
import { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Auto Rename Files",
    description:
      "Script AHK untuk rename banyak file sekaligus berdasarkan pola tertentu.",
    image: "/projects/rename.png",
    file: "/ahk/rename.ahk",
    tags: ["AHK", "Automation", "Files"],
    category: "AHK",
  },
  {
    id: 2,
    title: "Quick Window Switcher",
    description:
      "Shortcut custom untuk pindah window lebih cepat.",
    image: "/projects/window.png",
    file: "/ahk/window-switch.ahk",
    tags: ["AHK", "Productivity"],
    category: "Tools",
  },
]

const categories = ["All", "AHK", "Tools"] as const

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b">
        <div className="container mx-auto px-6 py-24 text-center">
          <Badge variant="outline" className="mb-4">
            Automation • Program • Tools
          </Badge>

          <h1 className="text-4xl font-bold sm:text-6xl">
            Projects & Automation Files
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Kumpulan file automation dan tools yang aku jelaskan
            langsung lewat video YouTube.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container mx-auto px-6 py-24">
        <Tabs defaultValue="All">
          <TabsList className="mx-auto mb-12 grid w-fit grid-cols-3">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter(
                    (p) => cat === "All" || p.category === cat
                  )
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  )
}
