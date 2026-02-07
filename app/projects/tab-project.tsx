"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { ProjectCard } from "./project-card";

const GOOGLE_SHEETS_URL =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vQTCoRHuueCLaxnNcs1USWY4eFc_RfHK20Uuflde5jzUjqnNAEqpzZmVOpWI6HKSG7PogiYWH7ByHDC/pub?output=csv";

// Tentukan 3 kategori utama saja
const FIXED_CATEGORIES = ["All", "Program", "AHK"];

export default function FullProjectPage() {
	const {
		data: projects,
		isLoading,
		isError,
	} = useQuery<Project[]>({
		refetchOnWindowFocus: true,
		queryKey: ["projects"],
		queryFn: async () => {
			const { data } = await axios.get(GOOGLE_SHEETS_URL);
			const rows = data.split("\n").filter((row: string) => row.trim() !== "");

			return rows.slice(1).map((row: string) => {
				const columns = row.split(",");
				return {
					id: columns[0],
					title: columns[1],
					description: columns[2],
					image: columns[3],
					link: columns[4],
					category: columns[5]?.trim() || "Uncategorized",
					tags:
						columns[6]
							?.replace(/"/g, "")
							.split(";")
							.map((t: string) => t.trim()) || [],
				};
			});
		},
	});

	if (isLoading)
		return (
			<div className="flex h-screen items-center justify-center">
				<Loader2 className="h-8 w-8 animate-spin text-primary" />
			</div>
		);

	if (isError)
		return (
			<div className="text-center py-20 text-red-500">Gagal memuat data.</div>
		);

	return (
		<section className="container mx-auto py-10">
			<Tabs defaultValue="All" className="w-full">
				<div className="flex justify-center mb-10">
					{/* h-auto dan p-1.5 memastikan background membungkus semua tombol walau turun baris */}
					<TabsList className="flex flex-wrap gap-2 h-auto p-1.5 w-full md:w-max justify-center bg-muted">
						{FIXED_CATEGORIES.map((cat) => {
							// Hitung jumlah project berdasarkan kategori yang fix
							const count =
								cat === "All"
									? projects?.length
									: projects?.filter(
											(p) => p.category.toLowerCase() === cat.toLowerCase(),
										).length;

							return (
								<TabsTrigger
									key={cat}
									value={cat}
									className="px-6 py-2.5 capitalize data-[state=active]:bg-background data-[state=active]:shadow-sm">
									{cat}
									<span className="ml-2 opacity-50 font-mono">
										({count || 0})
									</span>
								</TabsTrigger>
							);
						})}
					</TabsList>
				</div>

				{FIXED_CATEGORIES.map((cat) => (
					<TabsContent key={cat} value={cat} className="mt-0 outline-none">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2">
							{projects
								?.filter(
									(p) =>
										cat === "All" ||
										p.category.toLowerCase() === cat.toLowerCase(),
								)
								.map((project) => (
									<ProjectCard key={project.id} project={project} />
								))}
						</div>

						{/* Tampilan jika kategori kosong */}
						{projects?.filter(
							(p) =>
								cat === "All" || p.category.toLowerCase() === cat.toLowerCase(),
						).length === 0 && (
							<p className="text-center text-muted-foreground py-20">
								Tidak ada project di kategori ini.
							</p>
						)}
					</TabsContent>
				))}
			</Tabs>
		</section>
	);
}
