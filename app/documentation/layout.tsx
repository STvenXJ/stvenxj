export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex">
      <nav className="hidden sm:flex sm:w-50">halo</nav>
      {children}
    </section>
	);
}
