import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/lib/types";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

type Props = {
	project: Project;
};

export function ProjectCard({ project }: Props) {
	return (
		<Card className="group relative overflow-hidden transition hover:shadow-lg">
			{/* glow */}
			<div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-indigo-500/20 opacity-0 blur-xl transition group-hover:opacity-100" />

			<CardContent className="relative p-6">
				<div className="relative mb-4 w-full overflow-hidden rounded-lg">
					<img
						src={project.image === "" ? "/logo.jpg" : project.image}
						alt={project.title}
						className="object-cover aspect-square"
						height={500}
						width={500}
					/>
				</div>

				<h3 className="text-lg font-semibold">{project.title}</h3>

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
				
				<Link href={project.link === "" ? "#" : project.link} target="_blank">
					<Button variant="outline" className="mt-6 w-full gap-2">
						<DownloadIcon className="h-4 w-4" />
						Download file
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
