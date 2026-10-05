import { SectionLabel } from './section-label'

const contacts = [
  { label: 'GitHub', href: 'https://github.com/your-username', handle: 'github.com/your-username' },
  { label: 'Discord', href: 'https://discord.com/users/your-id', handle: 'your-discord' },
  { label: 'Email', href: 'mailto:hello@example.com', handle: 'hello@example.com' },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-label" className="mt-28 border-t border-line pt-6 md:mt-36">
      <SectionLabel id="contact-label">CONTACT</SectionLabel>
      <ul className="mt-8 max-w-md">
        {contacts.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-baseline justify-between gap-4 py-1.5"
            >
              <span className="underline decoration-faint underline-offset-4 transition-colors group-hover:decoration-foreground">
                {c.label}
              </span>
              <span className="truncate font-mono text-[11px] text-faint transition-colors group-hover:text-muted">
                {c.handle}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
