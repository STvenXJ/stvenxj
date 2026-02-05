import { Badge } from "@/components/ui/badge";
import TabProject from "./tab-project";
import MaxWidthDiv from "@/components/MaxWidthDiv";

export default function Page() {

	return (
		<MaxWidthDiv>
			{/* HERO SECTION */}
			<section>
				<div className="container mx-auto px-6 py-24 text-center">
					<Badge variant="outline" className="mb-4">
						Automation • Program • Tools
					</Badge>
					<h1 className="text-4xl font-bold sm:text-6xl">
						Projects & Automation Files
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
						Data ini diambil langsung secara realtime dari Google Sheets.
					</p>
				</div>
			</section>

			{/* PROJECTS SECTION */}
        <TabProject />				
		</MaxWidthDiv>
	);
}
