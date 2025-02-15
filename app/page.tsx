import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <Hero />
        <TechStack />
      </main>
    </>
  );
}