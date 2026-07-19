import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-void/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <a href="#hero" className="text-lg font-bold text-white">
          {siteConfig.name}
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mt-10 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
