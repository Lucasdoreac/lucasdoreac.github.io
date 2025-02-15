import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Lucas Dórea Cardoso
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:text-gray-300">Sobre</Link>
            <Link href="#techstack" className="hover:text-gray-300">Tech Stack</Link>
            <Link href="#projects" className="hover:text-gray-300">Projetos</Link>
            <Link href="#contact" className="hover:text-gray-300">Contato</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}