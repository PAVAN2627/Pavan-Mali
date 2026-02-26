export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} Pavan Mali. Built with passion.
        </p>
      </div>
    </footer>
  );
}
