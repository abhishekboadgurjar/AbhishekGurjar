export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Abhishek Gurjar. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              Designed & Built with ❤️ by Abhishek Gurjar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}