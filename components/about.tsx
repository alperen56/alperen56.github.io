import { SectionLabel } from './section-label'

const skills = [
  'Luau',
  'Python',
  'JavaScript',
  'C#',
  'Roblox Studio',
  'Unity',
  'AI / LLM',
  'RAG',
  'Git',
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="mt-28 grid gap-10 border-t border-line pt-6 md:mt-36 md:grid-cols-[1fr_14rem] md:gap-16"
    >
      <div>
        <SectionLabel id="about-label">ABOUT</SectionLabel>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 md:text-[17px]">
          {"I'm Alperen, a developer interested in game development, software and artificial intelligence. Most of my projects start as experiments and gradually turn into something usable."}
        </p>
      </div>

      <div>
        <h3 className="font-mono text-[11px] tracking-wider text-muted">USING</h3>
        <ul className="mt-8 space-y-1.5 text-sm text-muted">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
