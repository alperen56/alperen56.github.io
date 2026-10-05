import Image from 'next/image'
import { SectionLabel } from './section-label'

const projects = [
  {
    href: '#kryptos',
    title: 'Kryptos',
    description: 'Local security assessment tool',
    stack: 'Python / LLM / RAG',
    image: '/work/kryptos.png',
  },
  {
    href: '#roblox',
    title: 'Roblox Game',
    description: 'Multiplayer Roblox experience',
    stack: 'Luau / Roblox Studio',
    image: '/work/roblox.png',
  },
  {
    href: '#tsharp',
    title: 'T#',
    description: 'AI orchestration programming language',
    stack: 'JavaScript / AI / APIs',
    image: '/work/tsharp.png',
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-label" className="border-t border-line pt-6">
      <div className="flex items-baseline justify-between">
        <SectionLabel id="projects-label">SELECTED WORK</SectionLabel>
        <span className="font-mono text-[11px] text-faint">{String(projects.length).padStart(2, '0')}</span>
      </div>

      <ol className="mt-8">
        {projects.map((project, i) => (
          <li key={project.href} className="border-b border-line first:border-t">
            <a
              href={project.href}
              className="group -mx-3 grid grid-cols-[2rem_1fr_auto] items-center gap-x-4 px-3 py-5 transition-colors duration-200 hover:bg-raised md:grid-cols-[3rem_1fr_14rem_7.5rem] md:gap-x-6"
            >
              <span className="self-start pt-1 font-mono text-[11px] text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-muted md:self-center md:pt-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0">
                <h3 className="text-base font-medium md:text-lg">{project.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{project.description}</p>
                <p className="mt-2 font-mono text-[11px] text-faint md:hidden">{project.stack}</p>
              </div>

              <p className="hidden font-mono text-[11px] text-faint md:block">{project.stack}</p>

              <div className="relative aspect-[16/10] w-20 overflow-hidden border border-line md:w-full">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover opacity-60 grayscale transition-opacity duration-200 group-hover:opacity-90"
                />
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
