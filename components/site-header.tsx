const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/95">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-sm font-medium tracking-wide">
          DEZ
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-5 font-mono text-[11px] uppercase tracking-wider text-muted md:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
