export function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-mono text-[11px] tracking-wider text-muted">
      {children}
    </h2>
  )
}
