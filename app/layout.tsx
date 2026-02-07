import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/components/QueryProvider";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "STvenXJ",
	description: "semua automasi yang kamu butuhkan disini",
	icons: "/favicon.svg",	
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<QueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<Navbar />
						{children}
						<Footer />
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
