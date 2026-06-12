import { BentoGrid } from './components/layout/BentoGrid'
import { SmoothScroll } from './components/layout/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <main className="min-h-screen selection:bg-primary selection:text-primary-foreground">
        <BentoGrid />
      </main>
    </SmoothScroll>
  )
}

export default App 
