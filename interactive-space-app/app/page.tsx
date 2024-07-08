import Scene from '../components/Scene'
import InteractiveUI from '../components/InteractiveUI'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Scene />
      </div>
      <InteractiveUI />
    </main>
  )
}