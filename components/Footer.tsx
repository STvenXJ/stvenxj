export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-sm text-muted-foreground">
          Built for learning, experimentation, and automation.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © 2022 - {new Date().getFullYear()} STvenXJ
        </p>
      </div>
    </footer>
  );
}
