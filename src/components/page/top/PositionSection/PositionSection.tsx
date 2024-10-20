import { DATA } from './PositionSection.data'

export const PositionSection = () => {
  return (
    <section id="skill">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Position</h2>
        <div className="flex flex-wrap gap-2">
          {DATA.positions.map((position) => (
            <div
              key={position.name}
              className="flex items-center justify-center gap-1 rounded-lg bg-secondary px-2.5 py-1 transition-colors hover:bg-secondary/80"
            >
              <position.icon className="size-4" />
              <p className="text-sm font-medium">{position.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
