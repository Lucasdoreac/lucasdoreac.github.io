import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="bg-white dark:bg-primary min-h-screen">
      <Header />
      <Hero />
      <Projects />
    </main>
  )
}