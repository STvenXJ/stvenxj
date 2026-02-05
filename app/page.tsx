import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Wrench, Code, FileText, Youtube, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="container mx-auto px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* LEFT */}
            <div>
              <Badge variant="outline" className="mb-4">
                Automation • AHK • Program • Experiments
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Automation & Tools <br />
                <span className="text-primary">Explained Through Real Use</span>
              </h1>

              <p className="mt-6 max-w-xl text-muted-foreground">
                Website ini berisi tools, file AutoHotkey, dan eksperimen
                automatisasi yang aku jelaskan langsung lewat video — real use,
                real logic.
              </p>

              <div className="mt-8 flex gap-4">
                <Link href="/projects">
                <Button>Explore Content</Button>
                </Link>
                <Link href={"https://www.youtube.com/@STvenXJ"} target="_blank">
                <Button variant="outline">Watch Videos <ArrowRight /></Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* === BLOAT / GLOW BACKGROUND === */}
              <div className="pointer-events-none absolute -inset-10 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[140px]" />
              </div>

              <Card className="border bg-muted/40 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Code className="h-4 w-4 text-indigo-400" />
                    example.ahk
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <pre className="rounded-xl bg-background/80 p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                    <code>
                      {`^!t::
Run, notepad.exe
Send, Automation ready!
return`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What You’ll Find Here
            </h2>
            <p className="mt-4 text-muted-foreground">
              Semua konten berbasis pengalaman dan eksperimen nyata
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle className="mt-4">Automation Scripts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Script AutoHotkey dan automation kecil untuk task tertentu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-6 w-6 text-primary" />
                <CardTitle className="mt-4">Utility Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tools ringan buat ningkatin workflow harian.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-6 w-6 text-primary" />
                <CardTitle className="mt-4">Code Experiments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Eksperimen logika, scripting, dan automation flow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle className="mt-4">Explanation & Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Penjelasan kenapa & bagaimana sebuah tool dibuat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">
            What This Site Is About
          </h2>

          <p className="mt-6 text-muted-foreground">
            Website ini adalah dokumentasi dari hal-hal teknis yang aku pelajari
            dan pakai sehari-hari.
          </p>

          <p className="mt-4 text-muted-foreground">
            Banyak orang pakai tools tanpa ngerti cara kerjanya. Di sini, aku
            jelasin dari sisi logika, alur, dan alasan kenapa sebuah automation
            dibuat.
          </p>

          <p className="mt-4 text-muted-foreground">
            Kalau kamu ngerti konsepnya, kamu bisa bikin versi kamu sendiri.
          </p>
        </div>
      </section>

      {/* ================= YOUTUBE ================= */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Explained on YouTube
          </h2>
          <p className="mt-4 text-muted-foreground">
            Penjelasan utama selalu lewat video. Website ini pelengkapnya.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-xl overflow-hidden border">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/videoseries?list=PL7p476wtgQosM6LnA9_rbZL-lRHVn2YpJ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="https://www.youtube.com/@STvenXJ" target="_blank">
            <Button variant="outline" className="gap-2">
              <Youtube className="h-4 w-4" />
              YouTube Channel
            </Button>
          </Link>
          <Link href="https://github.com/STvenXJ" target="_blank">
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              Files / Repo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
